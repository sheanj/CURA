Rails.application.routes.draw do
  
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/timeline', to: 'timeline#all_posts'

  resources :users 
    resources :linkposts
    resources :textposts
  # resources :photoUploads

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
