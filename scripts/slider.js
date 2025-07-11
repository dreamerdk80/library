const mainPicture = document.querySelector(".main-picture")
const pictures = document.querySelectorAll(".picture")

pictures.forEach(picture => {
    picture.addEventListener("click", () => {
        mainPicture.src = picture.src
        mainPicture.alt = picture.alt
    })
})