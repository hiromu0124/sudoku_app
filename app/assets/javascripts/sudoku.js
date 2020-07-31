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
          x=x+1
          html += `<td class="right_border" data-number='${data}'><input value='${data}' maxlength="1" class="sudoku_form" name="sudoku[model_answer]"><input type="hidden" value='${data}' name="sudoku[number]"><input type="submit" class="hidden_submit"></td>`
        }else{
          x=x+1
          html += `<td data-number='${data}'><input  value='${data}' maxlength="1" class="sudoku_form" ><input type="hidden" value='${data}' name="sudoku[number]"><input type="submit" class="hidden_submit"></td>`
        }
      }
      
      
      html += `</tr>`
    }
    parent.append(html);
  }
  create_table();
  $(function submit(){
    document.getElementById("sudoku_submit").click(console.log("ok"));
      
    });
  
});