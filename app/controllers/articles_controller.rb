class ArticlesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index]

  protected

  def resources
    @resources ||= Article.all
  end

  def serializer
    ArticleSerializer
  end
end