Rails.application.routes.draw do
  namespace :api do
    get 'greetings/random', to: 'greetings#random'
  end
  get '*path', to: 'static#index', via: :all
end
