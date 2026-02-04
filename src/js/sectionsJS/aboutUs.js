import {insertDataIntoInputs} from '../../main.js'

export function about(){
    const elemnt = document.querySelectorAll('#about .all-about-content h2, .all-about-content p');
    const imgs = document.querySelectorAll('#about .img-container img');
    const url = 'src/json/aboutSection/insertData.json';


    const about = new insertDataIntoInputs(url);

    about.getData('img').then(data=>about.inserDataIntoImg(data,imgs));
    about.getData('content').then(data=>about.insertDataIntoTags(data,elemnt));
    
}