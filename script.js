function updateTime() {
  const nyTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const londonTime = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });
  const tokyoTime = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
  const sydneyTime = new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" });
  const luandaTime = new Date().toLocaleString("pt-BR", { timeZone: "Africa/Luanda" });
  const lisbonsTime = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
  const montrealTime = new Date().toLocaleString("fr-FR", { timeZone: "America/Montreal" });
  const parisTime = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

  document.getElementById('ny-time').innerText = nyTime;
  document.getElementById('london-time').innerText = londonTime;
  document.getElementById('tokyo-time').innerText = tokyoTime;
  document.getElementById('sydney-time').innerText = sydneyTime;
  document.getElementById('luanda-time').innerText = luandaTime;
  document.getElementById('lisbons-time').innerText = lisbonsTime;
  document.getElementById('montreal-time').innerText = montrealTime;
  document.getElementById('paris-time').innerText = parisTime;
}

setInterval(updateTime, 1000); // Update the time every second

// Initial call to set the time immediately when the page loads
updateTime();
