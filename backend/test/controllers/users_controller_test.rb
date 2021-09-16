require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "create user" do
    post '/signup', params: { username: "test", password: "password" }
    assert_response 200
  end

  test "show all users" do
    get '/all_users'
    assert_response 200
    assert_equal JSON.parse(response.body, symbolize_names: true),
                 [{id: 309772275, username: "user1"}, {id: 119759554,username: "user2"}]
  end
end
