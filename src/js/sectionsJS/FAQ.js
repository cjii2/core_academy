function open_close_qustion(){
    const qusetions = document.querySelectorAll('#FAQ .qustion');
    
    qusetions.forEach(q=>{
        const btns = q.querySelector('#FAQ .qustion button');

        btns.addEventListener('click',()=>{
            q.classList.toggle('open');
        });
    });
}
open_close_qustion();