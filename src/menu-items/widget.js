import { FormattedMessage } from 'react-intl';

// assets
import { IconChartArcs, IconClipboardList, IconChartInfographic , IconCalculator , IconTag, IconChartDots, IconFileSearch, IconLemon  } from '@tabler/icons';

// constant
const icons = { IconChartArcs, IconClipboardList, IconChartInfographic, IconTag, IconChartDots , IconFileSearch,  IconLemon};

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
            id: 'research',
            title: <FormattedMessage id="Estudio de Mercado" />,
            type: 'item',
            url: '/research',
            icon: icons.IconChartDots
        },
        {
            id: 'clasificacion',
            title: <FormattedMessage id="Aranceles" />,
            type: 'item',
            url: '/htstaxlist',
            icon: icons.IconFileSearch
        },
        {
            id: 'fdatools',
            title: <FormattedMessage id="FDA Regulatory Tools" />,
            type: 'collapse',
            icon: icons.IconLemon,
            children: [
                {
                    id: 'fdaregister',
                    title: <FormattedMessage id="Registro FDA" />,
                    type: 'item',
                    url: '/fdaregister',
                    
                },
                {
                    id: 'fdafsvp',
                    title: <FormattedMessage id="Programa FSVP" />,
                    type: 'item',
                    url: '/fsvp',
                    
                },
                {
                    id: 'fda',
                    title: <FormattedMessage id="Prior Notice" />,
                    type: 'item',
                    url: '/fda',
                    
                }
            ]
        },

        

    ]
};

export default widget;
