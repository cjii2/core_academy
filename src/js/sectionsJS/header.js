import {insertDataIntoInputs} from '../../main.js'
const btn = document.querySelector('.closeMenu');

function open_close_menu(){
    document.getElementById('head').classList.toggle('open');
}

export function header(){
    const links = document.querySelectorAll('#head .nav-links a');
    const url = 'src/json/headerSectionData/insertData.json';
    const headerData = new insertDataIntoInputs(url);
    headerData.getData('links').then(data=>headerData.insertDataIntoLinks(data,links));
}

btn.addEventListener('click', open_close_menu);