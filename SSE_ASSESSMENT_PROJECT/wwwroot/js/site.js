function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
updateClock();
setInterval(updateClock, 1000);

function updateMousePosition(event) {
    const xPosition = event.clientX;
    const yPosition = event.clientY;

    document.getElementById('xPosition').textContent = xPosition;
    document.getElementById('yPosition').textContent = yPosition;
}
document.addEventListener('mousemove', updateMousePosition);

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const container = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}

$(document).ready(function () {
    $("#listItemsButton").click(async function () {
        $.ajax({
            method: "GET",
            url: "/car/ListCars",
            success: function (data) {
                var shuffledData = shuffleArray(data);
                $("#first-list").hide();
                var listItems = "";
                $.each(shuffledData, function (index, item) {
                    listItems += "<li class='list-group-item text-center'>Model: " + item.model + " - Brand: " + item.brand + "</li>";
                });
                $("#listItems").html(listItems);
            }
        });
    });
});