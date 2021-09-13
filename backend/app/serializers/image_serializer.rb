class ImageSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :picture, :user

  def user
    { user_id: self.object.user.id,
      username: self.object.user.username}
  end
end
