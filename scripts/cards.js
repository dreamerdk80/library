const homeBtn = document.querySelectorAll(".home")
const langDescription = document.querySelector(".lang-description")
const cards = document.querySelector(".cards")
const langBtn = document.querySelectorAll(".lang-btn")
const popup = document.querySelector(".popup")
const container = document.querySelector(".container")
const popupDialog = document.querySelector(".popup-dialog")
let result

window.addEventListener("load", async () => {
    result = await fetch("json/cards.json")
        .then(res => res.json())

    generateCards()

    
})

function generateDescriptionHTML(card) {
    return `
        <div class="description">
            <figure class="title">
                <img src="${card.icon}" alt="">

                <figcaption>
                    <h1>${card.title}</h1>
                </figcaption>
            </figure>

            ${card.text}
        </div>
    `
}

function generateCardHTML(card) {
    return `
        <figure class="card">
            <img src="${card.image}" alt="">

            <figcaption>
                <p class="card-author">${card.author}</p>

                <h2 class="card-name">${card.title}</h2>

                <button onclick='generatePopupHTML("${card.description}")' class="details">
                    Подробнее
                </button>
            </figcaption>
        </figure>
    `
}

function generatePopupHTML(description) {
    popup.innerHTML =  `
        ${description}
        <button class="popup-close-btn" onclick="closeModalWindow()">Закрыть</button>
    `
    popup.style.display = "flex"
    popup.showModal()
}

function closeModalWindow() {
    window.closeModal.close()
    popup.style.display = "none"
}

function generateCards() {
    for (let i = 0; i < langBtn.length; i++) {
        langBtn[i].addEventListener("click", () => {
            const language = langBtn[i].id
            const card = result[language]
            cards.innerHTML = ""
            
            if (links.style.top == "92px") {
                links.style.top = "-3000px"
            }
            
            window.scrollTo(0, 0)

            langDescription.innerHTML = generateDescriptionHTML(card[0])

            for (let j = 1; j < card.length; j++) {
                cards.innerHTML += generateCardHTML(card[j])
            }

            container.classList.add("container-hidden")
        })
    }
}

homeBtn.forEach(home => {
    home.addEventListener("click", () => {
        container.classList.remove("container-hidden")
        langDescription.innerHTML = ""
        cards.innerHTML = ""

        window.scrollTo(0, 0)
    })
})