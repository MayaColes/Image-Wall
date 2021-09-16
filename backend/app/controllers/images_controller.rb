class ImagesController < ApplicationController
  before_action :set_user, only: [:all_user_images]

  def all_images
    @images = Image.order(:created_at).paginate(page: params[:page]).includes(:user)
    render json: @images, status: 200
  end

  def all_user_images
    @images = @user.images.order(:created_at).includes(:user)
    render json: @images, status: 200
  end

  def create_image
    if params[:picture] == nil
      render json: { error: "Can't create image without a picture!" }, status: 400
    else
      @image = Image.create!({
                               user_id: params[:user_id],
                               name: params[:name],
                               description: params[:description]
                             })

      @image.picture = params[:picture]
      @image.save

      render json: @image, status: 200
    end
  end

  def set_user
    @user = User.includes(:images).find(params[:id])
  end
end
