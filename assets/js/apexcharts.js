/**
 * 
 * Chart 1 bar
 * 
 */
const chart1 = () => {

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

}


/**
 *
 * Chart 2 Area
 *
 */
const chart2 = () => {

    const container = document.querySelector('#chart2');

    if (!container) {
        return;
    }

    const options = {

        series: [
            {
                name: 'Solar',
                data: [
                    42,
                    48,
                    51,
                    39,
                    55,
                    60,
                    58,
                    44,
                    50,
                    63,
                    66,
                    59,
                    52,
                    57
                ]
            },
            {
                name: 'Wind',
                data: [
                    28,
                    35,
                    22,
                    41,
                    33,
                    26,
                    38,
                    45,
                    31,
                    24,
                    36,
                    42,
                    29,
                    34
                ]
            }
        ],

        chart: {
            type: 'area',
            height: 350,
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

        colors: [
            '#727cf5',
            '#e3eaef'
        ],

        dataLabels: {
            enabled: false
        },

        stroke: {
            curve: 'smooth',
            width: 2
        },

        fill: {
            type: 'gradient',

            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.30,
                opacityTo: 0.05,
                stops: [
                    0,
                    90,
                    100
                ]
            }
        },

        title: {
            text: 'Renewable Energy Generation',
            align: 'left',

            style: {
                fontFamily: '"Nunito", sans-serif, serif',
                fontSize: '18px',
                fontWeight: 600,
                color: '#313a46'
            }
        },

        xaxis: {

            type: 'datetime',

            categories: [
                '2025-06-01',
                '2025-06-02',
                '2025-06-03',
                '2025-06-04',
                '2025-06-05',
                '2025-06-06',
                '2025-06-07',
                '2025-06-08',
                '2025-06-09',
                '2025-06-10',
                '2025-06-11',
                '2025-06-12',
                '2025-06-13',
                '2025-06-14'
            ],

            labels: {
                style: {
                    fontFamily: '"Nunito", sans-serif, serif',
                    fontSize: '12px',
                    colors: '#6c757d'
                }
            },

            axisBorder: {
                color: '#e3eaef'
            },

            axisTicks: {
                color: '#e3eaef'
            }
        },

        yaxis: {

            labels: {

                style: {
                    fontFamily: '"Nunito", sans-serif, serif',
                    fontSize: '12px',
                    colors: '#6c757d'
                },

                formatter: value => {
                    return `${value} GWh`;
                }
            }
        },

        legend: {

            show: true,

            fontFamily: '"Nunito", sans-serif, serif',
            fontSize: '13px',

            labels: {
                colors: '#6c757d'
            },

            markers: {
                width: 8,
                height: 8,
                radius: 2
            }
        },

        grid: {
            borderColor: '#e3eaef',
            strokeDashArray: 3
        },

        tooltip: {

            style: {
                fontFamily: '"Nunito", sans-serif, serif'
            },

            x: {
                format: 'dd MMM yyyy'
            },

            y: {
                formatter: value => {
                    return `${value} GWh`;
                }
            }
        }
    };

    const chart = new window.ApexCharts(
        container,
        options
    );

    chart.render();
};


/**
 * 
 * 
 * chart 3 worl
 * 
 */
const chart3 = () => {

    const container = document.querySelector('#chart3');

    if (!container) {
        return;
    }

    const locations = [
        {
            name: 'New York',
            lat: 40.7128,
            lng: -74.0060,
            value: 72
        },
        {
            name: 'San Francisco',
            lat: 37.7749,
            lng: -122.4194,
            value: 39
        },
        {
            name: 'Sydney',
            lat: -33.8688,
            lng: 151.2093,
            value: 25
        },
        {
            name: 'Singapore',
            lat: 1.3521,
            lng: 103.8198,
            value: 61
        }
    ];

    const map = new ApexMaps(container, {

        chart: {
            height: 350
        },

        legend: {
            show: false
        },

        geo: {
            map: 'world/countries@110m'
        }

    });

    map.render();

    /*
     * On attend que la carte soit rendue
     * avant d'ajouter les points.
     */
    setTimeout(() => {

        const svg = container.querySelector('svg');

        if (!svg) {
            console.warn('SVG ApexMaps introuvable');
            return;
        }

        const width = svg.viewBox.baseVal.width || svg.clientWidth;
        const height = svg.viewBox.baseVal.height || svg.clientHeight;

        /*
         * Projection très simple :
         * longitude → X
         * latitude  → Y
         */
        const project = (lat, lng) => {

            const x = ((lng + 180) / 360) * width;

            const y =
                ((90 - lat) / 180) * height;

            return { x, y };
        };

        const points = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'g'
        );

        points.setAttribute('class', 'custom-map-points');

        locations.forEach(location => {

            const { x, y } = project(
                location.lat,
                location.lng
            );

            const radius = 5 + (location.value / 20);

            const circle =
                document.createElementNS(
                    'http://www.w3.org/2000/svg',
                    'circle'
                );

            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', radius);

            circle.setAttribute(
                'fill',
                '#727cf5'
            );

            circle.setAttribute(
                'fill-opacity',
                '0.75'
            );

            circle.setAttribute(
                'stroke',
                '#ffffff'
            );

            circle.setAttribute(
                'stroke-width',
                '2'
            );

            /*
             * Tooltip navigateur
             */
            const title =
                document.createElementNS(
                    'http://www.w3.org/2000/svg',
                    'title'
                );

            title.textContent =
                `${location.name} — ${location.value}k`;

            circle.appendChild(title);

            points.appendChild(circle);

        });

        svg.appendChild(points);

    }, 300);
};






chart1()
chart2()
chart3()