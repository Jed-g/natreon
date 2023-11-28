class Admin::UsersController < ApplicationController
  def get_users
    return render json: { message: 'Not Authorized' }, status: 401 unless is_admin

    render json: { users: User.all.select(:id, :email, :user_type) }
  end

  def update_user
    return render json: { message: 'Not Authorized' }, status: 401 unless is_admin

    user = User.find(params[:id])

    update_email = !params[:email].nil? && user.email != params[:email] && valid_email?(params[:email])
    update_user_type = !params[:user_type].nil? && user.user_type != params[:user_type] && valid_user_type?(params[:user_type])

    user.email = params[:email] if update_email

    user.user_type = params[:user_type] if update_user_type

    return render json: { message: 'Bad request' }, status: 400 unless user.valid?

    user.save
    render json: { message: 'Updated user successfully' }
  end

  def delete_user
    if !is_admin
      render json: { message: 'Not Authorized' }, status: 401
    else
      user = User.find(params[:id])

      return render json: { message: 'Bad request' }, status: 400 if user.nil?

      user.destroy
      render json: { message: 'Deleted user successfully' }
    end
  end

  private def valid_user_type?(user_type)
    %w[customer admin reporter].include?(user_type)
  end

  private def valid_email?(_email)
    _email.match(EMAIL_REGEX)
  end

  EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/
end
