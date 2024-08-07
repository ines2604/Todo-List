const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function Add() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.className = "unchecked";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }
}

function handleListClick(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    showTask();
}

listContainer.addEventListener("click", handleListClick, false);

function clearAll() {
    listContainer.innerHTML = '';
    saveData();
}

function saveData() {
    const items = [];
    document.querySelectorAll('#list-container li').forEach(li => {
        items.push({
            text: li.textContent.replace('×', '').trim(),
            checked: li.classList.contains('checked')
        });
    });
    localStorage.setItem("data", JSON.stringify(items));
}

function showTask() {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    listContainer.innerHTML = '';
    data.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.text;
        if (item.checked) {
            li.classList.add("checked");
        } else {
            li.classList.add("unchecked");
        }
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
    });
}

function complete() {
    let checkedItems = document.getElementsByClassName("checked");
    for (let item of checkedItems) {
        item.classList.remove("hidden");
    }
    let uncheckedItems = document.getElementsByClassName("unchecked");
    for (let item of uncheckedItems) {
        item.classList.add("hidden");
    }
}

function incomplete() {
    let checkedItems = document.getElementsByClassName("checked");
    for (let item of checkedItems) {
        item.classList.add("hidden");
    }
    let uncheckedItems = document.getElementsByClassName("unchecked");
    for (let item of uncheckedItems) {
        item.classList.remove("hidden");
    }
}

showTask();
