let changed=false;

function change(){
 let change4=document.getElementById("chg");
 let change1=document.getElementById("chg1");
 if (changed){
 change4.innerHTML="淺色模式";
 document.body.style.background ="";
 change1.style.background="";
 changed=false
  }
else
  {
    change4.innerHTML="深色模式";
    document.body.style.background ="rgb(0, 52, 3)";
    change1.style.background="rgb(0, 92, 5)";
    changed=true
     }
}