import { useState } from 'react';

import { $api } from '../../../app/axios/axiosConfig';
import { urls } from '../../../app/axios/urlsConfig';

function useGetComments() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getComments = async () => {
        try {
            const response = await $api.get(urls.getComment);

            setComments(response.data.comments);
            setError('');
        } catch (error) {
            console.log('ERROR ==>', error);
            setError('Ошибка при получении комментариев.');
        } finally {
            setLoading(false);
        }
    };

    return { comments, loading, error, getComments };
}

export { useGetComments };
