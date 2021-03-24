const nameInput = document.getElementById('name-in');
const changeName = document.getElementById('change-name');
const displayName = document.getElementById('name-display');

changeName.addEventListener('click', () => {
    displayName.textContent = nameInput.value;
});


const colorInput =document.getElementById('color-in');
const pronounInput =document.getElementById('pronoun-in');
const pronounDisplay =document.getElementById('pronouns-in')
pronounInput.addEventListener('input', () => {
         pronounDisplay.textContent = pronounInput.value;
        });

