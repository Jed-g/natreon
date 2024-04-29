# frozen_string_literal: true

class PostsController < ApplicationController
  def index
    @posts = Post.all.order(created_at: :desc)
    render json: @posts.as_json(include: { user: { only: [:nickname] } })
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:content)
  end
end
