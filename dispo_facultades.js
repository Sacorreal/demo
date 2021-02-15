var ctx = document.getElementById("presu_facultad");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Bases de datos", "Libros", "Audiovisuales"],
    datasets: [{
      data: [5700000,3100000,1300000],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
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