//Hedefler
document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const menuPage = document.getElementById("menu-page");
    const goalsButton = document.getElementById("goals-button");
    const goalsPage = document.getElementById("goals-page");
    const goalBoxes = document.querySelectorAll(".goal-box");
    const backButton = document.querySelectorAll(".back-button");
    const goalDetailsPage = document.getElementById("goal-details-page");
    const goalInput = document.getElementById("goal-input");
    const addButton = document.getElementById("add-button");
    const goalList = document.getElementById("goal-list");

    // Event listeners
    goalsButton.addEventListener("click", function() {
        menuPage.style.display = "none";
        goalsPage.style.display = "block";
    });

    goalBoxes.forEach(function(box) {
        box.addEventListener("click", function() {
            goalsPage.style.display = "none";
            goalDetailsPage.style.display = "block";
            
        });
    });

    backButton.forEach(function(button) {
        button.addEventListener("click", function() {
            if (goalsPage.style.display === "none") {
                goalsPage.style.display = "block";
                goalDetailsPage.style.display = "none";
            } else {
                menuPage.style.display = "block";
                goalsPage.style.display = "none";
                goalDetailsPage.style.display = "none";
            }
        });
    });

    addButton.addEventListener("click", function() {
        const goalText = goalInput.value;
        if (goalText) {
            const goalItem = document.createElement("li");
            goalItem.textContent = goalText;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Sil";
            deleteButton.addEventListener("click", function() {
                goalItem.remove();
            });
            goalItem.appendChild(deleteButton);
            goalList.appendChild(goalItem);
            goalInput.value = "";
        }
    });
});
