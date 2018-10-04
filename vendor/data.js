var config = {
  type: 'bar',
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [{
      type: 'line',
      lineTension: '0.3',
      label: 'Liquidity',
      data: [65, 10, -10, 54, 56, 85, 40, 50, 60, 50],
      borderColor: 'rgba(46,85,115)',
      fill: false
    }, {
      type: 'bar',
      label: 'Payables',
      backgroundColor: 'rgba(111,207,195, 0.2)',
      data: [65, 40, 80, 81, 56, 85, 40, 30, 40, 50],
    }, {
      type: 'bar',
      label: 'Receivables',
      backgroundColor: 'rgba(255,98,0, 0.2)',
      data: [-65, -60, -80, -81, -56, -85, -40, -40, -30, -40]
    }]
  },
  options: {
    scales: {
      xAxes: [{
        stacked: true,
        barPercentage: 0.5
      }],
      yAxes: [{
        stacked: true
      }]
    },
    tooltips: {
     backgroundColor: '#FFF',
     titleFontSize: 16,
     titleFontColor: 'rgba(46,85,115)',
     bodyFontColor: '#000',
     bodyFontSize: 14,
     width:10,
     borderColor: 'rgba(46,85,115)',
     borderWidth: 1,
     displayColors: false
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
          enabled: true,
          content: 'Headroom',

        }
      }],
    }
  }
};

var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, config);
