class CreateLinkposts < ActiveRecord::Migration[6.0]
  def change
    create_table :linkposts do |t|
      t.string :title
      t.string :link
      t.string :date
      t.string :tags
      t.references :users, null: false, foreign_key: true

      t.timestamps
    end
  end
end
