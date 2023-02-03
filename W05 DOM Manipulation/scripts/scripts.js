const input = document.querySelector("input");
const  button = document.querySelector("button");
const list = document.querySelector("ul");


button.addEventListener('click', () => {
    const theItem = input.value;
    input.value ='';

    const li = document.createElement('li');
    const listText = document.createElement('span');
    const deleteBtn = document.createElement('button');

    li.appendChild(listText);
    listText.textContent = theItem;
    li.appendChild(deleteBtn);
    deleteBtn.textContent = "X";
    list.appendChild(li);

    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
    });

    input.focus();



})


