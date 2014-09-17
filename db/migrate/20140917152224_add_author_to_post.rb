class AddAuthorToPost < ActiveRecord::Migration
  def change
  	add_column :posts, :author, :string
  	add_column :posts, :publish_date, :string
  end
end
