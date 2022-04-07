const number = document.getElementsByClassName("number");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");
const ratingContainer = document.getElementById("rating-container");
const thankyouContainer = document.getElementById("thankyou-container");

let selected;
console.log("test");
/* remove the previous selected button */
function removeSelected() {
    for(let i=0; i<number.length; i++){
        number[i].classList.remove("selected");
    }
}

/* when a number is clicked, if it's not the same as the previously clicked button, remove the previous one and save the new selected number to variable */
for(let i=0; i<number.length; i++){
    number[i].addEventListener("click", (e) => {
        if(number[i] !== selected && selected!=null){
            removeSelected();
        }
        number[i].classList.add("selected");
        selected = number[i].value;
        console.log(selected);
    })
}

/* when submit button is clicked, display the thank you container, and the selected number as result and hide the ratings container */
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(selected!=null){
        result.innerHTML=selected;
        ratingContainer.classList.add("hidden");
        thankyouContainer.classList.remove("hidden");
    }
    
})