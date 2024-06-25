// Sample data for charts (replace with actual data)
        var activeEmployeesData = {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Active Employees',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [50, 45, 55, 48, 52]
            }]
        };

        var attendancesData = {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Attendance Count',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [30, 25, 32, 28]
            }]
        };

        var requestLeavesData = {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Request Leaves',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [8, 12, 10, 9, 11]
            }]
        };

        var absentsData = {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Absents',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                data: [3, 5, 4, 2, 6]
            }]
        };

        var holidaysData = {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Holidays',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                data: [2, 3, 2, 1, 2]
            }]
        };

        var dayOffData = {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Day Off',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [4, 3, 5, 6, 4]
            }]
        };

        // Chart configuration
        var chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };

        // Initialize charts
        var activeEmployeesChart = new Chart(document.getElementById('activeEmployeesChart'), {
            type: 'bar',
            data: activeEmployeesData,
            options: chartOptions
        });

        var attendancesChart = new Chart(document.getElementById('attendancesChart'), {
            type: 'line',
            data: attendancesData,
            options: chartOptions
        });

        var requestLeavesChart = new Chart(document.getElementById('requestLeavesChart'), {
            type: 'bar',
            data: requestLeavesData,
            options: chartOptions
        });

        var absentsChart = new Chart(document.getElementById('absentsChart'), {
            type: 'line',
            data: absentsData,
            options: chartOptions
        });

        var holidaysChart = new Chart(document.getElementById('holidaysChart'), {
            type: 'bar',
            data: holidaysData,
            options: chartOptions
        });

        var dayOffChart = new Chart(document.getElementById('dayOffChart'), {
            type: 'line',
            data: dayOffData,
            options: chartOptions
        });