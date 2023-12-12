# frozen_string_literal: true

class MailingListController < ApplicationController
  def submit_email
    read_email_param

    return render_bad_request("Email is invalid") unless MailingList.record_email(@email)

    render json: { message: "Email recorded successfully" }
  end

  private

  def read_email_param
    @email = params[:email]
    render_bad_request("Email is missing") unless @email.present?
  end

  def render_bad_request(message)
    render json: { message: message }, status: :bad_request
  end
end
