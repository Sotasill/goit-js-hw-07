document.getElementById('name-input').addEventListener('input', function(event) {
    const nameOutput = document.getElementById('name-output');
    const inputValue = event.target.value.trim();
    
    nameOutput.textContent = inputValue ? inputValue : 'Anonymous';
  });