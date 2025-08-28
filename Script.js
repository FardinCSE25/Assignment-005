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
const Services = document.getElementsByClassName("Call")
const serviceName = document.getElementsByClassName("service-name")
const serviceNumber = document.getElementsByClassName("service-number")

for (let i = 0; i < Services.length; i++) {
    Services[i].addEventListener("click", function callBtnClick(e) {
        e.preventDefault();
        alert("Calling" + ' ' + serviceName[i].innerText + ' ' + serviceNumber[i].innerText + '.....')
        let coins = parseInt(document.getElementById("coins").innerText)
        if(coins <= 0){
            alert("You haven't sufficient coins !!!")
            return
        }
        let remainingCoins = coins - 20;
        document.getElementById("coins").innerText = remainingCoins;
    })
}
