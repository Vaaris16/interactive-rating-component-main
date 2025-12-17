const buttons = document.querySelectorAll(".rate button");


const button1 = document.getElementsByClassName("button1")[0]
const button2 = document.getElementsByClassName("button2")[0]
const button3 = document.getElementsByClassName("button3")[0]
const button4 = document.getElementsByClassName("button4")[0]
const button5 = document.getElementsByClassName("button5")[0]

const score = document.getElementsByClassName("score_text")[0]

const submit = document.getElementsByClassName("submit")[0]

const main = document.getElementsByClassName("main")[0]
const main_success = document.getElementsByClassName("success")[0]

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // remove active from all buttons
        buttons.forEach(btn => btn.lassList.remove("active"));

        // add active only to clicked button
        button.classList.add("active");
    });
});

button1.addEventListener("click", () => {
    score.textContent = "You selected 1 out of 5"
    submit.addEventListener("click", () => {
        main.style.display = "none"

        main_success.style.display = "flex"
    })
})


button2.addEventListener("click", () => {
    score.textContent = "You selected 2 out of 5"
    submit.addEventListener("click", () => {
        main.style.display = "none"

        main_success.style.display = "flex"
    })
})


button3.addEventListener("click", () => {
    score.textContent = "You selected 3 out of 5"
    submit.addEventListener("click", () => {
        main.style.display = "none"

        main_success.style.display = "flex"
    })
})


button4.addEventListener("click", () => {
    score.textContent = "You selected 4 out of 5"
    submit.addEventListener("click", () => {
        main.style.display = "none"

        main_success.style.display = "flex"
    })
})


button5.addEventListener("click", () => {
    score.textContent = "You selected 5 out of 5"

    submit.addEventListener("click", () => {
        main.style.display = "none"

        main_success.style.display = "flex"
    })
})


