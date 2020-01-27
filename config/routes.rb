Rails.application.routes.draw do
  root 'dashboards#index'
  devise_for :users
  get 'dashboards/hello' => 'dashboards#hello'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
