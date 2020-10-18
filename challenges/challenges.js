import challenges from '../data.js';
import { findById, getPioneer, setPioneer, consequences } from '../utils.js';



const section = document.querySelector('section');

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const challenge = findById(challenges, id);

const h1 = document.createElement('h1');
const h3 = document.createElement('h3');
const form = document.createElement('form');
const h4 = document.createElement('h4');

h1.textContent = challenge.title;
h3.textContent = challenge.description;

section.appendChild(h1);
section.appendChild(h3);
section.appendChild(form);

challenge.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;

    span.textContent = choice.description;

    label.append(radio, span);

    form.appendChild(label);


});

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Confirm';

form.appendChild(button);

// get form data and hp/supplies from array like initial signup page 
// and add to local storage
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const choiceId = data.get('choice');
    const choice = findById(challenge.choices, choiceId);

    const pioneer = getPioneer();

    consequences(pioneer, challenge, choice);

    setPioneer(pioneer);

    h4.textContent = choice.result;
    section.appendChild(h4);

    button.style.display = 'none';

    const mapButton = document.createElement('button');
    mapButton.textContent = 'Return to Map';
    h4.append(mapButton);
    mapButton.addEventListener('click', () => {
        window.location.href = '/map/';

    });

});


console.log(challenge.choices);
const pioneer = getPioneer();
console.log(pioneer);
