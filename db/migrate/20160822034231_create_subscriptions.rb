class CreateSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :subscriptions do |t|
      t.string :frequency
      t.string :notification_time
      t.string :notification_time_before_launch
      t.integer :subscriber_id
      t.integer :subscription_id

      t.timestamps
    end
  end
end
