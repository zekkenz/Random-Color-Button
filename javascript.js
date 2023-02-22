function changeTitle(newTitle) {
        document.querySelector("title").innerHTML = newTitle;
      }
    addEventListener("visibilitychange", e => {
            if (e.target.visibilityState == "visible") {
                    changeTitle("hola");
                } else {
                        changeTitle("vuelve");
    }
})

let main = document.querySelector(".main");
let boton = document.getElementById("boton");

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215.
    let randomNumber = Math. random() * maxVal;
    randomNumber = Math. floor(randomNumber);
    randomNumber = randomNumber. toString(16);
    let randColor = randomNumber. padStart(6, 0);
    return `#${randColor. toUpperCase()}`
}

function project() {
    main.style.backgroundColor= generateRandomColor();
}
