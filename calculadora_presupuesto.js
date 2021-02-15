var ctx = document.getElementById("presupuesto");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Libros", "Bases de datos", "Audiovisuales"],
    datasets: [{
      data: [5000000,32000000,1300000],
      backgroundColor: ['#6666FF', '#66FF66', '#FFCC00'],
      hoverBackgroundColor: ['#6666FF', '#66FF66', '#FFCC00'],
      hoverBorderColor: "#000000",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,      
      caretPadding: 50,
      
      
    },
    legend: {
      display: false
    },
    cutoutPercentage: 40,
  },
});
