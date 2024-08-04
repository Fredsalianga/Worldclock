function updateTime() {
  const nyTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const londonTime = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });
  const tokyoTime = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
  const sydneyTime = new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" });

  document.getElementById('ny-time').innerText = nyTime;
  document.getElementById('london-time').innerText = londonTime;
  document.getElementById('tokyo-time').innerText = tokyoTime;
  document.getElementById('sydney-time').innerText = sydneyTime;
}

setInterval(updateTime, 1000); // Update the time every second

// Initial call to set the time immediately when the page loads
updateTime();
