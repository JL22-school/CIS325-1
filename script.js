const clickButton = document.getElementById('clickButton');
const textInput = document.getElementById('textInput');
const myList = document.getElementById('myList');

addButton.addEventListener('click', function() {
    const newItemText = textInput.value;
    if (newItemText.trim() !== '') {
        const newListItem = document.createElement('li'); 
        newListItem.textContent = newItemText;
        myList.appendList(newListItem);
        textInput.value = '';
    }
});