// import functions and grab DOM elements

import { setPioneer } from './utils.js';

const form = document.querySelector('form');


// initialize state

form.addEventListener('click', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    setPioneer({
        name: data.get('name'),
        skill: data.get('skill'),
        hp: 35,
        supplies: 35,
        completed: {}
    });

    window.location.href = './map';

});


// set event listeners to update state and DOM