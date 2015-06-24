class PagesController < ApplicationController
  before_action :jskit_controller_payload

  def index
    set_action_payload("Hello from PagesController#index")
  end

  private

  def jskit_controller_payload
    set_controller_payload("Hello from PagesController#all")
  end
end
