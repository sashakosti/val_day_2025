document.addEventListener("DOMContentLoaded", function () {
    let password = prompt("Введите пароль для входа:");
    if (password !== levelPasswords.level2) {
        alert("Неверный пароль!");
        window.location.href = "../index.html"; // Перенаправление на главную
    }
});

