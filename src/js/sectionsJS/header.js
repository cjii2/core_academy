import {insertDataIntoInputs} from '../../main.js'
const btn = document.querySelector('.closeMenu');

function open_close_menu(){
    document.getElementById('head').classList.toggle('open');
}

function app(){
    const links = document.querySelectorAll('#head .nav-links a');
    const headerData = new insertDataIntoInputs();
    headerData.insertDataIntoLinks('../../../src/json/headerSectionData/insertData.json',links);
}

btn.addEventListener('click', open_close_menu);
app();