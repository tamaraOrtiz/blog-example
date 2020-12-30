# frozen_string_literal: true

module Cookies
  # Sets the CSRF token to use on client to make REST calls
  def set_csrf_cookie
    cookies['CSRF-TOKEN'] = { value: form_authenticity_token, same_site: :none, secure: true }
  end
end
