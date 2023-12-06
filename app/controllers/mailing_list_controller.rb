class MailingListController < ApplicationController

    def submit_email
        read_email_param

        return render_bad_request("Email is invalid") unless valid_email?(@email)

        if MailingList.exists?(email: @email)
            return render_bad_request("Email has already been recorded")
        end

        mailing_list_item = MailingList.new(email: @email)
        return render_bad_request("Email is invalid") unless mailing_list_item.valid?

        mailing_list_item.save
        render json: {message: "Email recorded successfully"}
    end

    private

    def valid_email?(email_)
        email_.match(EMAIL_REGEX)
      end  

    def read_email_param
        @email = params[:email]
        render_bad_request if @email.nil?
    end

    def render_bad_request(message)
        render json: {message: message}, status: :bad_request
    end

    EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/
end 