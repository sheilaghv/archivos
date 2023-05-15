let num=535;
function ejemplo(params){
 let inp = document.querySelector("#entrada");
 let p = document.querySelector("#salida");
 let valor = inp.value;
 let divImg = document.querySelector("#img");
 p.innerText=valor;
 divImg.innerHTML= '<img src="../img/michilogo.jpg" alt="error"/>';

 console.log(valor);
 console.dir(inp);
 console.log(p.value);
 console.log(num);
 

}
