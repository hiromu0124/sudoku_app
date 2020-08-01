$(function(){
  
  function create_table(){
    let parent = $("#sudoku");
    var html = ""
    x=1
    for(var i = 0; i < 9; i++){
      if(i == 2 || i == 5){
        html += `<tr class="bottom_border">`
      }else{
        html += `<tr class="sudoku_border">`
      }
      for(var k= 0; k < 9;k++){
        
        var data = x
        if(k == 2 || k == 5){
          html += `<td class="right_border" data-number='${data}'><input value='${data}' maxlength="1" class="sudoku_form" name="sudoku[model_answer]"><label><input type="radio" value='${data}' name="sudoku[number]"  class="sudoku_radio"></label></td>`
          x=x+1
        }else{
          html += `<td ><label><input type="radio" value='${data}' name="sudoku[number]" class="sudoku_radio"></label></td>`
          x=x+1
        }
      }
      
      
      html += `</tr>`
    }
    parent.append(html);
  }
  create_table();
  function submitFnc(){
    var f= document.getElementById("model_answer");
    f.method="post";
    f.action=" new_sudokue"
    f.submit
  }
});