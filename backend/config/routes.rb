Rails.application.routes.draw do
  get '/user_images', to: 'images#all_user_images'
  post '/feed', to: 'images#all_images'
  post '/new_image', to: 'images#create'

  get '/all_users', to: 'users#all_users'
  post '/login', to: 'users#login'
  post '/signup', to: 'users#signup'
end
