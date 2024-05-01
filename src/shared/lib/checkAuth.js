import userStore from '../model/userStore';

// Проверяем авторизован ли пользователь
function checkAuth() {
    const data = localStorage.getItem('user');

    if (data) {
        const newUser = JSON.parse(data);
        userStore.login(newUser.name, newUser.phone);
    }
}

export { checkAuth };
