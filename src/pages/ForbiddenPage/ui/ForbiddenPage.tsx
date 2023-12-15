import React from 'react';
import { useTranslation } from 'react-i18next';

const ForbiddenPage = () => {
    const { t } = useTranslation('');

    return (
        <div data-testid="ForbiddenPage">
            {t('У вас нет доступа к этой странице')}
        </div>
    );
};

export default ForbiddenPage;
