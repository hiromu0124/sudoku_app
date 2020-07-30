class SudokuesController < ApplicationController
  def index
    
  end
  def new
    @sudoku=Sudoku.new
  end
  def create
    @sudoku=Sudoku.create(sudoku_params)
    # if @sudoku.save
    #   redirect_to root_path, notice: "保存しました"
    # else
    #   render "new"
    #   @sudoku=Sudoku.new
    # end
  end
  
  private
  def sudoku_params
    params.require(:sudoku).permit(:model_answer,:answer,:number)
  end
end
