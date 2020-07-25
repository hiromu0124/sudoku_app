class CreateSudokus < ActiveRecord::Migration[5.2]
  def change
    create_table :sudokus do |t|
      t.integer :number
      t.integer :answer 
      t.integer :model_answer 
      t.timestamps
    end
  end
end
