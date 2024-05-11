import { useEffect } from 'react';
import { Router } from './app/router';

import { checkAuth } from './shared/lib/checkAuth';

function App() {
    useEffect(() => {
        checkAuth();
    }, []);

    return <Router />;
}

export default App;
