Rails.application.routes.draw do
  root 'dashboards#index'
  devise_for :users
  get 'dashboards/hello' => 'dashboards#hello'
  get 'dashboards/login' => 'dashboards#login'
  post 'dashboards/signin' => 'dashboards#signin'
  get 'dashboards/list' => 'dashboards#list'

  get 'notes/list' => 'notes#list'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
