document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    const exitBtn = document.getElementById('exitBtn');
    const textInput = document.getElementById('textInput');
    const displayText = document.getElementById('displayText');
  
    submitBtn.addEventListener('click', function() {
      const inputText = textInput.value;
      displayText.textContent = inputText;
    });
  
    exitBtn.addEventListener('click', function() {
      window.close(); // This closes the popup
    });
  });
  