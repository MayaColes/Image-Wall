class UsersController < ApplicationController

  def index
    @user = User.find(params[:id])
    render json: @user, status: 200
  end

  def all_users
    @users = User.order(:created_at).page params[:page]
    render json: @user, status: 200
  end

  def create
    if User.find_by(username: params[:username]) != nil
      render json: { error: "Username taken" }, status: 400
    end

    @user = User.create!({
                           username: params[:username],
                           password: params[:password]
                           })

    render json: @user, status: 200
  end
end
