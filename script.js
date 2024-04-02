var count1=3000;
function updateCounter() {
    var counterElement = document.getElementById("counter");
    if (count <= 3300) {
        counterElement.textContent = count;
        count++;
        setTimeout(updateCounter, 1000);
    }
}

