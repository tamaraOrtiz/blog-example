# frozen_string_literal: true

class SessionsController < Devise::SessionsController
  include Cookies

  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user!, only: %i[create]
  skip_after_action :verify_authorized
  skip_after_action :verify_policy_scoped

  respond_to :json

  def index
    return render json: {}, status: :unauthorized if current_user.blank?

    respond_with current_user
  end

  def destroy
    return render json: {}, status: :unauthorized if current_user.blank?

    super
  end

  private

  def respond_with(resource, _opts = {})
    render json: resource, serializer: UserSerializer
  end

end
