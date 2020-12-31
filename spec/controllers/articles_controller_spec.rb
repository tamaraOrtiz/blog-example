# frozen_string_literal: true

require 'rails_helper'
require 'news-api'

RSpec.describe ArticlesController, type: :controller do
  let!(:article) { FactoryBot.create(:article) }
  let!(:page) { 1 }
  let(:new_instance) { instance_double(News) }
  let(:user) { FactoryBot.create(:admin_user) }

  describe 'index' do
    context 'with logged user' do
      before do
        login_user
        get :index, format: 'json'
      end

      it 'has http status success' do
        expect(response).to have_http_status(:success)
      end

      it 'renders article' do
        data = JSON.parse(response.body).first
        expect(data['id']).to eq(article.id)
        expect(data['title']).to eq(article.title)
        expect(data['content']).to eq(article.content)
        expect(data['description']).to eq(article.description)
      end
    end

    context 'with page param 1' do
      before do
        login_user
        get :index, params: { page: 1 }, format: 'json'
      end

      it 'has http status success' do
        expect(response).to have_http_status(:success)
      end

      it 'renders article' do
        data = JSON.parse(response.body).first
        expect(data['id']).to eq(article.id)
        expect(data['title']).to eq(article.title)
        expect(data['content']).to eq(article.content)
        expect(data['description']).to eq(article.description)
      end
    end

    context 'with page param 2' do
      before do
        login_user
        get :index, params: { page: 2 }, format: 'json'
      end

      it 'has http status success' do
        expect(response).to have_http_status(:success)
      end

      it 'renders article' do
        data = JSON.parse(response.body)
        expect(data.size).to eq(0)
      end
    end

    context 'without logged user' do
      before do
        get :index, format: 'json'
      end

      it 'has http status success' do
        expect(response).to have_http_status(:success)
      end

      it 'renders article' do
        data = JSON.parse(response.body).first
        expect(data['id']).to eq(article.id)
        expect(data['title']).to eq(article.title)
        expect(data['content']).to eq(article.content)
        expect(data['description']).to eq(article.description)
      end
    end
  end

  describe 'remote_index' do
    before do
      allow(News).to receive(:new).and_return(new_instance)
      allow(new_instance).to receive(:get_everything).with(q: 'watches', pageSize: '20', page: page.to_s)
                                                     .and_return(Article.all)
    end

    context 'with logged user' do
      before do
        login_user
        get :remote_index, format: 'json'
      end

      it 'has http status success' do
        expect(response).to have_http_status(:success)
      end

      it 'renders article' do
        data = JSON.parse(response.body).first
        expect(data['id']).to eq(article.id)
        expect(data['title']).to eq(article.title)
        expect(data['content']).to eq(article.content)
        expect(data['description']).to eq(article.description)
      end
    end

    context 'with page param 1' do
      before do
        login_user
        get :remote_index, params: { page: 1 }, format: 'json'
      end

      it 'has http status success' do
        expect(response).to have_http_status(:success)
      end

      it 'renders article' do
        data = JSON.parse(response.body).first
        expect(data['id']).to eq(article.id)
        expect(data['title']).to eq(article.title)
        expect(data['content']).to eq(article.content)
        expect(data['description']).to eq(article.description)
      end
    end

    context 'with page param 2' do
      let(:page) { 2 }

      before do
        login_user
        get :remote_index, params: { page: 2 }, format: 'json'
      end

      it 'has http status success' do
        expect(response).to have_http_status(:success)
      end
    end

    context 'without logged user' do
      before do
        get :remote_index, format: 'json'
      end

      it 'has http status success' do
        expect(response).to have_http_status(:success)
      end

      it 'renders article' do
        data = JSON.parse(response.body).first
        expect(data['id']).to eq(article.id)
        expect(data['title']).to eq(article.title)
        expect(data['content']).to eq(article.content)
        expect(data['description']).to eq(article.description)
      end
    end
  end

  describe 'create' do
    let(:article_params) do
      { title: 'Test',
        description: 'description',
        published_at: '2019-11-29T19:34:04.174Z' }
    end

    context 'with logged user' do
      before do
        login_user
        post :create, params: { article: article_params }, format: 'json'
      end

      it 'responds with status success' do
        expect(response).to have_http_status(:success)
      end

      it 'creates article' do
        expect(Article.count).to eq(2)
      end

      it 'creates article with attributes' do
        data = JSON.parse(response.body)
        article = Article.find(data['id'])
        expect(data['id']).to eq(article.id)
        expect(data['title']).to eq(article.title)
      end
    end

    context 'without logged user' do
      before do
        post :create, params: { article: article_params }, format: 'json'
      end

      it 'responds with status unauthorized' do
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'update' do
    let(:article_params) do
      { title: 'Test Update',
        description: 'description',
        published_at: '2019-10-29T19:34:04.174Z' }
    end

    context 'with logged user' do
      before do
        login_user
        put :update, params: { id: article.id, article: article_params }, format: 'json'
      end

      it 'responds with status success' do
        expect(response).to have_http_status(:success)
      end

      it 'not creates another article' do
        expect(Article.count).to eq(1)
      end

      it 'updates article with attributes' do
        data = JSON.parse(response.body)
        article.reload
        date = DateTime.parse(data['publishedAt'])
        expect(data['id']).to eq(article.id)
        expect(data['title']).to eq(article.title)
        expect(date.strftime('%c')).to eq(article.published_at.strftime('%c'))
      end
    end

    context 'without logged user' do
      before do
        put :update, params: { id: article.id, article: article_params }, format: 'json'
      end

      it 'responds with status unauthorized' do
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'destroy' do
    context 'with logged user' do
      before do
        login_user
        delete :destroy, params: { id: article.id }, format: 'json'
      end

      it 'responds with status success' do
        expect(response).to have_http_status(:success)
      end

      it 'destroys a article' do
        expect(Article.count).to eq(0)
      end

      it 'renders article' do
        expect(response).to have_http_status(:success)
        data = JSON.parse(response.body)
        expect(data['id']).to eq(article.id)
        expect(data['title']).to eq(article.title)
      end
    end

    context 'without logged user' do
      before do
        delete :destroy, params: { id: article.id }, format: 'json'
      end

      it 'responds with status unauthorized' do
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
