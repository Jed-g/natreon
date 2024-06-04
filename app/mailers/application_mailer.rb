# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: "No Reply - Natreon\u2122 <no-reply@jgolebiewski.com>"
  layout "mailer"
end
