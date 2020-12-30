class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :comment
      t.string :description
      t.datetime :published_at

      t.timestamps
    end

    add_index :articles, :title, unique: true
  end
end
