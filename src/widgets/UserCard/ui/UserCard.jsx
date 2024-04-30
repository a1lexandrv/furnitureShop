import styles from './UserCard.module.scss';
import { observer } from 'mobx-react-lite';

import store from '../../../shared/model/user';
import { MainButton } from '../../../shared/ui/MainButton';

const UserCard = observer(() => {
    return (
        <div className={styles.container}>
            <h2>{store.user.name}</h2>
            <p>{store.user.phone}</p>
            <MainButton text="Выход" onClick={() => store.logout()} />
        </div>
    );
});

export { UserCard };
