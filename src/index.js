import './index.css';
import jsLogo from './assets/javascript.jpg'; 

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';

const img = document.createElement('img');
img.src = jsLogo;

document.body.append(h1, img);