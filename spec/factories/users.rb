# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { Faker::Internet.password(min_length: 8) }
  end

  factory :admin_user, parent: :user do
    roles { [create(:role, name: :admin)] }
  end
end
