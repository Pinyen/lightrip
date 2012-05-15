class AddAddress < ActiveRecord::Migration
  def up
  	add_column :spots, :address, :string
    add_column :spots, :picture, :binary
    add_column :spots, :zoom, :decimal
    remove_column :spots, :photo
    remove_column :spots, :attr1
    remove_column :spots, :attr2
    remove_column :spots, :attr3
    remove_column :spots, :attr4
    remove_column :spots, :attr5
    add_column :spots, :attr1, :decimal
    add_column :spots, :attr2, :decimal
    add_column :spots, :attr3, :decimal
    add_column :spots, :attr4, :decimal
    add_column :spots, :attr5, :decimal
   end

  def down
  end
end
