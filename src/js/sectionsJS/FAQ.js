import {insertDataIntoInputs} from '../../main.js'
// function open_close_qustion(){
    
// }


function app(){
    const elemnt = document.querySelector('#FAQ .qustions-container');
    const url = 'src/json/qusationsSection/insertData.json';

    const qusations = new insertDataIntoInputs();
    qusations.createQustions(url, elemnt)
}

app();