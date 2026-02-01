import {insertDataIntoInputs} from '../../main.js'

function app(){
    const elemnt = document.querySelectorAll('#about .all-about-content h2, .all-about-content p');
    const imgs = document.querySelectorAll('#about .img-container img');
    const video = document.querySelectorAll('#about .img-container video');
    const url = 'src/json/aboutSection/insertData.json';


    const about = new insertDataIntoInputs();

    about.inserDataIntoImg(url,imgs)
    // about.inserDataIntoVideo(url,video)
    about.insertDataIntoTags(url,elemnt)
}

app();