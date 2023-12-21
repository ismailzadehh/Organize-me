document.getElementById("calendar-button").addEventListener("click", function () {
    
    document.getElementById("menu-page").style.display = "none";
    document.getElementById("calendar-page").style.display = "block";
});

document.getElementById("calendar-back-button").addEventListener("click", function () {
    document.getElementById("menu-page").style.display = "block";
    document.getElementById("calendar-page").style.display = "none";
});

document.querySelectorAll(".add-button").forEach(function (button, index) {
    button.addEventListener("click", function () {
        const day = this.parentElement;
        const eventsList = day.querySelector(".events");

        const eventText = prompt(`${index + 1}.Gün için etkinliğinizi girin :`);
        if (eventText) {
            const eventItem = document.createElement("li");
            eventItem.innerHTML = `${eventText} <button class="delete-button">Sil</button>`;
            eventsList.appendChild(eventItem);

            eventItem.querySelector(".delete-button").addEventListener("click", function () {
                eventsList.removeChild(eventItem);
            });
        }
    });
});











