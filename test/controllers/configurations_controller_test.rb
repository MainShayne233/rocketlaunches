require 'test_helper'

class ConfigurationsControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get configurations_home_url
    assert_response :success
  end

end
