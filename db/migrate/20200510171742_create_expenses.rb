class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.references :user
      t.references :category
      t.text :description
      t.decimal :amount

      t.timestamps
    end
  end
end
