class CreateTextposts < ActiveRecord::Migration[6.0]
  def change
    create_table :textposts do |t|
      t.string :title
      t.string :body
      t.string :date
      t.string :tags
      t.string :metadata
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
