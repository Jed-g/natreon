# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, path: "api/auth", path_names: {
                                         sign_in:      "login",
                                         sign_out:     "logout",
                                         registration: "signup"
                                       },
                     controllers: {
                       sessions:      "users/sessions",
                       registrations: "users/registrations"
                     }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  scope "api" do
    get "/auth/status", to: "users/authentication_status#index"

    get "/utils/geolocation", to: "utils#geolocation_frontend"

    get "/admin/users", to: "admin/users#all_users"
    post "/admin/users", to: "admin/users#update_user"
    delete "/admin/users", to: "admin/users#delete_user"
    get "/admin/reviews", to: "admin/reviews#all_reviews"
    delete "/admin/reviews", to: "admin/reviews#delete_review"
    get "/admin/questions", to: "admin/questions#all_questions"
    post "/admin/questions", to: "admin/questions#answer_edit_create_question"
    delete "/admin/questions", to: "admin/questions#delete_question"

    get "/questions", to: "questions#all_questions"
    post "/questions", to: "questions#submit_question"
    post "/questions/upvote", to: "questions#upvote_question"
    post "/questions/downvote", to: "questions#downvote_question"
    delete "/questions/upvote", to: "questions#cancel_upvote_question"
    delete "/questions/downvote", to: "questions#cancel_downvote_question"

    get "/reviews", to: "reviews#all_reviews"
    post "/reviews", to: "reviews#submit_review"
    post "/reviews/upvote", to: "reviews#upvote_review"
    post "/reviews/downvote", to: "reviews#downvote_review"
    delete "/reviews/upvote", to: "reviews#cancel_upvote_review"
    delete "/reviews/downvote", to: "reviews#cancel_downvote_review"
  end
end
