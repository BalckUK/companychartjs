// setup
const data = {
    labels: [
        '1/1',
        '1/2',
        '1/3',
        '1/4',
        '1/5',
        '1/6',
        '1/7',
        '1/8',
        '1/9',
        '1/10',
        '1/11',
        '1/12',
        '1/13',
        '1/14',
        '1/15'
    ],
    datasets: [
        {
            label: '최고온도',
            data: [
                -1,
                -1,
                1,
                -1,
                -2,
                -3,
                -1,
                0,
                -3,
                0,
                3,
                -2,
                2,
                5,
                3
            ],
            backgroundColor: 'green',
            borderColor: 'rgba(0, 0, 0, 1)',
            tension: 0.4,
            fill: 1
        }, {
            label: '최저온도',
            data: [
                -4,
                -8,
                -6,
                -8,
                -11,
                -7,
                -6,
                -7,
                -10,
                -5,
                -12,
                -16,
                -5,
                -8,
                -12
            ],
            backgroundColor: 'black',
            borderColor: 'rgba(0, 0, 0, 1)',
            tension: 0.4
        }
    ]
};

// config
const config = {
    type: 'line',
    data,
    options: {
        scales: {
            y: {
                stacked: true,
                beginAtZero: true
            }
        }
    }
};

// render init block
const myChart = new Chart(document.getElementById('myChart'), config);
