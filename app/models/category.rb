class Category < ApplicationRecord
  before_create :add_name_map

  def add_name_map
    name_map = name.downcase
  end
end
