window.addEventListener('load, function()' {
var statusLabel = document.getElementById('statusLabel');
statusLabel.textContent = "Loaded";
});

window.addEventListener('DOMContentLoaded', function() {
    var clickButton = document.getElementById('clickButton');
    var statusLabel = this.document.getElementById('statusLabel');
    var textInput = document.getElementById('textInput');
    var myList = document.getElementById('myList');
    
    clickButton.addEventListener('click', function() {
        statusLabel.textContent = "Clicking"
        var newItemText = textInput.value;
        if (newItemText.trim() !== '') {
            var newListItem = document.createElement('li'); 
            newListItem.textContent = newItemText;
            myList.appendList(newListItem);
            textInput.value = '';
        });
});
