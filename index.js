let fini = false
let points = 0
let pointsAdded = true


const draw = () => {
    let debut, tempsPrecedent
    fini = false
    pointsAdded = false
    const gameboard = document.getElementById("game")
    let oldCube = document.getElementById("cube")
    if (oldCube != null) {
        oldCube.remove()
    }
    let element = document.createElement("div")
    element.id = "cube"
    element.style.width="25px"
    element.style.height = "25px"
    element.style.backgroundColor = "black"
    element.style.position = "absolute"
    element.style.top = "0"
    element.style.left = "63"
    element.style.bottom = "100"
    gameboard.appendChild(element)
    function iteration(chrono) {
        if (debut === undefined) {
            debut = chrono
        }
        const ecoule = chrono - debut
      
        if (tempsPrecedent !== chrono) {
            const compteur = Math.min(0.1 * ecoule, 350)
            element.style.transform = `translateY(${compteur}px)`
            if (compteur === 350) { 
                fini = true;
                setTimeout(() => draw(), 1000)
            }
        }
      
        if (ecoule < 3500) {
            tempsPrecedent = chrono
            if (!fini) {
                window.requestAnimationFrame(iteration)
            }
            if (fini) {
                setTimeout(() => draw(), 1000)
            }
        }
    }
      
    window.requestAnimationFrame(iteration);
};

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        if (fini && !pointsAdded) {
            let element = document.getElementById("cube")
            element.style.backgroundColor ="#14e32d"
            points = points + 15
            pointsAdded = true
            console.log(points)
        } else if (!pointsAdded)  {
            let element = document.getElementById("cube")
            fini = true
            points = points - 15
            pointsAdded = true
            element.style.backgroundColor ="#db140d"
            console.log(points)
        }
    }
    if (event.key === "ArrowRight") {
        console.log("sdqfqf")
    }
    if (event.key === "ArrowUp") {
        console.log("sdqfqf")
    }
    if (event.key === "ArrowDown") {
        console.log("sdqfqf")
    }
});

draw()