require "test_helper"

class ImagesControllerTest < ActionDispatch::IntegrationTest

  test "create image without picture" do
    post '/new_image', params: { user_id: users(:user_with_images).id, name: "test", description: "test_description" }
    assert_response 400
  end

  test "create image" do
    post '/new_image', params: { user_id: users(:user_with_images).id, name: "test", description: "test_description",
                                 picture: fixture_file_upload('test_image.jpg') }
    assert_response :success
  end

  test "get all user images for user with images" do
    get '/user_images', params: {:id => users(:user_with_images).id}
    assert_response 200
    assert_equal JSON.parse(response.body, symbolize_names: true),
                 [{:id=>268076924, :name=>"test", :description=>nil, :picture=>{:url=>"/uploads/image/picture/268076924/test_image.jpg"}, :user=>{:user_id=>309772275, :username=>"user1"}},
                  {:id=>309461157, :name=>"test2", :description=>"description", :picture=>{:url=>"/uploads/image/picture/309461157/test_image.jpg"}, :user=>{:user_id=>309772275, :username=>"user1"}}]
  end

  test "get all user images for user without images" do
    get '/user_images', params: {:id => users(:user_without_images).id}
    assert_response 200
    assert_equal JSON.parse(response.body, symbolize_names: true),[]
  end

  test 'get all images' do
    post '/feed', params: {:page => 1}
    assert_response 200
    assert_equal JSON.parse(response.body, symbolize_names: true),
                 [{:id=>268076924, :name=>"test", :description=>nil, :picture=>{:url=>"/uploads/image/picture/268076924/test_image.jpg"}, :user=>{:user_id=>309772275, :username=>"user1"}},
                  {:id=>309461157, :name=>"test2", :description=>"description", :picture=>{:url=>"/uploads/image/picture/309461157/test_image.jpg"}, :user=>{:user_id=>309772275, :username=>"user1"}}]

  end
end
