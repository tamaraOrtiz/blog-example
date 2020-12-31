# frozen_string_literal: true

class ArticlePolicy < ApplicationPolicy
  class Scope < ApplicationPolicy::Scope
    def resolve
      scope.all
    end
  end

  def update?
    user.has_role?(:admin)
  end

  def remote_index?
    true
  end

  def create?
    user.has_role?(:admin)
  end

  def destroy?
    user.has_role?(:admin)
  end
end
