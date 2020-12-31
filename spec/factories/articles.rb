# frozen_string_literal: true

FactoryBot.define do
  factory :article do
    title { Faker::Name.unique.name }
    content { 'MyString' }
    description { 'MyString' }
    published_at { '2019-11-29T19:34:04.174Z' }
  end
end
