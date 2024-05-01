# frozen_string_literal: true

class PostsController < ApplicationController
  before_action :set_post, only: %i[update destroy]

  def index
    friend_ids = current_user.friends.pluck(:id)
    @posts = Post.where(user_id: friend_ids + [current_user.id]).order(created_at: :desc)
    render json: @posts.as_json(include: {user: {only: [:nickname]}})
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    head :no_content
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:content)
  end
end
