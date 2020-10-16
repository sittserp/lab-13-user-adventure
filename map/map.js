import challenges from '../data.js';

const list = document.querySelector('ul');

challenges.forEach(challenge => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    li.append(link);
    link.textContent = challenge.title;
    link.href = `/challenges/?id=${challenge.id}`;

    list.append(li);

});