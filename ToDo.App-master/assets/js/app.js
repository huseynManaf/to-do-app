let btn = document.querySelector('#btn');
let list = document.querySelector("#list");
var count = 0;
var counttext = `Movcud task sayi :  ${count}`

btn.onclick = function () {
  count++;
  var counttext= `Movcud task sayi :  ${count}`

  let text = document.querySelector("#ss").value;
  var h3 = document.createElement('h3');
  var div = document.createElement('div');
  var button1 = document.createElement('button');
  var divright = document.createElement('div')
  divright.className = 'right'
  div.id = 'aftercreatediv'

  var iconbtn = document.createElement('button')
  iconbtn.className = 'btn btn-primary '
  iconbtn.innerHTML = 'Achieve'


  button1.className = 'btn btn-danger'
  button1.innerHTML = 'Delete'
  h3.innerHTML = text;


  divright.append(button1, iconbtn)
  div.append(h3, divright)
  list.append(div);

  button1.onclick = function () {
    div.remove();
  }
  divright.onclick = function () {
    h3.style.textDecorationLine = 'line-through'
  }
}








