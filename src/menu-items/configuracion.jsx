// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconTag, IconAlien } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconTag,
    IconAlien
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const configuracion = {
    id: 'configuracion',
    title: <FormattedMessage id="Configuración" />,
    type: 'group',
    children: [
        {
            id: 'perfil',
            title: <FormattedMessage id="Perfil Seller" />,
            type: 'item',
            url: '/profile',
            icon: icons.IconAlien,
            
        },
        {
            id: 'skulist',
            title: <FormattedMessage id="Productos" />,
            type: 'item',
            url: '/skulist',
            icon: icons.IconTag
        },
       /* {
            id: 'analytics',
            title: <FormattedMessage id="analytics" />,
            type: 'item',
            url: '/dashboard/analytics',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        } */
    ]
};

export default configuracion;
