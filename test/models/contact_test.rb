require 'test_helper'

class ContactTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def setup
    @contact = Contact.new(name: "Example User", email: "user@example.com", subject: "example", Message: "example")
  end

  test "should be valid" do
    assert @contact.valid?
  end

  test "name should be present" do
    @contact.name = "     "
    assert_not @contact.valid?
  end

  test "email addresses should be unique" do
    duplicate_contact = @contact.dup
    @contact.save
    assert_not duplicate_contact.valid?
  end

end
