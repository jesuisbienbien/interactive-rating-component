const number = document.getElementsByClassName("number");
console.log("test");
for(let i=0; i<number.length; i++){
    number[i].addEventListener("click", (e) => {
        number[i].classList.add("selected");
    })
}
