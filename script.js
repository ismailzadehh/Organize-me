const showTodoButton = document.getElementById("showTodoButton");
const todoListPage = document.getElementById("todoListPage");
const backButton = document.getElementById("backButton");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const todoDate = document.getElementById("todoDate");
const menu = document.getElementById("menu");

showTodoButton.addEventListener("click", () => {
    menu.style.display = "none"; 
    todoListPage.style.display = "block"; // Show the todo list
});

backButton.addEventListener("click", () => {
    menu.style.display = "block"; // Show the menu
    todoListPage.style.display = "none"; // Hide the todo list
});

addTaskButton.addEventListener("click", () => {
    const taskRow = document.createElement("div");
    taskRow.classList.add("task-row");

    const taskInput = document.createElement("input");
    taskInput.classList.add("task-input");
    taskInput.type = "text";

    const checkBox = document.createElement("input");
    checkBox.classList.add("check-box");
    checkBox.type = "checkbox";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Sil";

    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskRow);
    });

    taskRow.appendChild(taskInput);
    taskRow.appendChild(checkBox);
    taskRow.appendChild(deleteButton);
    taskList.appendChild(taskRow);
});

todoDate.addEventListener("change", (e) => {
    const selectedDate = e.target.value;
    console.log(`Selected Date: ${selectedDate}`);
});

document.addEventListener("DOMContentLoaded", function () {
    const financeButton = document.getElementById("menu-button");
    const financeSection = document.getElementById("finance-section");
    const backButtonFinance = document.getElementById("back-button");
    const dailyMoneyInput = document.getElementById("daily-money-input");
    const dailyMoneyDisplay = document.getElementById("daily-money");
    const moneyOperationInput = document.getElementById("money-operation-input");
    const addMoneyButton = document.getElementById("add-money");
    const subtractMoneyButton = document.getElementById("subtract-money");

    financeButton.addEventListener("click", function () {
        financeButton.style.display = "none";
        backButtonFinance.style.display = "block";
        financeSection.style.display = "block";
        // Hide the Todo List
        menu.style.display = "none";
        todoListPage.style.display = "none";
    });

    backButtonFinance.addEventListener("click", function () {
        financeButton.style.display = "block";
        backButtonFinance.style.display = "none";
        financeSection.style.display = "none";
        // Show the menu with both buttons
        menu.style.display = "block";
        todoListPage.style.display = "none";
    });    

    let dailyMoney = 0;

    dailyMoneyInput.addEventListener("change", function () {
        dailyMoney = parseFloat(dailyMoneyInput.value);
        dailyMoneyDisplay.textContent = dailyMoney;
    });

    addMoneyButton.addEventListener("click", function () {
        const amount = parseFloat(moneyOperationInput.value);
        dailyMoney += amount;
        dailyMoneyDisplay.textContent = dailyMoney;
        moneyOperationInput.value = "";
        checkDailyMoney();
    });

    subtractMoneyButton.addEventListener("click", function () {
        const amount = parseFloat(moneyOperationInput.value);
        dailyMoney -= amount;
        dailyMoneyDisplay.textContent = dailyMoney;
        moneyOperationInput.value = "";
        checkDailyMoney();
    });

    function checkDailyMoney() {
        if (dailyMoney <= 0) {
            alert("Bugün tüm paranı harcadın.");
            location.reload(); // Refresh the page to show the initial state
        }
    }
});
