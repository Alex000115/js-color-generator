function gen(){
  const color = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = color;
  document.getElementById('color').innerText = color;
}
