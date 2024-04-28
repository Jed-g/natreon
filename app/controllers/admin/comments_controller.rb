
module Admin
  class CommentsController < ApplicationController
    before_action :authenticate_admin!

    def all_comments
      render json: {comments: commentslist.order(created_at: :desc).select(:comment)}
    end
  end
end
