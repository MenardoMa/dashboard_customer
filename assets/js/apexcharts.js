const maxRevenue = 200000;

const revenues = [
    78000,
    145000,
    52000,
    118000,
    91000,
    176000,
    64000,
    132000,
    47000,
    158000,
    83000,
    195000
];

const options = {
    chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        fontFamily: '"Nunito", sans-serif, serif',

        toolbar: {
            show: true, 
            tools: { 
                download: true, 
                selection: true, 
                zoom: false, 
                zoomin: false, 
                zoomout: false, 
                pan: false, 
                reset: false 
            }
        }
    },

    series: [
        {
            name: 'Revenue',
            data: revenues
        },
        {
            name: 'Remaining',
            data: revenues.map(value => maxRevenue - value)
        }
    ],

    // Partie occupée / partie restante
    colors: [
        '#727cf5',
        '#e3eaef'
    ],

    plotOptions: {
        bar: {
            horizontal: false,

            // Barres plus fines
            columnWidth: '20%',

            borderRadius: 3,
            borderRadiusApplication: 'end',
            borderRadiusWhenStacked: 'last'
        }
    },

    xaxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],

        labels: {
            style: {
                fontFamily: '"Nunito", sans-serif, serif'
            }
        }
    },

    yaxis: {
        min: 0,
        max: maxRevenue,
        tickAmount: 5,

        labels: {
            style: {
                fontFamily: '"Nunito", sans-serif, serif'
            },

            formatter: value => {
                return `${Math.round(value / 1000)}k`;
            }
        }
    },

    dataLabels: {
        enabled: false
    },

    legend: {
        show: false
    },

    grid: {
        borderColor: '#e3eaef'
    },

    tooltip: {
        y: {
            formatter: value => {
                return `$${value.toLocaleString()}`;
            }
        }
    }
};

const chart = new window.ApexCharts(
    document.querySelector('#chart'),
    options
);

chart.render();
