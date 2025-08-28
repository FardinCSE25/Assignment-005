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
const historyCollector = []
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

        const historyData = document.getElementById("history")
        const callHistoryData = {
            name : serviceName[i].innerText,
            number : serviceNumber[i].innerText,
            time : new Date().toLocaleTimeString([], { hour : "2-digit", minute : "2-digit", second : "2-digit"})
        }
        historyCollector.unshift(callHistoryData)
        for(const history of historyCollector){
            const div = document.createElement("div")
            div.innerHTML = `<div class="flex items-center justify-between bg-[#fafafa] mb-3 p-4 rounded-lg">
            <div>
                <h1 class="text-lg font-semibold">${history.name}</h1>
                <p class="text-[#5c5c5c]">${history.number}</p>
            </div>
            <div class="text-lg">${history.time}</div>
        </div>`
        historyData.appendChild(div)

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
        alert("Number copied" + ' ' + ':' + ' ' + serviceNumber[i].innerText)
        navigator.clipboard.writeText(serviceNumber[i].innerText);
        copyCount++
        document.getElementById("copy").innerText = copyCount;
    }) }
