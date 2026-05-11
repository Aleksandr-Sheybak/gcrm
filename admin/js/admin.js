const API_URL = 'https://script.google.com/macros/s/AKfycbxZvyp9hy8euTQJT-eVF-BUgNLgYf9Ial1U-iWQPf6RRzRyDSVH-8TC5Rq4LgyqDJh6rA/exec';
const ADMIN_USER = 'Root';
const ADMIN_PASS = 'anna1981';

// API запрос
async function api(params) {
    const url = API_URL + '?' + new URLSearchParams(params).toString();
    const r = await fetch(url);
    return r.json();
}

// Авторизация (если находимся на странице входа)
function login() {
    const u = document.getElementById('loginUser').value.trim();
    const p = document.getElementById('loginPass').value.trim();
    if (u === ADMIN_USER && p === ADMIN_PASS) {
        sessionStorage.setItem('admin_logged', 'true');
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('loginError').textContent = 'Неверный логин или пароль';
    }
}

// Проверка сессии (на всех страницах кроме входа)
if (!window.location.pathname.includes('index.html')) {
    if (sessionStorage.getItem('admin_logged') !== 'true') {
        window.location.href = 'index.html';
    }
}

// Выход
function logout() {
    sessionStorage.removeItem('admin_logged');
    window.location.href = 'index.html';
}

// Тёмная тема
function toggleTheme() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
