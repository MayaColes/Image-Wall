Rails.application.routes.draw do
  get 'user_images', to: 'images#all_user_images'

  get 'all_users', to: 'users#all_users'
end
