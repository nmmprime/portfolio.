// Users Growth Chart
const ctxUsers = document.getElementById("usersChart").getContext("2d");
new Chart(ctxUsers, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Users",
      data: [1200, 1900, 3000, 2500, 4000, 4800],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37, 99, 235, 0.1)",
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

// Sales Overview Chart
const ctxSales = document.getElementById("salesChart").getContext("2d");
new Chart(ctxSales, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Sales",
      data: [5000, 7000, 6000, 8000, 9000, 7500, 6500],
      backgroundColor: "#10b981"
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});
