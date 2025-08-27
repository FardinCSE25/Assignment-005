// heart navigation
const hearts = document.getElementsByClassName("heart")
for (const heart of hearts) {
    heart.addEventListener("click", function () {
        let count = parseInt(document.getElementById("heart").innerText);
        count++;
        document.getElementById("heart").innerText = count;
    })
}
