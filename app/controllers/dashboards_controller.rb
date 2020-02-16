class DashboardsController < ApplicationController
  def index; end

  def list
    users = User.all.select(:first_name, :last_name, :email)
    render json: users
  end

  def hello; end

  def login; end
end
