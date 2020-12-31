# frozen_string_literal: true

class ArticlesController < ApplicationController
  include FileBase64
  skip_before_action :authenticate_user!, only: %i[index]

  def remote_index
    authorize(Article)
    context = Articles::RemoteArticleList.call(page: params[:page])
    if context.success?
      render json: context.resources.to_json, status: :ok
    else
      render status: :bad_request
    end
  end

  protected

  def resources
    @resources ||= Article.all
  end

  def find_resource
    article = Article.find(params[:id])
    init_file(article)
    article
  end

  def initialize_resource
    article = Article.new(resource_params)
    init_file(article)
    article
  end

  def init_file(article)
    return if params.dig(:article, :image).blank?

    filename = params.dig(:article, :image, :filename)
    data = params.dig(:article, :image, :data)
    _content_type, _encoding, content = extract(data)
    Tempfile.create(filename) do |tempfile|
      tempfile.write(content)
      tempfile.rewind
      article.image = tempfile
    end
  end

  def serializer
    ArticleSerializer
  end

  def resource_params
    params
      .require(:article)
      .permit(%i[title content published_at description])
  end
end
