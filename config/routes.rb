Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index'

  devise_for :users

  devise_scope :user do
    get 'sessions', to: 'sessions#index', defaults: {format: :json}
    post 'sessions', to: 'sessions#create', defaults: {format: :json}
    delete 'sessions', to: 'sessions#destroy', defaults: {format: :json}
  end

  resources :articles, only: %i[index update create destroy remote_index], defaults: { format: :json } do
    collection do
      get 'remote_index', to: 'articles#remote_index'
    end
  end

  # Forward all requests to HomeController#index
  # but the requests must be non-Ajax (!req.xhr?) and HTML Mime type (req.format.html?)
  get '*page', to: 'home#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }

end
