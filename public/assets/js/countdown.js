function updateCountdown() {
  const weddingDate = new Date("2026-09-05T15:00:00");
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "🎉 To już dziś!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `<span class="cd-part">${days} dni</span>, ` +
    `<span class="cd-part">${hours.toString().padStart(2, "0")} h</span> : ` +
    `<span class="cd-part">${minutes.toString().padStart(2, "0")} m</span> : ` +
    `<span class="cd-part seconds">${seconds.toString().padStart(2, "0")} s</span>`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
