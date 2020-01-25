class DashboardsController < ApplicationController

  def index
    data = User.all.select(:first_name, :last_name, :email)
    render json: data
  end
end
