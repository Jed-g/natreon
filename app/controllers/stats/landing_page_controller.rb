# frozen_string_literal: true

module Stats
  class LandingPageController < ApplicationController
    def register_new_page_visit
      return render_bad_request if geolocation_from_ip(request.remote_ip).nil?

      page_visit = LandingPageVisit.new(session_id: session.id, ip_address: request.remote_ip)
      return render_internal_server_error unless page_visit.valid?

      page_visit.save
      session[:visit_id] = page_visit.id
      render json: {message: "Registered new visit successfully"}
    end

    def register_new_page_visit_with_ip_param
      ip = params[:ip]
      return render_bad_request if ip.nil?
      return render_bad_request if geolocation_from_ip(ip).nil?

      page_visit = LandingPageVisit.new(session_id: session.id, ip_address: ip)
      return render_internal_server_error unless page_visit.valid?

      page_visit.save
      session[:visit_id] = page_visit.id
      render json: {message: "Registered new visit successfully"}
    end

    def update_page_visit
      time_spent_seconds = params[:time_spent_seconds]
      return render_bad_request if time_spent_seconds.nil?
      return render_bad_request unless time_spent_seconds.is_a?(Integer) && time_spent_seconds.to_i >= 0

      visit_id = session[:visit_id]
      return render_bad_request if visit_id.nil?
      return render_bad_request unless LandingPageVisit.exists?(id: visit_id)

      page_visit = LandingPageVisit.find(visit_id)
      page_visit.time_spent_seconds = time_spent_seconds
      return render_internal_server_error unless page_visit.valid?

      page_visit.save
      render json: {message: "Page visit updated successfully"}
    end

    PATH_OPTIONS = ["/home", "/solution", "/features", "/pricing", "/register-interest", "/reviews", "/questions",
                    "/login", "/signup"].freeze

    def path_to_registration_append
      path = params[:path]
      return render_bad_request unless path.is_a?(String) && PATH_OPTIONS.include?(path)

      visit_id = session[:visit_id]
      return render_bad_request if visit_id.nil?
      return render_bad_request unless LandingPageVisit.exists?(id: visit_id)

      page_visit = LandingPageVisit.find(visit_id)
      last_element = page_visit.path_to_registration.split("/").last
      last_element ||= ""
      return render_bad_request if "/#{last_element}" == path

      page_visit.path_to_registration += path
      return render_internal_server_error unless page_visit.valid?

      page_visit.save
      render json: {message: "Path appended successfully"}
    end

    EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/

    def registration_completed
      email = params[:email]
      return render_bad_request unless valid_email?(email)

      visit_id = session[:visit_id]
      return render_bad_request if visit_id.nil?
      return render_bad_request unless LandingPageVisit.exists?(id: visit_id)

      page_visit = LandingPageVisit.find(visit_id)
      page_visit.email_of_registered_user = email
      return render_internal_server_error unless page_visit.valid?

      page_visit.save
      render json: {message: "Registration recorded successfully"}
    end

    private

    def valid_email?(email_)
      email_.match(EMAIL_REGEX)
    end
  end
end
