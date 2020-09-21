Rails.application.routes.draw do
  
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/timeline', to: 'timeline#all_posts'

  resources :users 
    resources :linkposts
    resources :textposts
  # resources :photoUploads
  # member do
  #   delete 'delete_image/:image_id', action: 'delete_image', as: 'delete_image'
  # end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
