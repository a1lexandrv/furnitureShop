import { Navigate, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import userStore from '../../../shared/model/userStore';

const PrivateRouter = observer(() => {
    return userStore.isAuth ? <Outlet /> : <Navigate to="/login" />;
});

export { PrivateRouter };
