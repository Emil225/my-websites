const ctx2 = document.getElementById('doughnut').getContext('2d');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Belarus', 'Rusia', 'Kazahstan', 'Ucraina', 'Georgia', 'Polonia', 'Cehia', 'România', 'Celelalte țări'],
        datasets: [{
            label: 'export dupa țara',
            data: [27, 23, 10, 8, 7, 6, 5, 3, 11],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',  // Red
                'rgba(54, 162, 235, 0.2)',  // Blue
                'rgba(255, 206, 86, 0.2)',  // Yellow
                'rgba(75, 192, 192, 0.2)',  // Green
                'rgba(153, 102, 255, 0.2)', // Purple
                'rgba(255, 159, 64, 0.2)',  // Orange
                'rgba(255, 99, 71, 0.2)',   // Tomato
                'rgba(60, 179, 113, 0.2)',  // Medium Sea Green
                'rgba(238, 130, 238, 0.2)'  // Violet
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',  // Red
                'rgba(54, 162, 235, 1)',  // Blue
                'rgba(255, 206, 86, 1)',  // Yellow
                'rgba(75, 192, 192, 1)',  // Green
                'rgba(153, 102, 255, 1)', // Purple
                'rgba(255, 159, 64, 1)',  // Orange
                'rgba(255, 99, 71, 1)',   // Tomato
                'rgba(60, 179, 113, 1)',  // Medium Sea Green
                'rgba(238, 130, 238, 1)'  // Violet
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    }
});
