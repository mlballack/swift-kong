import { config } from '$lib/config.js';

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(config.locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export default formatDate;
