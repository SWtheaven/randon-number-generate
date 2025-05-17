const generateButton = document.getElementsByClassName("generation")



function generateNumber() {

    const inputMin = Math.ceil(document.querySelector(".input-min").value)
    const inputMax = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

    alert(result)
  
}



generateButton[0].addEventListener("click", generateNumber)