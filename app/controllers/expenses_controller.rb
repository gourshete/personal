class ExpensesController < ApplicationController

  def index
    data = Expense.limit(10)
    render json: { data: data, status: :ok }
  end
end
