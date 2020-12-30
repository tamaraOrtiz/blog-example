class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :published_at, :description
end
