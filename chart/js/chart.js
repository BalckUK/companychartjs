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
            label: 'Start Sales',
            data: [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
            ],
            backgroundColor: 'green',
            borderColor: 'rgba(0, 0, 0, 1)',
            tension: 0.4,
            fill: 1
        }, {
            label: 'End Sales',
            data: [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
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
