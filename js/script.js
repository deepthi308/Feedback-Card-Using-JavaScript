const emojis = document.querySelectorAll(".emojis");
const emoji1 = document.querySelector(".emoji-1");
const emoji2 = document.querySelector(".emoji-2");
const emoji3 = document.querySelector(".emoji-3");
const button = document.querySelector(".button");
const warning = document.querySelector(".warn");
const thanks = document.querySelector(".thanks");

let clicked = false;
let finalFeedback;
let finalEmoji = "";

emojis.forEach((emoji) => {
    emoji.addEventListener("click", (event,emoji) => { 
        if (event.target.innerHTML.includes("Unhappy") || event.target.innerText.includes("😟"))
        {
            if (emoji1.classList[2] == "active")
            {
                emoji1.classList.remove("active")
                finalFeedback = ""
                finalEmoji = ""
            }
            else{
            emoji1.classList.add("active")
            emoji2.classList.remove("active")
            emoji3.classList.remove("active")
                finalFeedback = "Unhappy"
                finalEmoji = "😟"
            }
        }

        else if (event.target.innerHTML.includes("Neutral") || event.target.innerText.includes("😐"))
        {
            if (emoji2.classList[2] == "active") {
                emoji2.classList.remove("active")
                 finalFeedback = ""
                finalEmoji = ""
            }
            else {
                emoji2.classList.add("active")
                emoji1.classList.remove("active")
                emoji3.classList.remove("active")
                finalFeedback = "Neutral"
                finalEmoji = "😐"
            }
        }
            
        else if (event.target.innerHTML.includes("Satisfied") || event.target.innerText.includes("🙂"))
        {
            if (emoji3.classList[2] == "active") {
                emoji3.classList.remove("active")
                 finalFeedback = ""
                finalEmoji = ""
            }
            else{
            emoji3.classList.add("active")
            emoji1.classList.remove("active")
            emoji2.classList.remove("active")
                finalFeedback = "Satisfied"
                finalEmoji = "🙂"
                
            }
        }
           
    })
})

button.addEventListener("click", () => {

    clicked = true;
    // button.style.display = "none"
    if(clicked && finalEmoji!= "" && thanks.innerHTML !=""){
    emoji1.style.display = ""
    emoji2.style.display = ""
    emoji3.style.display = ""
        warning.innerHTML = ""  
        thanks.innerHTML = ""
    console.log(button.innerText)
    button.innerText = "Send Review"
    }
    else if (clicked && finalEmoji == "") {
      warning.innerHTML = "<p>Please select any of them</p>"
    }
    else if(clicked && finalEmoji!= ""){
    emoji1.style.display = "none"
    emoji2.style.display = "none"
    emoji3.style.display = "none"
    button.innerText = "Send Again"
        thanks.innerHTML = `<h1 class="feedback">Thank you for your feedback ${finalEmoji}<br>See you next time</h1>`
        warning.innerHTML=""
    }
   
})