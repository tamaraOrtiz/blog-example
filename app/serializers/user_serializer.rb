class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :roles
  def roles
    object.roles.pluck(:name)
  end
end
