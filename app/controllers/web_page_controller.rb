class WebPageController < ApplicationController
  def index
  end

  def contact

          def new
            @contact = Contact.new
          end

          def create
            @contact = Contact.new(params[:contact])
            @contact.request = request
            if @contact.deliver
              flash.now[:error] = nil
              flash.now[:notice] = 'Thank you for your message!'
            else
              flash.now[:error] = 'Cannot send message.'
              render :new
            end
          end

  end

  def brands
  end

  def services
  end

  def single
  end
end
