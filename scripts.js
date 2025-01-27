window.addEventListener('load, function()' {
var statusLabel = document.getElementById('statusLabel');
statusLabel.textContent = "Loaded";
});

function customFunction() {
    var inputField = document.getElementById('textInput');
    var inputText = inputField.value.trim();
    if (inputText !== '') {
        const newListItem = document.createElement('li');
        newListItem.textContent = inputText;
        const list = document.getElementById('myList');
        list.appendChild(newListItem);
        inputField.value = '';
    }
    }
}

window.addEventListener('DOMContentLoaded', function() {
    var clickButton = document.getElementById('clickButton');
    var statusLabel = this.document.getElementById('statusLabel');
    
    clickButton.addEventListener('click', () => {
        customFunction();
        statusLabel.textContent = "Clicking";
        });
});
