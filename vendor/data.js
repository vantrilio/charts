var alert = new Image();
alert.src = 'https://vantrilio.github.io/charts/vendor/img/alert.png';

Chart.pluginService.register({
    afterUpdate: function(chart) {
        chart.config.data.datasets[0]._meta[0].data[7]._model.pointStyle = alert;

    }
});

var config = {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        type: 'line',
        lineTension: '0.3',
        label: "Prediction",
        data: [, , , , , 50, 40, -30, -10, 0, 20, 30],
        borderDash: [5, 5],
        borderWidth: 1,
        borderColor: 'rgba(46,85,115)'
    },
      {
      type: 'line',
      lineTension: '0.3',
      label: 'Liquidity',
      data: [40, 50, 40, 30, 55, 0 ],
      borderColor: 'rgba(46,85,115)',
      fill: false
    }, {
      type: 'bar',
      label: 'Payables',
      backgroundColor: 'rgba(111,207,195, 0.2)',
      data: [65, 40, 80, 81, 56, 85, 40, 30, 40, 50, 50, 55],
    }, {
      type: 'bar',
      label: 'Receivables',
      backgroundColor: 'rgba(255,98,0, 0.2)',
      data: [-65, -60, -80, -81, -56, -85, -90, -70, -40, -40, -30, -25]
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
    legend: {
      position:"bottom",
      labels: {
      fontColor: 'rgba(46,85,115)',
      }
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
   elements: {
            line: {
                fill: false,
                tension: 0
            }
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
          content: 'Headroom',
        }
      },{
            type: 'box',
            drawTime: 'beforeDatasetsDraw',
            yScaleID: 'y-axis-0',
            xScaleID: 'x-axis-0',
            yMin: 100,
            yMax: -100,
            xMin: "Jan" -1 ,
            xMax: "Jun",
            backgroundColor: 'rgba(0, 0, 0, .08)',
         }]
      }
  }
};

var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, config);
