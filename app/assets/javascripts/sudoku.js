$(function(){
  
  function create_table(){
    let parent = $("#sudoku");
    var html = ""
    
    for(var i = 0; i < 9; i++){
      if(i == 2 || i == 5){
        html += `<tr class="bottom_border">`
      }else{
        html += `<tr class="sudoku_border">`
      }
      for(var k= 0; k < 9;k++){
        for(var x = 1; x < 82; x++ ){
          var data = x
        }
        if(k == 2 || k == 5){
          html += `<td class="right_border"><input value='${data}' maxlength="1" class="sudoku_form" name="sudoku[model_answer]"></td>`
        }else{
          html += `<td><input  value='${data}' maxlength="1" class="sudoku_form" ></td>`
        }
      }
      
      
      html += `</tr>`
    }
    parent.append(html);
  }

  create_table();
});