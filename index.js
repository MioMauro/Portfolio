
 //Calc
 let display = document.getElementById('display');
 let btnCalc = Array.from(document.getElementsByClassName('btnCalc'));
 
 btnCalc.map( btnCalc => {
     btnCalc.addEventListener('click', (e) => {
         switch(e.target.innerText){
             case 'C':
                 display.innerText = ''; 
                 break;//clear text
                 case '←': 
                     if(display.innerText) {
                         display.innerText = display.innerText.slice(0, -1);
                     }                   
                 break;//clear text
                 case '=':
                     try{
                         display.innerText = eval(display.innerText);
                     } catch {
                         display.innerText = 'Error!';
                     }                      
                     break;
                 default:
                     display.innerText += e.target.innerText;  
         }
     })
 }) 


//Counter
let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {  
    //countEl.innerText = count = count + 1  //OR:  
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0 //riporta il contatore a 0 dopo salvato 
    count = 0 //dobbiamo reimpostargli la variabile al punto iniziale del codice. Il conteggio torna a 0
}


    function myFunction() {
      var x = document.getElementById("navbar");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }  
    // Get the modal==interest
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("modalA");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
    
  // Hobby  
  var modal2 = document.getElementById("myModalH");  
  // Get the button that opens the modal 
  var btnh = document.getElementById("modalH");  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeH")[0];  
  // When the user clicks the button, open the modal
  btnh.onclick = function() {
    modal2.style.display = "block"; 
  }
  
  // When the user clicks on <span> (x), close the modal 
  span.onclick = function() {
    modal2.style.display = "none"; 
  }
  
  // When the user clicks anywhere outside of the modal, close it 
  window.onclick = function(event) {
    if (event.target == modal2) { 
      modal2.style.display = "none"; 
    }
  }
  
  // EDUCATION  
  var modal3 = document.getElementById("myModalE"); 
  
  // Get the button that opens the modal 
  var btne = document.getElementById("modalE");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeE")[0];
  
  // When the user clicks the button, open the modal 
  btne.onclick = function() {
    modal3.style.display = "block"; 
  }
  
  // When the user clicks on <span> (x), close the modal 
  span.onclick = function() {
    modal3.style.display = "none"; 
  }
  
  // When the user clicks anywhere outside of the modal, close it 
  window.onclick = function(event) {
    if (event.target == modal3) {  //funziona anche con modal)
      modal3.style.display = "none"; 
    }
  }
  
  // DEVELOPER
  
  var modal4 = document.getElementById("myModalD");
  
  // Get the button that opens the modal  
  var btnd = document.getElementById("modalD");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeD")[0];
  
  // When the user clicks the button, open the modal 
  btnd.onclick = function() {
    modal4.style.display = "block"; 
  }
  
  // When the user clicks on <span> (x), close the modal 
  span.onclick = function() {
    modal4.style.display = "none"; 
  }
  
  // When the user clicks anywhere outside of the modal, close it 
  window.onclick = function(event) {
    if (event.target == modal4) {  //funziona anche con modal)
      modal4.style.display = "none"; 
    }
  }
  
  // MOULDMAKER
  
  var modal5 = document.getElementById("myModalM"); 
  
  // Get the button that opens the modal  
  var btnm = document.getElementById("modalM");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeM")[0];
  
  // When the user clicks the button, open the modal 
  btnm.onclick = function() {
    modal5.style.display = "block"; 
  }
  
  // When the user clicks on <span> (x), close the modal 
  span.onclick = function() {
    modal5.style.display = "none"; 
  }
  
  // When the user clicks anywhere outside of the modal, close it 
  window.onclick = function(event) {
    if (event.target == modal5) {  //funziona anche con modal)
      modal5.style.display = "none"; 
    }
  }
  
  //===========FARMER==============
  
  var modal6 = document.getElementById("myModalF"); 
  
  // Get the button that opens the modal  
  var btnf = document.getElementById("modalF");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeF")[0];
  
  // When the user clicks the button, open the modal 
  btnf.onclick = function() {
    modal6.style.display = "block"; 
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal6.style.display = "none"; 
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal6) {  //funziona anche con modal)
      modal6.style.display = "none"; 
    }
  }
  
  // BUTCHER
  
  var modal7 = document.getElementById("myModalB"); 
  
  // Get the button that opens the modal  
  var btnb = document.getElementById("modalB");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeB")[0];
  
  // When the user clicks the button, open the modal 
  btnb.onclick = function() {
    modal7.style.display = "block"; 
  }
  
  // When the user clicks on <span> (x), close the modal 
  span.onclick = function() {
    modal7.style.display = "none"; 
  }
  
  // When the user clicks anywhere outside of the modal, close it 
  window.onclick = function(event) {
    if (event.target == modal7) {  //funziona anche con modal)
      modal7.style.display = "none"; 
    }
  }
  
  // HTML
  
  var modal8 = document.getElementById("myModalHt"); //
  
  // Get the button that opens the modal  
  var btnht = document.getElementById("modalHt");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeHt")[0];
  
  // When the user clicks the button, open the modal
  btnht.onclick = function() {
    modal8.style.display = "block"; 
  }
  
  // When the user clicks on <span> (x), close the modal 
  span.onclick = function() {
    modal8.style.display = "none"; 
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal8) {  //funziona anche con modal)
      modal8.style.display = "none"; 
    }
  }
  
  // CSS
  
  var modal9 = document.getElementById("myModalC"); 
  
  // Get the button that opens the modal  
  var btnc = document.getElementById("modalC");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeC")[0];
  
  // When the user clicks the button, open the modal 
  btnc.onclick = function() {
    modal9.style.display = "block"; 
  }
  
  // When the user clicks on <span> (x), close the modal 
  span.onclick = function() {
    modal9.style.display = "none"; 
  }
  
  // When the user clicks anywhere outside of the modal, close it 
  window.onclick = function(event) {
    if (event.target == modal9) {  //funziona anche con modal)
      modal9.style.display = "none"; 
    }
  }
  
  // JS
  
  var modalTen = document.getElementById("myModalJ"); 
  
  // Get the button that opens the modal  
  var btnj = document.getElementById("modalJ");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeJ")[0];
  
  // When the user clicks the button, open the modal
  btnj.onclick = function() {
    modalTen.style.display = "block"; 
  }
  
  // When the user clicks on <span> (x), close the modal 
  span.onclick = function() {
    modalTen.style.display = "none"; 
  }
  
  // When the user clicks anywhere outside of the modal, close it 
  window.onclick = function(event) {
    if (event.target == modalTen) {  //funziona anche con modal)
      modalTen.style.display = "none"; 
    }
  }
  
  // INTEREST SLIDESHOW
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }



