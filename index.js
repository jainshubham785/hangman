const words = ['application', 'programming', 'interface', 'wizard', 'frizar'];

var correct = 0;
var wrong = 0;
var visited = [];
var word = words[0];

for (var i = 0; i < word.length; i++) {
    var node = document.createElement("div");
    node.setAttribute("class", "word-input");
    document.body.appendChild(node);
}


window.addEventListener("keydown", function (event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {

        var index = -1;

        for (var i = 0; i < word.length; i++) {
            if (word.charAt(i) == event.key && visited[i] != true) {
                index = i;
                visited[index] = true;
                break;
            }
        }

        if (index != -1) {
            document.querySelectorAll(".word-input")[index].textContent = event.key;
            // visited[index] = true;
            correct++;
            setTimeout(() => {
                if (correct == word.length) {
                    alert("win");
                    location.reload();
                }
            }, 100);

        } else {
            var text = document.getElementById("wrong-letter");
            text.textContent = text.textContent + event.key + " ";
            wrong++;
            if (wrong == 1) document.getElementById("mouth").setAttribute("visibility", "");
            if (wrong == 2) document.getElementById("body").setAttribute("visibility", "");
            if (wrong == 3) document.getElementById("left-hand").setAttribute("visibility", "");
            if (wrong == 4) document.getElementById("right-hand").setAttribute("visibility", "");
            if (wrong == 5) document.getElementById("left-leg").setAttribute("visibility", "");
            if (wrong == 6) document.getElementById("right-leg").setAttribute("visibility", "");

            setTimeout(() => {
                if (wrong == 6) {
                    alert("lose");
                    location.reload();
                }
            }, 0);
        }

    }
});