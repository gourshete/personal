module Medical
  def medic
    p 'This is Medical medic'
  end
end

module Dental
  module_function
  def dent
    Date
    p 'This is Dental dent'
  end
end

class Trip
  include Medical
  extend Dental
  def call
    binding.pry
    medic
  end
end