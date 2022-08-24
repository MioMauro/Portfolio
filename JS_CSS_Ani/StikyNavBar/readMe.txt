window.addEventListener("scroll", () => {
    console.log("window.scrollY")
})
Usiamo questo pezzo di codice per conoscere il valore dello spostamento


console.log(bottomContainerEl.offsetTop);
Usiamo questo per conoscere l'altro valore (nel ns caso è: 957)


console.log(navbarEl.offsetHeight)
Usiamo questo per conoscere l'altezza della navbar (in px) - :73


.bottom-container .text{
    padding: 1%;
    margin: 50px 50px;
    background-color: goldenrod;
}

In js dobbiamo solo dare il valore del margine di 50px (top) che abbiamo impostato nel css.
______________________________________________________________________

In definitiva, per ottenere il cambio di colore della navbar dobbiamo:

Impostare i valori della classe nel css (senza assegnare la classe nell'html
che verrà aggiunta da JS)

e fornire a JS il margine del div che assegneremo.