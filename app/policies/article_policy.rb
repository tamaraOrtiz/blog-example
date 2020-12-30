# frozen_string_literal: true
class ArticlePolicy < ApplicationPolicy
  class Scope < ApplicationPolicy::Scope
    def resolve
      return scope.all
    end
  end

  def edit?
    user.has_role?(:admin)
  end
end