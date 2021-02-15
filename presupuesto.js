var ctx = document.getElementById("predisponible");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Libros", "Bases de datos", "Recursos Administrativos"],
    datasets: [{
      data: ["1500000", "3000000", "2750000"],
      backgroundColor: ['#00FF33', '#66CCFF', '#FFCC33'],
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