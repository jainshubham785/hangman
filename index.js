const words = ['application', 'programming', 'interface', 'wizard', 'frizar', 'cat', 'on'];
const right_letter = document.getElementById("right");
const wrong_letter = document.getElementById("wrong-letter");
let correct = 0;
let wrong = 0;
let visited = [];
let i = 0;

function init(j) {
    for (let i = 0; i < words[j].length; i++) {
        let node = document.createElement("button");
        node.setAttribute("class", "word-input");
        right_letter.appendChild(node);
    }
}

init(i);

function restart() {
    wrong_letter.textContent = "";
    right_letter.innerHTML = "";
    i++;
    if (i == 7) i = 0;
    correct = 0;
    wrong = 0;
    visited.length = 0;
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll(".body-parts")[i].setAttribute("visibility", "hidden");
    }
    init(i);
}

window.addEventListener("keydown", function (event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {

        let index = -1;

        for (let k = 0; k < words[i].length; k++) {
            if (words[i].charAt(k) == event.key && visited[k] != true) {
                index = k;
                visited[index] = true;
                break;
            }
        }

        if (index != -1) {
            document.querySelectorAll(".word-input")[index].textContent = event.key.toUpperCase();
            correct++;
            setTimeout(() => {
                if (correct == words[i].length) {
                    alert("win");
                    restart();
                }
            }, 0);

        } else {
            wrong_letter.textContent = wrong_letter.textContent + event.key.toUpperCase() + " ";
            wrong++;

            document.querySelectorAll(".body-parts")[wrong - 1].setAttribute("visibility", "");
         
            setTimeout(() => {
                if (wrong == 6) {
                    alert("lose");
                    restart();
                }
            }, 0);
        }

    }
});