import { FormattedMessage } from 'react-intl';

// assets
import { IconChartArcs, IconClipboardList, IconChartInfographic , IconCalculator  } from '@tabler/icons';

// constant
const icons = { IconChartArcs, IconClipboardList, IconChartInfographic };

// ===========================|| WIDGET MENU ITEMS ||=========================== //

const widget = {
    id: 'widget',
    title: <FormattedMessage id="widget" />,
    type: 'group',
    children: [
        {
            id: 'statistics',
            title: <FormattedMessage id="statistics" />,
            type: 'item',
            url: '/widget/statistics',
            icon: icons.IconChartArcs
        },
        {
            id: 'data',
            title: <FormattedMessage id="data" />,
            type: 'item',
            url: '/widget/data',
            icon: icons.IconClipboardList
        },
        {
            id: 'chart',
            title: <FormattedMessage id="chart" />,
            type: 'item',
            url: '/widget/chart',
            icon: icons.IconChartInfographic
        },
        {
            id: 'calculadorarapida',
            title: <FormattedMessage id="Calculadora" />,
            type: 'item',
            url: '/mxcalculadorarapida',
            icon: IconCalculator
        },
        {
            id: 'skulist',
            title: <FormattedMessage id="Productos" />,
            type: 'item',
            url: '/skulist',
            icon: IconCalculator
        },
        {
            id: 'research',
            title: <FormattedMessage id="Estudio Mercado" />,
            type: 'item',
            url: '/research',
            icon: IconCalculator
        },

    ]
};

export default widget;
