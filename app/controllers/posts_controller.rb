# frozen_string_literal: true

class PostsController < ApplicationController
  before_action :set_post, only: %i[show update destroy like]
  before_action :authorize_post, only: %i[update destroy]

  # def index
  #   friend_ids = current_user.friends.pluck(:id)
  #   @posts = Post.where(user_id: friend_ids + [current_user.id]).order(created_at: :desc)
  #   render json: @posts.as_json(include: {user: {only: %i[id nickname]}})
  # end

  def index
    friend_ids = current_user.friends.pluck(:id)
    @posts = Post.where(user_id: friend_ids + [current_user.id]).order(created_at: :desc)
    render json: @posts.as_json(include: {
      user: {only: %i[id nickname]},
      comments: {
        include: {user: {only: %i[id nickname]}}
      }
    })
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

  def like
    like = @post.likes.find_by(user: current_user)
  
    if like
      like.destroy
      render json: { message: 'post unliked' }, status: :ok
    else
      like = @post.likes.build(user: current_user)
  
      if like.save
        render json: @post, status: :created
      else
        render json: like.errors, status: :unprocessable_entity
      end
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:content)
  end

  def authorize_post
    return if @post.user_id == current_user.id

    render json: {error: "Not authorized"}, status: :unauthorized
  end
end
