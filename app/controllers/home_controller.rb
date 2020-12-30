class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index]
  skip_after_action :verify_policy_scoped

  def index
  end
end