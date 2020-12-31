# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include BaseBehavior
  include Pundit
  before_action :authenticate_user!
  after_action :verify_authorized, except: :index
  after_action :verify_policy_scoped, only: :index

  rescue_from ActiveRecord::RecordInvalid, with: :rescue_invalid_record

  def rescue_invalid_record(exception)
    record = exception.record
    render json: { 'errors' => record.errors.to_h }, status: :unprocessable_entity
  end
end
