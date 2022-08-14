function circle(){
    let amount = 85
    let body = document.querySelector("body")
    let i = 0

    while(i < amount){
        let element = document.createElement("i")
        let posX = Math.floor(Math.random() * window.innerWidth)
        let delay = Math.random() * -20
        let duration = Math.random() * 10
        let size = Math.random() * 180
        element.style.width = 10 + size + 'px'
        element.style.height = 10 + size + 'px'
        element.style.left = posX + 'px'
        element.style.animationDelay = delay + 's'
        element.style.animationDuration = 5 +  duration + 's'
        body.appendChild(element)
        i++
    }
}
circle()