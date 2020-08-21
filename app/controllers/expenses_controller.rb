class ExpensesController < ApplicationController

  def index
    data = Expense.limit(10)
    render json: { data: data, status: :ok }
  end

  def create
    render json: { status: :ok , message: 'Record created successfully' }
  rescue StandardError => e
    render json: { status: 400, message: e.message }
  end

  def update
    render json: { status: :ok , message: 'Record created successfully' }
  rescue StandardError => e
    render json: { status: 400, message: e.message }
  end


  private
  def expense_params
    params.permit(:description, :amount, :category_id, :expense_id)
  end

  def create_expense
    create_params = {
        description: expense_params[:description],
        amount: expense_params[:amount],
        category_id: expense_params[:category_id],
        user_id: current_user.id
    }
    Expense.create!(create_params)
  end

  def update_expense
    update_params = {
        description: expense_params[:description],
        amount: expense_params[:amount],
        category_id: expense_params[:category_id],
    }
    expense = Expense.find_by(id: expense_params[:id])
    expense.update!(update_params)
  end
end
