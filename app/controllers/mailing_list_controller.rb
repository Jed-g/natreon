class MailingListController < ApplicationController

    def submit_email
        read_email_param

        if MailingList.exists?(email: @email)
            return render_bad_request("Email has already been recorded")
        end

        mailing_list_item = MailingList.new(email: @email)
        return render_bad_request("Email is invalid") unless mailing_list_item.valid?

        mailing_list_item.save
        render json: {message: "Email recorded successfully"}
    end

    private

    def read_email_param
        @email = params[:email]
        render_bad_request if @email.nil?
    end

    def render_bad_request(message)
        render json: {message: message}, status: :bad_request
    end
end 