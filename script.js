// Initial: read text input and apply to box  
document.getElementById('apply-btn').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = color;
});

// Apply random color on button click
document.getElementById('random-btn').addEventListener('click', function() {
  var color = randomHex();
  setBoxColor(color);
});


// Apply text input color
document.getElementById('apply-btn').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  setBoxColor(color);
});

