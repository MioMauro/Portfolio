const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const question = [
    {
        id: 0,
        text: "Pick a vacation destination",
        answer: [{
            text: "New York",
            image: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Photo of Empire State building during daytime.",
            credit: "David Skyrius"
    }, 
    {
        text: "Austin",
        image: "https://images.pexels.com/photos/6312999/pexels-photo-6312999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Austin Congress",
        credit: "Alex Kviatkouski"
    },
    {
        text: "Portland",
        image: "https://images.pexels.com/photos/1757516/pexels-photo-1757516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Portland",
        credit: "Jacob Colvin"
    },
    {
        text: "New Orleans",
        image: "https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "New Orleans",
        credit: "Reynaldo #brigworkz"
    }
        ]
},

    {
        id: 1,
        text: "Pick some food",
        answer: [{
            text: "Pizza",
            image: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Pizza",
            credit: "Daria Shevtsova"
        }, 
    {
        text: "Sandwich",
        image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Sandwich",
        credit: "Erin Wang"
    },
    {
        text: "Pasta",
        image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Pasta",
        credit: "Engin Akyurt"
    },
    {
        text: "Hamburger",
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Hamburger",
        credit: "Valeria Boltneva"
    }
]
},

    {
id: 2,
text: "Pick a home",
answer: [
    {
        text: "traditional",
        image: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Home",
        credit: "Emre Can Acer"
    },
    {
        text: "Modern",
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Home",
        credit: "Binyamin Mellish"
    },
    {
        text: "House",
        image: "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "House",
        credit: "Tobi"
    },
    {
    text: "Muntains",
    image: "https://images.pexels.com/photos/7178960/pexels-photo-7178960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "House",
    credit: "Pavel Danilyuk"
    }
]
}
]

const answers = [
    {
        combination: ["New York", "Pizza", "Traditional"],
        text: "You are a Blue Cheese!",
        image: "https://images.pexels.com/photos/4109938/pexels-photo-4109938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt:"cheese",
        credit: "Polina Tankilevitch"
    },
    {
        combination: ["Austin", "Pasta", "Modern"],
        text: "You are a Cheddar!",
        image: "https://images.pexels.com/photos/10307187/pexels-photo-10307187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt:"Cheddar",
    },
    {
        combination: ["Portland", "sandwich", "Mountains"],
        text: "You are a Feta!",
        image: "https://images.pexels.com/photos/5848071/pexels-photo-5848071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt:"Feta cheese",        
    },
    {
    combination: ["New Orleans", "Hamburger", "House"],
    text: "You are an Halloumi!",
    image: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt:"Halloumi cheese"
    } 
]

// need to have a defoult answer to compensate for lack of combination data

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    question.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answer.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.image)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
})

            questionDisplay.append(answersBlock)

})
}

populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }

    disableQuestionBlock(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        //scroll to answer div
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () => {
    let result
    answers.forEach(answers => {
        if (
            chosenAnswers.includes(answers.combination[0]) +
            chosenAnswers.includes(answers.combination[1]) +
            chosenAnswers.includes(answers.combination[2])    
        ) {
            result = answers
            return
        } else if (!result) {
             //first answer object is default 
            result = answers[0]        
        }
    })
    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.classList.add('result-answer-image')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}