class Image < ApplicationRecord
  belongs_to :user
  mount_uploader :picture, ImagesUploader
end
