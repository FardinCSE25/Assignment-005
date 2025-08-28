// heart navigation
const hearts = document.getElementsByClassName("heart")
for (const heart of hearts) {
    heart.addEventListener("click", function () {
        let count = parseInt(document.getElementById("heart").innerText);
        count++;
        document.getElementById("heart").innerText = count;
    })
}
// Call 
const callBtns = document.getElementsByClassName("Call")
const serviceName = document.getElementsByClassName("service-name")
const serviceNumber = document.getElementsByClassName("service-number")

for (let i = 0; i < callBtns.length; i++) {
    callBtns[i].addEventListener("click", function (e) {
        e.preventDefault();
        let coins = parseInt(document.getElementById("coins").innerText)
        if(coins <= 0){
            alert("You haven't sufficient coins !!!")
            return
        }
        else{
            alert("Calling" + ' ' + serviceName[i].innerText + ' ' + serviceNumber[i].innerText + '.....')
        }
        let remainingCoins = coins - 20;
        document.getElementById("coins").innerText = remainingCoins;
    })
}
// Copy
const copyBtns = document.getElementsByClassName("Copy")
for (let i = 0; i < copyBtns.length; i++) {
    copyBtns[i].addEventListener("click", function (e) {
        e.preventDefault();
        let copyCount = parseInt(document.getElementById("copy").innerText)
        copyCount++
        document.getElementById("copy").innerText = copyCount;
    })
}
