import imported from './imported';

let elem = document.createElement('p');
elem.innerHTML = imported();
document.body.appendChild(elem);

let disclaimer = document.createElement('div');
disclaimer.setAttribute('style', 'font-style:italic;');
disclaimer.innerHTML = 'This example was brought to you by ES6, webpack and babel.';
document.body.appendChild(disclaimer);