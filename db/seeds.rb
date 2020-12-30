# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


article = Article.find_or_initialize_by(title: 'Test')
article.assign_attributes(content: 'new content', published_at: Time.now, description: 'Test description')
article.save! if article.new_record?

admin_user = User.find_or_initialize_by(email: "test@email.com")
admin_user.assign_attributes(password: "Test122", password_confirmation: "Test122")
admin_role = Role.find_or_create_by!(name: :admin)
admin_user.roles << admin_role
admin_user.save!
