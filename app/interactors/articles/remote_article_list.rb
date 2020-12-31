# frozen_string_literal: true

require 'news-api'

module Articles
  class RemoteArticleList
    include Interactor

    def call
      news_api = News.new(ENV['REMOTE_ARTICLES_API_KEY'])
      all_articles = news_api.get_everything(q: keyword, pageSize: page_size, page: page)

      context.resources = all_articles
    rescue StandardError => e
      Rails.logger.error(e.message)
      context.resources = []
    end

    private

    def page
      context.page ||= 1
    end

    def page_size
      ENV['PAGE_SIZE']
    end

    def keyword
      'watches'
    end
  end
end
