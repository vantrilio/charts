var config = {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      type: 'line',
      lineTension: '0.3',
      label: 'Liquidity',
      data: [65, 10, -10, 54, 56, 85, 40],
      borderColor: 'rgba(111,207,195)',
      fill: false
    }, {
      type: 'bar',
      label: 'Payables',
      backgroundColor: 'rgba(111,207,195, 0.2)',
      data: [65, 40, 80, 81, 56, 85, 40],
    }, {
      type: 'bar',
      label: 'Receivables',
      backgroundColor: 'rgba(255,98,0, 0.2)',
      data: [-65, -60, -80, -81, -56, -85, -40]
    }]
  },
  options: {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    },
    annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: -50,
        borderColor: 'rgb(255,98,0)',
        borderWidth: 2,
        label: {
          enabled: false,
          content: 'Test label'
        }
      }],
    }
  }
};

var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, config);
