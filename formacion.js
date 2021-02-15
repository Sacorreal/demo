var ctx = document.getElementById("formacion");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Inducción", "Bibliometría", "Marketing Científico"],
    datasets: [{
      data: ["100", "240", "380"],
      backgroundColor: ['#00FFCC', '#00FF00', '#FFCC00'],
      hoverBackgroundColor: "#FF0099",
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 3,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 70,
    },
    legend: {
      display: true
    },
    cutoutPercentage: 30,
  },
});