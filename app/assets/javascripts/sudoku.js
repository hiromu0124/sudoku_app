$(function(){
  
  function create_table(){
    let parent = $("#sudoku");
    var html = ""
    var data = ""
    for(var i = 0; i < 9; i++){
      if(i == 2 || i == 5){
        html += `<tr class="bottom_border">`
      }else{
        html += `<tr class="sudoku_border">`
      }
      for(var k= 0; k < 9;k++){
        if(k == 2 || k == 5){
          html += `<td class="right_border"><input value='${data}' maxlength="1" class="sudoku_form" name=""></td>`
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