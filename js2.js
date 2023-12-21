document.getElementById("mainBtn").addEventListener("click", function() {
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("groceriesPage").style.display = "block";
  document.getElementById("dentalPage").style.display = "block";
  document.getElementById("mainBtn").style.display = "none";
  document.getElementById("backBtn").style.display = "block";
});

document.getElementById("backBtn").addEventListener("click", function() {
  document.getElementById("mainPage").style.display = "block";
  document.getElementById("groceriesPage").style.display = "none";
  document.getElementById("dentalPage").style.display = "none";
  document.getElementById("mainBtn").style.display = "block";
  document.getElementById("backBtn").style.display = "none";
});

document.getElementById("addGrocery").addEventListener("click", function() {
  const groceryInput = document.getElementById("groceryInput").value;

  if (groceryInput.trim() !== "") {
    const groceryList = document.getElementById("groceryList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="text" value="${groceryInput}" disabled>
      <label>
        <input type="radio" name="groceryStatus_${groceryInput}" value="Buy"> Satın aldım
      </label>
      <label>
        <input type="radio" name="groceryStatus_${groceryInput}" value="Couldn't Buy"> Satın alamadım
      </label>
      <button class="deleteGrocery">Sil</button>
    `;
    groceryList.appendChild(listItem);
    document.getElementById("groceryInput").value = "";

    listItem.querySelector(".deleteGrocery").addEventListener("click", function() {
      listItem.remove();
    });
  }
});

document.getElementById("addDental").addEventListener("click", function() {
  const dentalInput = document.getElementById("dentalInput").value;

  if (dentalInput.trim() !== "") {
    const dentalList = document.getElementById("dentalList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="text" value="${dentalInput}" disabled>
      <label>
        <input type="radio" name="dentalStatus_${dentalInput}" value="Buy"> Satın aldım
      </label>
      <label>
        <input type="radio" name="dentalStatus_${dentalInput}" value="Couldn't Buy"> Satın alamadım
      </label>
      <button class="deleteDental">Sil</button>
    `;
    dentalList.appendChild(listItem);
    document.getElementById("dentalInput").value = "";

    listItem.querySelector(".deleteDental").addEventListener("click", function() {
      listItem.remove();
    });
  }
});