import styles from './LoginForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { MainButton } from '../../../shared/ui/MainButton';
import { useState } from 'react';
import store from '../../../shared/model/user';

const LoginForm = observer(() => {
    const navigate = useNavigate();
    const [nameValue, setNameValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');

    const onSubmitForm = (event) => {
        event.preventDefault();
        store.login(nameValue, phoneValue);

        if (store.isAuth) {
            navigate('/profile');
        } else alert('Повторите попытку!');
    };

    return (
        <form className={styles.form} onSubmit={onSubmitForm}>
            <h2>Войти</h2>
            <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={nameValue}
                onChange={(event) => setNameValue(event.target.value)}
                required
                minLength={3}
            />
            <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="Номер телефона"
                value={phoneValue}
                onChange={(event) => setPhoneValue(event.target.value)}
                required
                minLength={8}
            />
            <MainButton text="Войти" type="submit" />
        </form>
    );
});

export { LoginForm };
