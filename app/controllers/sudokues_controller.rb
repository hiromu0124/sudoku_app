class SudokuesController < ApplicationController
  def index
    
  end
  def new
    
  end
  def create
    @sudoku=Sudoku.new
  end
end
