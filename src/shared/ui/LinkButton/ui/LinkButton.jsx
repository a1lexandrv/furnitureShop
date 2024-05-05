import { Link } from 'react-router-dom';

function LinkButton({ url, children }) {
    return <Link to={url ? url : '#'}>{children}</Link>;
}

export { LinkButton };
