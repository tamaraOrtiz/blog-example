class AddContentToArticles < ActiveRecord::Migration[6.1]
  def change
    rename_column :articles, :comment, :content
    change_column_null :articles, :published_at, true
    add_index :articles, :published_at
  end
end
