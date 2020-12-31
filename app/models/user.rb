# frozen_string_literal: true

class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :email, presence: true, length: { minimum: 4, maximum: 254 },
                    format: { with: /\A[a-zA-Z0-9_][a-zA-Z0-9.'+_-]{0,53}[a-zA-Z0-9]@((?:[a-z\d\-]+\.)+[a-zA-Z]{2,})\z/ }
  validates :email, uniqueness: { case_sensitive: false }
end
