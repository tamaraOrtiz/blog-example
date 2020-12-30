class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :published_at, :description, :url_to_image

  def url_to_image
    object.image.try(:url)
  end
end
