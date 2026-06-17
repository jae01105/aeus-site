const flightSwitch = document.querySelector(".flight-switch");
const switchLabel = document.querySelector(".switch-label");
const statusLine = document.querySelector(".status-line strong");
const switchCardTitle = document.querySelector(".switch-card h2");
const switchCardCopy = document.querySelector(".switch-card p");

if (flightSwitch) {
  flightSwitch.addEventListener("click", () => {
    const isOn = flightSwitch.classList.toggle("is-on");
    flightSwitch.setAttribute("aria-pressed", String(isOn));
    switchLabel.textContent = isOn ? "ON" : "OFF";
    statusLine.textContent = isOn ? "비행 중 · 항로 기록 중" : "비행 준비 완료";
    switchCardTitle.innerHTML = isOn ? "지금, 커서는<br>비행 중입니다." : "한 번의 클릭으로,<br>비행이 시작됩니다.";
    switchCardCopy.textContent = isOn
      ? "항로는 화면에 드러나지 않습니다. 평소처럼 움직이면 충분합니다."
      : "켜면 커서가 이륙하고, 끄면 오늘의 항로가 나타납니다.";
  });
}

const revealTargets = document.querySelectorAll(".feature-grid article, .formula-card, .route-preview, .log-copy li");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach(target => observer.observe(target));
