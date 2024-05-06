
module Admin
  class CommentsController < ApplicationController
    before_action :authorize_admin_controllers

    def all_comments
      render json: {comments: commentslist.order(created_at: :desc).select(:comment)}
    end
  end
end
