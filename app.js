
  let button = document.querySelector('.btn');
  let paragraph = document.querySelector('.answer');
  let guardar=0;
  let suma=false;
  let resta=false;
  let division=false;
  let multi=false;
  let resultado=0;

  document.querySelector('.botones').addEventListener('click', function() {
    if(event.target.innerText == "C"){
        guardar=0;
        paragraph.innerText=0;
         suma=false;
         resta=false;
         division=false;
         multi=false;
      }
      else if(paragraph.innerText == 0){
          paragraph.innerText=event.target.innerText;
      }
      else if(event.target.innerText <= 9){ 
        paragraph.innerText =paragraph.innerText+ event.target.innerText;
      }
      else if(event.target.innerText == "+"){
        guardar=paragraph.innerText;
        paragraph.innerText=0;
        suma=true;
      }
      else if(event.target.innerText == "=" && suma==true){
        resultado=parseInt(guardar)+parseInt(paragraph.innerText);
        paragraph.innerText=resultado;
        suma=false;
      }
      else if(event.target.innerText == "-"){
        guardar=paragraph.innerText;
        paragraph.innerText=0;
        resta=true;
      }
      else if(event.target.innerText == "=" && resta==true){
        resultado=parseInt(guardar)-parseInt(paragraph.innerText);
        paragraph.innerText=resultado;
        resta=false;
      }
      else if(event.target.innerText == "*"){
        guardar=paragraph.innerText;
        paragraph.innerText=0;
        multi=true;
      }
      else if(event.target.innerText == "=" && multi==true){
        resultado=parseInt(guardar)*parseInt(paragraph.innerText);
        paragraph.innerText=resultado;
        multi=false;
      }
      else if(event.target.innerText == "/"){
        guardar=paragraph.innerText;
        paragraph.innerText=0;
        division=true;
      }
      else if(event.target.innerText == "=" && division==true){
        resultado=parseInt(guardar)/parseInt(paragraph.innerText);
        paragraph.innerText=resultado;
        division=false;
      }
      
      else if(event.target.innerText == "←"){
        paragraph.innerText = paragraph.innerText.substring(0, paragraph.innerText.length - 1);
      }
    
  });
