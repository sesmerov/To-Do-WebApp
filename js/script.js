const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("Debes indicar algo!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        showTooltip('Tarea añadida');
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        showTooltip('Tarea eliminada');
    }
    saveData();
}, false);

function saveData() {
    localStorage.data = listContainer.innerHTML;
}

function showTask() {
    if (localStorage.data) {
        listContainer.innerHTML = localStorage.data;
    }
}

function showTooltip(message) {
    const tooltip = document.createElement('div');
    tooltip.textContent = message;
    tooltip.style.position = 'fixed';
    tooltip.style.backgroundColor = '#373737';
    tooltip.style.color = '#CB612F';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.bottom = '20px';
    tooltip.style.right = '20px';
    tooltip.style.fontSize = '14px';
    tooltip.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    tooltip.style.zIndex = '1000';
    tooltip.style.opacity = '1';
    tooltip.style.transition = 'opacity 0.5s ease';
    tooltip.style.fontWeight = 'bolder';

    document.body.appendChild(tooltip);

    setTimeout(() => {
        tooltip.style.opacity = '0'; 
        setTimeout(() => {
            document.body.removeChild(tooltip);
        }, 500); 
    }, 2000);
}

showTask();