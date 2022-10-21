import { boxClick } from './box';
import { headerClick } from './header';
import '../css/style.css';
// TODO: Import yellow robot image as 'Yellow'
const Yellow=require('../images/yellow-robot.png')

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

// TODO: Set src of #box element to Yellow
document.getElementById('box').src=Yellow;
