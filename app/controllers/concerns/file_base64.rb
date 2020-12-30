# frozen_string_literal: true
module FileBase64
  extend ActiveSupport::Concern

  def extract(base64_content)
    content_type, encoding, content = base64_content.split(/[:;,]/)[1..3]
    content = Base64.decode64(content).force_encoding('UTF-8')

    [content_type, encoding, content]
  end
end