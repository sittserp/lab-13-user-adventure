import challenges from '../data.js';
import { findById } from '../utils.js';

const section = document.querySelector('section');

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const challenge = findById(challenges, id);

const h1 = document.createElement('h1');
const h3 = document.createElement('h3');

h1.textContent = challenge.title;
h3.textContent = challenge.description;


section.appendChild(h1);
section.appendChild(h3);

console.log(challenge.choices);
