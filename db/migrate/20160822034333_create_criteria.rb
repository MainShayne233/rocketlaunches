class CreateCriteria < ActiveRecord::Migration[5.0]
  def change
    create_table :criteria do |t|
      t.string :locations, array: true, default: []
      t.string :rockets, array: true, default: []
      t.string :missions, array: true, default: []
      t.integer :subscription_id
      t.timestamps
    end
  end
end
