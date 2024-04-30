import styles from './ProfilePage.module.scss';

import { UserCard } from '../../../widgets/UserCard/ui/UserCard';
import { FavouritesList } from '../../../widgets/FavouritesList';

function ProfilePage() {
    return (
        <div className={styles.page}>
            <h1>Профиль</h1>
            <UserCard />
            <FavouritesList />
        </div>
    );
}

export { ProfilePage };
