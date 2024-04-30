import user from '../model/user';

// Проверяем авторизован ли пользователь
function checkAuth() {
    const data = localStorage.getItem('user');

    if (data) {
        const newUser = JSON.parse(data);
        user.login(newUser.name, newUser.phone);
    }
}

export { checkAuth };
