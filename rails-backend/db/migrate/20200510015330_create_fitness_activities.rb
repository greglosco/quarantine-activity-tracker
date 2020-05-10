class CreateFitnessActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :fitness_activities do |t|
      t.string :exercise
      t.date :date
      t.text :notes

      t.timestamps
    end
  end
end
