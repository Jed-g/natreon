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

    get "/utils/geolocation", to: "utils#geolocation"
    post "/utils/geolocation-with-ip-param", to: "utils#geolocation_with_ip_param"

    get "/stats/landing/register-new-page-visit", to: "stats/landing_page#register_new_page_visit"
    post "/stats/landing/register-new-page-visit-with-ip-param", to: "stats/landing_page#register_new_page_visit_with_ip_param"
    post "/stats/landing/update-page-visit", to: "stats/landing_page#update_page_visit"
    post "/stats/landing/path-to-registration-append", to: "stats/landing_page#path_to_registration_append"
    post "/stats/landing/registration-completed", to: "stats/landing_page#registration_completed"

    get "/stats/admin/register-new-page-visit", to: "stats/admin_page#register_new_page_visit"
    post "/stats/admin/register-new-page-visit-with-ip-param", to: "stats/admin_page#register_new_page_visit_with_ip_param"
    post "/stats/admin/update-page-visit", to: "stats/admin_page#update_page_visit"

    get "/stats/reporter/register-new-page-visit", to: "stats/reporter_page#register_new_page_visit"
    post "/stats/reporter/register-new-page-visit-with-ip-param", to: "stats/reporter_page#register_new_page_visit_with_ip_param"
    post "/stats/reporter/update-page-visit", to: "stats/reporter_page#update_page_visit"

    get "/stats/app/register-new-page-visit", to: "stats/app#register_new_page_visit"
    post "/stats/app/register-new-page-visit-with-ip-param", to: "stats/app#register_new_page_visit_with_ip_param"
    post "/stats/app/update-page-visit", to: "stats/app#update_page_visit"

    get "/admin/users", to: "admin/users#all_users"
    post "/admin/users", to: "admin/users#update_user"
    delete "/admin/users", to: "admin/users#delete_user"
    post "/admin/users/deactivate", to: "admin/users#deactivate_user"
    post "/admin/users/activate", to: "admin/users#activate_user"
    get "/admin/reviews", to: "admin/reviews#all_reviews"
    delete "/admin/reviews", to: "admin/reviews#delete_review"
    get "/admin/questions", to: "admin/questions#all_questions"
    post "/admin/questions", to: "admin/questions#answer_edit_create_question"
    delete "/admin/questions", to: "admin/questions#delete_question"
    get "/admin/mailinglist", to: "admin/mailing_list#all_emails"

    get "/admin/stats/globe", to: "admin/stats#globe"
    get "/admin/stats/all-visits", to: "admin/stats#all_visits"
    get "/admin/stats/route-visits", to: "admin/stats#route_visits"
    get "/admin/stats/overall-details", to: "admin/stats#overall_details"

    get "/reporter/stats/globe", to: "reporter/stats#globe"
    get "/reporter/stats/all-visits", to: "reporter/stats#all_visits"
    get "/reporter/stats/route-visits", to: "reporter/stats#route_visits"
    get "/reporter/stats/overall-details", to: "reporter/stats#overall_details"

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

    post "/mailinglist", to: "mailing_list#submit_email"
  end
end
