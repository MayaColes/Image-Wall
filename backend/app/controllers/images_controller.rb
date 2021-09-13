class ImagesController < ApplicationController
  before_action :set_user, only: [:all_user_images]

  def all_images
    @images = Image.order(:created_at).paginate(page: params[:page])
    render json: @images, status: 200
  end

  def all_user_images
    @images = @user.images.order(:created_at)
    render json: @images, status: 200
  end

  def create
    if params[:picture].empty?
      render json: { error: "Can't create image without a picture!" }, status: 400
    end

    @image = Image.create!({
                           user_id: params[:id],
                           name: params[:name],
                           description: params[:name]
                         })

    @image.picture = params[:picture]
    @image.save

    render json: @image, status: 200
  end

  def set_user
    @user = User.includes(:images).find(params[:id])
  end
end
