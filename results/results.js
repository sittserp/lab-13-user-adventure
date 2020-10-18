import results from './results-data.js';
import { getPioneer, findById } from '../utils.js';

const pioneer = getPioneer();

const result = findById(results, pioneer.hp);

const section = document.querySelector('section');

const h3 = document.createElement('h3');

h3.textContent = result.result;

section.appendChild(h3);

const newGameButton = document.createElement('button');
newGameButton.textContent = 'New Game';
h3.append(newGameButton);
newGameButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';

});



