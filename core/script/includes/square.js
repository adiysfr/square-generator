const generateSquare = document.getElementById("myNumber");

function getGenerate() {
  var x = generateSquare.value,
  i, j;
  if(x > 10 || x < 1){
    alert('Whoops! please input only 1-10')
  }else{ 
    var wrapperSquare = document.getElementById("square");
    var table = document.createElement("table");
    for (i=0; i < x; i++){
      var row = document.createElement("tr");
      for (j=0; j <x; j++){
      var col = document.createElement('td');
      col.innerHTML = x;
      if ((i+j)%2 === 0) {
          col.className = "square_yellow";
      } else {
          col.className = "square_red";
      }
      row.append(col);
      }
      table.append(row);
      document.getElementById("square").innerHTML = '';
    }
    wrapperSquare.append(table);
  }
  if(x < 11 && x >= 1){
    document.getElementById("generate").innerHTML = 'You are creating a ' + x + ' x ' + x + ' table';
  }
}


