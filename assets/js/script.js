document.addEventListener("DOMContentLoaded", function () {
    let currentLevel = document.body.dataset.level; // Берем уровень из data-атрибута <body>
    
    if (currentLevel && !localStorage.getItem(currentLevel)) {
        let password = prompt("Введите пароль для входа:");
        
        if (password === levelPasswords[currentLevel]) {
            localStorage.setItem(currentLevel, "unlocked");
        } else {
            alert("Неверный пароль!");
            window.location.href = "../index.html"; // Возвращаем на главную
        }
    }

    // Показываем кнопки для разблокированных уровней
    document.querySelectorAll(".level-button").forEach(button => {
        let level = button.dataset.level;
        if (!localStorage.getItem(level)) {
            button.style.display = "none"; // Скрываем, если уровень не открыт
        }
    });
});

// Функция сброса прогресса
function resetProgress() {
    localStorage.clear();
    location.reload();
}