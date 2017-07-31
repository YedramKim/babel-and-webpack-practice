import txt from './text.txt';
import myImage from './coffee.gif';
import json from './data.json';
import style from './style.css';
import 'babel-polyfill';
// import common from './common.js';

console.log('ㅋㅋㅋ 핫리로딩 성공');
console.log(json);
console.log(txt);
console.log(myImage);
var image = new Image();
image.src = './' + myImage;
document.body.appendChild(image);