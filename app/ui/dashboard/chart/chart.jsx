'use client'

import styles from './chart.module.css'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const initialOptions = {
    chart: {
        type: 'line',
        backgroundColor: 'transparent',
        style: {
            color: '#A0A0A3',
        },
    },

    title: {
        text: 'Some random chart data',
        align: 'left',
        style: {
            color: '#E0E0E3',
            fontWeight: 'bold',
        },
    },

    subtitle: {
        text: 'Displays the sum of all the previous values and the current value (only within visible range)',
        align: 'left',
        style: {
            color: 'white',
            fontWeight: 'normal',
            fontSize: '12px',
        },
    },

    plotOptions: {
        series: {
            cumulative: true,
            pointStart: Date.UTC(2023, 0, 1),
            pointIntervalUnit: 'day',
        },
    },

    rangeSelector: {
        enabled: false,
    },

    tooltip: {
        pointFormat:
            '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> (${point.cumulativeSum})<br/>',
        changeDecimals: 2,
        valueDecimals: 2,
        valuePrefix: '$',
        valueSuffix: ' USD',
    },

    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3',
            },
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        minRange: 3 * 24 * 36e5,
        max: Date.UTC(2023, 0, 6),
        color: 'white',
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3',
            },
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3',
            },
        },
    },

    series: [
        {
            name: 'The Local Bakery',
            data: [
                678.78, 545.33, 788.72, 406.2, 744.87, 466.03, 822.7, 337.52,
                396.67, 470.89,
            ],
            color: '#6200ee',
        },
        {
            name: 'The Local Fishmarket',
            data: [
                1340.72, 982.43, 1437.99, 1476.2, 670.23, 429.58, 897.52,
                845.11, 1275.79, 1843.01,
            ],
            color: '#BB86FC',
        },
    ],
}

export default function Chart() {
    return (
        <div className={styles.container}>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                className="highcharts-dark"
                options={initialOptions}
            />
        </div>
    )
}
