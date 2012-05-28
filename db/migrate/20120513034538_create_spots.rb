class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
      t.string :name
      #t.address :name
      t.string :lat
      t.string :lon
      t.text :info
      t.string :opentime
      t.string :attr1
      t.string :attr2
      t.string :attr3
      t.string :attr4
      t.string :attr5
      t.string :photo

      t.timestamps
    end
  end
end
