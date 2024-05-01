import { Navigate, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import user from '../../../shared/model/user';

const PrivateRouter = observer(() => {
    return user.isAuth ? <Outlet /> : <Navigate to="/login" />;
});

export { PrivateRouter };
