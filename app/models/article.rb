class Article < ApplicationRecord
  mount_uploader :image, ImageUploader

  validates :published_at, :title, presence: true
  validates :title, uniqueness: true, length: { minimum: 4 }
end
