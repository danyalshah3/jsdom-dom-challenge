// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//   t = seconds++;
//   document.getElementById("counter").innerHTML = t;
// }


const timer1 = document.querySelector("h1#counter")
const buttonContainer = document.querySelector("button-container")
const likesUl = document.querySelector("ul.likes")


let clock = 0;
let likedNum = {};
let runningNum = true;

buttonContainer.addEventListener("click", (e) => {
    if (e.target.id === "plus"){
   changeCounter(1)
 }   else if (e.target.id === "minus") {
     changeCounter(-1)
    }
    else if (e.target.id === "heart") {
        likednum++
        likesUl.textContent = likednum
    } 

    else (e.target.id === "pause") {
     togglePaused()

    }
})


function togglePaused() {
  runningNum = !runningNum
  document.querySelectorAll("button").forEach(button => {
    if (button.id !== "pause") {
    button.disable = !runningNum
    } else {
        if (runningNum) {
        button.textContent = "pause"
    } 
   else {
       button.textContent = "resume"
   }

  }
  })
}

function likedNum() {
    if (likedNum[clock]) {
     const li = document.querySelector('[data-number="${clock}"]')
     likedNum[clock] += 1
     li.textContent = "The number ${clock} has been liked ${likedNum[clock]} time"
    }

    else {
        likedNum[clock] = 1
    
    const li = document.createElement("li")
    li.dataset.number = clock
    li.textContent = "The number ${clock} has been liked 1 time"
    likesUl.append(li)
    }
}

function changeCounter(amount) {
    clock = clock + amount
    timer1.textContent = clock
}

setInterval (() => {
   if (runningNum){
    changeCounter(1)
   }
}, 1000)
