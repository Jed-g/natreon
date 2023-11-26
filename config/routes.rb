Rails.application.routes.draw do
  devise_for :users, path: 'api/auth', path_names: {
                                         sign_in: 'login',
                                         sign_out: 'logout',
                                         registration: 'signup'
                                       },
                     controllers: {
                       sessions: 'users/sessions',
                       registrations: 'users/registrations'
                     }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  scope 'api' do
    get '/auth/status', to: 'users/authentication_status#index'
    get '/admin/users', to: 'admin/users#get_users'
    post '/admin/users', to: 'admin/users#update_user'
    delete '/admin/users', to: 'admin/users#delete_user'
    get '/reviews', to: 'reviews#get_reviews'
    post "/reviews", to: "reviews#submit_review"
    post "/reviews/upvote", to: "reviews#upvote_review"
    post "/reviews/downvote", to: "reviews#downvote_review"
    delete "/reviews/upvote", to: "reviews#cancel_upvote_review"
    delete "/reviews/downvote", to: "reviews#cancel_downvote_review"
    get '/admin/reviews', to: 'admin/reviews#get_reviews'
    delete '/admin/reviews', to: 'admin/reviews#delete_review'
  end
end
