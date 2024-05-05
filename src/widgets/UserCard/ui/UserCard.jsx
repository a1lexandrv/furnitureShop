import styles from "./UserCard.module.scss";
import { observer } from "mobx-react-lite";

import userStore from "../../../shared/model/userStore";
import { MainButton } from "../../../shared/ui/MainButton";

const UserCard = observer(() => {
  return (
    <div className={styles.container}>
      <h2>{userStore.user.name}</h2>
      <p>{userStore.user.phone}</p>
      <MainButton text="Выход" onClick={() => userStore.logout()} />
    </div>
  );
});

export { UserCard };
