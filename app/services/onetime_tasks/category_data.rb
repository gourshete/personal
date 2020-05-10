module OnetimeTasks
  class CategoryData
    def call
      insert
    end

    private
    def insert
      categories = %i('Food Clothing Grocery Home-Services Stationary Travel Entertainment Sports')

      categories.each do |category|
        Category.create!(name: category)
      end

    end

  end
end