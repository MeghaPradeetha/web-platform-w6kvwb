function displayRadioValue() {
  var ele1 = document.getElementsByName('q1');
  var ele2 = document.getElementsByName('q2');
  var ele3 = document.getElementsByName('q3');
  var sum1 = 0;
  var sum2 = 0;
  var total = 0;

  for (i = 0; i < ele1.length; i++) {
    if (ele1[i].checked) {
      sum1 = parseInt(ele1[i].value);
    }
  }
  for (i = 0; i < ele2.length; i++) {
    if (ele2[i].checked) {
      sum2 = parseInt(ele1[i].value);
    }
  }
  total = sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8 + sum9 + sum10;
  document.getElementById('result').innerHTML = 'Result: ' + total;
}
