import hello from './hello';
import world from './world';
import txt from './assets/text.txt';
import myImage from './assets/coffee.gif';
import json from './assets/data.json';
import style from './style.css';

console.log(hello + ' '+ world);
console.log(json);
console.log(txt);
console.log(myImage);
var image = new Image();
image.src = './bundle/' + myImage;
document.body.appendChild(image);
console.log(style);