class UsersController < ApplicationController
  def index
    @user = User.find(params[:id])
    render json: @user, status: 200
  end

  def all_users
    @users = User.order(:created_at).page params[:page]
    render json: @users, status: 200
  end

  def signup
    if User.find_by(username: params[:username]) != nil
      render json: { error: "Username taken" }, status: 400

    elsif params[:username].nil? || params[:username].empty?
      render json: { error: "Username cannot be empty" }, status: 400

    elsif params[:password].nil? || params[:password].empty?
      render json: { error: "Password cannot be empty" }, status: 400

    else
      @user = User.create!({
                             username: params[:username],
                             password: params[:password]
                           })
      render json: @user, status: 200
    end
  end

  def login
    @user = User.find_by(username: params[:username])

    if @user.present? && @user.authenticate(params[:password])
      render json: @user, status: 200
    else
      render json: { error: "Password Invalid" }, status: 400
    end
  end
end
