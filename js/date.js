function setDate(date) {
  const d = new Date();
  let year = d.getFullYear();
  document.getElementById("date").innerText = year;
}

setDate();