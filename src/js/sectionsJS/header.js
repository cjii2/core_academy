import {insertDataIntoInputs} from '../../main.js'
const btn = document.querySelector('.closeMenu');

function open_close_menu(){
    document.getElementById('head').classList.toggle('open');
}

export function header(){
    const links = document.querySelectorAll('#head .nav-links a');
    const headerData = new insertDataIntoInputs();
    const url = 'src/json/headerSectionData/insertData.json';
    headerData.insertDataIntoLinks(url,links);
}

btn.addEventListener('click', open_close_menu);