import challenges from '../data.js';
import { getPioneer, allDone, noHp } from '../utils.js';


const list = document.querySelector('ul');

challenges.forEach(challenge => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    li.append(link);
    link.textContent = challenge.title;
    link.href = `/challenges/?id=${challenge.id}`;

    list.append(li);

});

const pioneer = getPioneer();

if (allDone(pioneer, challenges) || noHp(pioneer)) {
    window.location.href = '/results/';
}