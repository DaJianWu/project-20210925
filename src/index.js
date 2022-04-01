import _ from 'lodash';
import printMe from './index.ts';
import './index.css';
import Img from './1024.jpg';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  const myImg = new Image();
  myImg.src = Img;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept();
}

// console.log(process.env.NODE_ENV, process.env.APP_ENV);
