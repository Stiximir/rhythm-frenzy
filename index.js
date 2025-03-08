let end = false
let points = 0
let pointsAdded = true

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const draw = () => {
    if (!pointsAdded) {
        points = points - 15
        console.log(points)
    }
    let start, lastTime
    end = false
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
    let number = getRandomInt(4)
    switch (number) {
        case 0:
            element.style.left = "63"
            break;
        case 1:
            element.style.left = "213"
            break;
        case 2:
            element.style.left = "363"
            break;
        case 3:
            element.style.left = "513"
            break;
        default:
            element.style.left = "63"
            break;
    }
    element.style.bottom = "100"
    gameboard.appendChild(element)
    function iteration(chrono) {
        if (start === undefined) {
            start = chrono
        }
        const timeLasted = chrono - start
      
        if (lastTime !== chrono) {
            const counting = Math.min(0.1 * timeLasted, 350)
            element.style.transform = `translateY(${counting}px)`
            if (counting === 350) { 
                end = true;
                setTimeout(() => draw(), 500)
            }
        }
      
        if (timeLasted < 3500) {
            lastTime = chrono
            if (!end) {
                window.requestAnimationFrame(iteration)
            }
            if (end) {
                setTimeout(() => draw(), 500)
            }
        }
    }
      
    window.requestAnimationFrame(iteration);
};

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        if (end && !pointsAdded) {
            let element = document.getElementById("cube")
            element.style.backgroundColor ="#14e32d"
            points = points + 15
            pointsAdded = true
            console.log(points)
        } else if (!pointsAdded)  {
            let element = document.getElementById("cube")
            end = true
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