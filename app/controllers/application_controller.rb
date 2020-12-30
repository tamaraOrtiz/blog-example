class ApplicationController < ActionController::Base
  include BaseBehavior
  include Pundit
  before_action :authenticate_user!
  after_action :verify_authorized, except: :index
  after_action :verify_policy_scoped, only: :index
end
