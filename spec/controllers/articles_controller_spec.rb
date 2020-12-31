require 'rails_helper'

RSpec.describe ArticlesController, type: :controller do
  let!(:article) { FactoryBot.create(:article) }
  let!(:role) { FactoryBot.create(:role) }
  let(:user) { FactoryBot.create(:user, roles: [role]) }

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

  describe 'create' do
    let(:article_params) {
      { title: 'Test',
        description: 'description',
        published_at: '2019-11-29T19:34:04.174Z' }
    }

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
    let(:article_params) {
      { title: 'Test Update',
        description: 'description',
        published_at: '2019-10-29T19:34:04.174Z' }
    }

    context 'with logged user' do
      before do
        login_user
        put :update, params: { id: article.id, article: article_params }
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
        expect(data['id']).to eq(article.id)
        expect(data['title']).to eq(article.title)
        expect(data['publishedAt']).to eq(article.published_at.to_s)
      end
    end

    context 'without logged user' do
      before do
        put :update, params: { id: article.id, article: article_params }
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
