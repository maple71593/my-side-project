let btn = document.getElementsByTagName('button')[0];
let btn2 = document.getElementsByTagName('button')[1];
let changept = document.getElementById('change-pt');
let pt = ['/1.jpg','/2.jpg','/3.jpg','/4.jpg','/5.jpg','/6.jpg'];
let i = 0;
btn.onclick =()=>{
    if(i === 0){
        i = pt.length - 1;
        }else{
            i--;
        };
    changept.src = pt[i];
    };
btn2.onclick =()=>{
    if(i === pt.length - 1){
        i = 0;
        }else{
            i++;
        };
    changept.src = pt[i];
    };