class AddProfilePhotoToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :profilePhoto, :string
  end
end
