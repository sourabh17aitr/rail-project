require 'test_helper'

class WebPageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get root_path
    assert_response :success
  end

  test "should get contact" do
    get contact_path
    assert_response :success
  end

  test "should get brands" do
    get brands_path
    assert_response :success
  end

  test "should get services" do
    get services_path
    assert_response :success
  end

  test "should get single" do
    get single_path
    #get web_page_single_url
    assert_response :success
  end

end
