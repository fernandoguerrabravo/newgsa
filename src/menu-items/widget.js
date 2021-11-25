import { FormattedMessage } from 'react-intl';

// assets
import { IconChartArcs, IconClipboardList, IconChartInfographic , IconCalculator , IconTag, IconChartDots  } from '@tabler/icons';

// constant
const icons = { IconChartArcs, IconClipboardList, IconChartInfographic, IconTag, IconChartDots };

// ===========================|| WIDGET MENU ITEMS ||=========================== //

const widget = {
    id: 'widget',
    title: <FormattedMessage id="Herramientas" />,
    type: 'group',
    children: [
      /*  {
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
        }, */
        {
            id: 'calculadorarapida',
            title: <FormattedMessage id="Calculadora Rápida" />,
            type: 'item',
            url: '/mxcalculadorarapida',
            icon: IconCalculator
        },
        {
            id: 'skulist',
            title: <FormattedMessage id="Productos" />,
            type: 'item',
            url: '/skulist',
            icon: icons.IconTag
        },
        {
            id: 'research',
            title: <FormattedMessage id="Estudio de Mercado" />,
            type: 'item',
            url: '/research',
            icon: icons.IconChartDots
        },
        {
            id: 'clasificacion',
            title: <FormattedMessage id="Clasificacion Arancelaria" />,
            type: 'item',
            url: '/htstaxlist',
            icon: icons.IconChartDots
        }

    ]
};

export default widget;
