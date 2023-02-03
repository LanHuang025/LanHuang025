window.onload = function () {
    let body=''
    let html = '<table class="mdui-table mdui-table-hoverable">'+
      '<thead>'+
        '<tr>'+
          '<th>英雄</th>'+
          '<th>国标</th>'+
          '<th>省标</th>'+
          '<th>市标</th>' +
          '<th>县标</th>'+
        '</tr>'+
      '</thead>'+
      '<tbody>'+body+
        '<tr>'+
          '<td>1</td>'+
          '<td>Mark</td>'+
       '<td>Otto</td>'+
        '<td>18</td>'+
     '</tr>'+
     '<tr>'+
       '<td>2</td>'+
        '<td>Jacob</td>'+
          '<td>Thornton</td>'+
          '<td>21</td>'+
       ' </tr>'+
       ' <tr>'+
         '<td>3</td>'+
         '<td>Larry the Bird</td>'+
         '<td></td>'+
         '<td>9</td>'+
      '</tr>'+
     '</tbody>'+
   '</table>'
document.getElementsByClassName("mdui-table-fluid")[0].innerHTML = html  
}