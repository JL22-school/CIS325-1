window.addEventListener('load, function()' {
var statusLabel = document.getElementById('statusLabel');
statusLabel.textContent = "Loaded";
});

window.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickButton');
    const textInput = document.getElementById('textInput');
    const myList = document.getElementById('myList');
    
    clickButton.addEventListener('click', function() {
        const newItemText = textInput.value;
        if (newItemText.trim() !== '') {
            const newListItem = document.createElement('li'); 
            newListItem.textContent = newItemText;
            myList.appendList(newListItem);
            textInput.value = '';
        });
});
