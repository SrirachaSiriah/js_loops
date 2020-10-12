console.log('js');




//for 5 times tables
document.getElementById('table5').addEventListener('click', function(){

  var i = 0;
  var n = parseInt(prompt('Enter how many rows you want:'));

  var result = document.getElementById('result');
  result.innerHTML = ''; //clear existing content

  for(i = 1 ; i <= n ; i++){
    result.innerHTML += i + ' x 5 = ' + i*5 + '<br>';
  }

});

document.getElementById('table7').addEventListener('click', function(){

  var i = 0;
  var n = parseInt(prompt('Enter how many rows you want:'));
  result.innerHTML = ''; //clear existing content
  var result = document.getElementById('result');


  for(i = 1 ; i <= n ; i++){
    result.innerHTML += i + ' x 7 = ' + i*7 + '<br>';
  }

});

document.getElementById('table9').addEventListener('click', function(){

  var i = 0;
  var n = parseInt(prompt('Enter how many rows you want:'));
  result.innerHTML = ''; //clear existing content
  var result = document.getElementById('result');


  for(i = 1 ; i <= n ; i++){
    result.innerHTML += i + ' x 9 = ' + i*9 + '<br>';
  }

});
