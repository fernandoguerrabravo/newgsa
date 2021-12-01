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

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const baseconocimientos = {

    id: 'baseconocimientos',
    title: <FormattedMessage id="Base de Conocimientos" />,
    type: 'group',
    children: [
        {
            id: 'normasdeorigen',
            title: <FormattedMessage id="Normas de Origen" />,
            type: 'item',
            url: '/normasdeorigen',
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

export default baseconocimientos;
