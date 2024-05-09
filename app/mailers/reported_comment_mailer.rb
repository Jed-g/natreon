class ReportedCommentMailer < ApplicationMailer
    def friend_request(reported_comments)
        @reported_comments = reported_comments
        mail(to: @reported_comments.friend.email, subject: "Comment is reported and deleted")
    end
end
