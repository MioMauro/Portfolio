const reviewContainer = document.getElementById("review-container")

const reviews = [
    {
        img:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        alt:"Profile picture of Indyah Almay",
        text:"I really enjoyed this course! It was fun and interactive as well as educational. I learnt a lot!",
        name:"Indyah Almay"
    },
    {
        img:"https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        alt:"Profile picture of Jonas Kakaroto",
        text:"A well thought out course with the student in mind. Thanks for creating this for the community",
        name:"Jonas Kakaroto"
    },
    {
        img:"https://images.unsplash.com/photo-1548819611-fc0f1732d402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        alt:"Franco Figueroa",
        text:"I managed to do this course in my spare time afte hours and have only positive things to say!",
        name:"Franco Figueroa"
    }
]

function populateDisplay() {
    reviews.forEach(review => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')

        cardElement.addEventListener('mouseover', showCard)
        cardElement.addEventListener('mouseleave', blurCard)

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src', review.img)
        imageElement.setAttribute('alt', review.alt)
        imageContainer.append(imageElement)

        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = review.text
        const nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent = review.name

        cardElement.append(imageContainer, paragraphElement, nameContainer)

        reviewContainer.append(cardElement)
    })
}

populateDisplay()

function showCard () {
    this.classList.add('active')
}

function blurCard () {
    this.classList.remove('active')
}