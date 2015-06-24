class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :jskit_app_payload

  def jskit_app_payload
    set_app_payload("Hello from the ApplicationController")
  end
end
