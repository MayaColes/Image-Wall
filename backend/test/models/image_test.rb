require "test_helper"

class ImageTest < ActiveSupport::TestCase
  test "has a picture" do
    image = images(:image_without_description)
    assert_not image.picture.nil?
  end

  test "adds a picture" do
    image = Image.create({name: "test", description: "words", user_id: users(:user_with_images).id})
    extend ActionDispatch::TestProcess
    image.picture = fixture_file_upload('test_image.jpg')
    image.save!
    assert_not image.reload.picture.nil?
  end
end
