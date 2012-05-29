class AddMinTimeAndMaxTimeToSpots < ActiveRecord::Migration
  def change
    add_column :spots, :MinTime, :decimal
    add_column :spots, :MaxTime, :decimal

  end
end
