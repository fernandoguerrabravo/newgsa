// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconTag, IconAlien, IconRuler2 } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconTag,
    IconAlien,
    IconRuler2
};

// ==============================|| SERVICES MENU ITEMS ||============================== //

const servicios = {

    id: 'servicios',
    title: <FormattedMessage id="Gestión de Servicios" />,
    type: 'group',
    children: [
        {
            id: 'requerimientos',
            title: <FormattedMessage id="Nuevo Servicio" />,
            type: 'item',
            url: '/request',
            icon: icons.IconRuler2
        }
        
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

export default servicios;