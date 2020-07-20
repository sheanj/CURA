class CreateLinkposts < ActiveRecord::Migration[6.0]
  def change
    create_table :linkposts do |t|
      t.string :title
      t.string :date
      t.string :tags
      t.string :description
      t.string :image
      t.string :url
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
