let end = false
let points = 0
let pointsAdded = true

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function updateScore() {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.textContent = "Score : " + points;
    }
}

const draw = () => {
    if (!pointsAdded) {
        points = points - 15;
        updateScore();
        console.log(points);
    }
    let start, lastTime;
    end = false;
    pointsAdded = false;
    const gameboard = document.getElementById("game");
    for (let index = 1; index < 5; index++) {
        let oldCube = document.getElementById("cube" + index);
        if (oldCube != null) {
            oldCube.remove();
        }
    }
    let element = document.createElement("div");
    
    const randomWidth = 20 + Math.floor(Math.random() * 21);  
    const randomHeight = 20 + Math.floor(Math.random() * 21); 
    element.style.width = randomWidth + "px";
    element.style.height = randomHeight + "px";
    
    const maxRadius = Math.min(randomWidth, randomHeight) / 2;
    const randomBorderRadius = Math.floor(Math.random() * maxRadius);
    element.style.borderRadius = randomBorderRadius + "px";

    element.style.backgroundColor = "black";
    element.style.position = "absolute";
    element.style.top = "0";
    let number = getRandomInt(4);
    switch (number) {
        case 0:
            element.style.left = "63px";
            element.id = "cube1";
            break;
        case 1:
            element.style.left = "213px";
            element.id = "cube2";
            break;
        case 2:
            element.style.left = "363px";
            element.id = "cube3";
            break;
        case 3:
            element.style.left = "513px";
            element.id = "cube4";
            break;
        default:
            element.style.left = "63px";
            element.id = "cube1";
            break;
    }
    element.style.bottom = "100px";
    gameboard.appendChild(element);
    
    function iteration(chrono) {
        if (start === undefined) {
            start = chrono;
        }
        const timeLasted = chrono - start;
      
        if (lastTime !== chrono) {
            const counting = Math.min(0.1 * timeLasted, 321);
            element.style.transform = `translateY(${counting}px)`;
            if (counting === 321) { 
                end = true;
                setTimeout(() => draw(), 500);
            }
        }
      
        if (timeLasted < 3210) {
            lastTime = chrono;
            if (!end) {
                window.requestAnimationFrame(iteration);
            }
            if (end) {
                setTimeout(() => draw(), 500);
            }
        }
    }
      
    window.requestAnimationFrame(iteration);
};

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        let element = document.getElementById("cube1");
        if (element == null) {
            for (let index = 1; index < 5; index++) {
                let element = document.getElementById("cube" + index);
                if (element != null) {
                    end = true;
                    element.style.backgroundColor = "#db140d";
                }
            }
        }
        else if (end && !pointsAdded) {
            element.style.backgroundColor = "#14e32d";
            points = points + 15;
            pointsAdded = true;
            updateScore();
            console.log(points);
        } else if (!pointsAdded) {
            end = true;
            element.style.backgroundColor = "#db140d";
        }
    }
    if (event.key === "ArrowRight") {
        let element = document.getElementById("cube4");
        if (element == null) {
            for (let index = 1; index < 5; index++) {
                let element = document.getElementById("cube" + index);
                if (element != null) {
                    end = true;
                    element.style.backgroundColor = "#db140d";
                }
            }
        } else if (end && !pointsAdded) {
            element.style.backgroundColor = "#14e32d";
            points = points + 15;
            pointsAdded = true;
            updateScore();
            console.log(points);
        } else if (!pointsAdded) {
            end = true;
            element.style.backgroundColor = "#db140d";
        }
    }
    if (event.key === "ArrowUp") {
        let element = document.getElementById("cube2");
        if (element == null) {
            for (let index = 1; index < 5; index++) {
                let element = document.getElementById("cube" + index);
                if (element != null) {
                    end = true;
                    element.style.backgroundColor = "#db140d";
                }
            }
        } else if (end && !pointsAdded) {
            element.style.backgroundColor = "#14e32d";
            points = points + 15;
            pointsAdded = true;
            updateScore();
            console.log(points);
        } else if (!pointsAdded) {
            end = true;
            element.style.backgroundColor = "#db140d";
        }
    }
    if (event.key === "ArrowDown") {
        let element = document.getElementById("cube3");
        if (element == null) {
            for (let index = 1; index < 5; index++) {
                let element = document.getElementById("cube" + index);
                if (element != null) {
                    end = true;
                    element.style.backgroundColor = "#db140d";
                }
            }
        } else if (end && !pointsAdded) {
            element.style.backgroundColor = "#14e32d";
            points = points + 15;
            pointsAdded = true;
            updateScore();
            console.log(points);
        } else if (!pointsAdded) {
            end = true;
            element.style.backgroundColor = "#db140d";
        }
    }
});

draw();