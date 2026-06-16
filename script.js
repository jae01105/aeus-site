const toggle = document.querySelector("#giant-toggle");
const statusText = document.querySelector("#demo-status");
const demoCopy = document.querySelector("#demo-copy");
const routeVisual = document.querySelector("#route-visual");

toggle?.addEventListener("click", () => {
  const isOn = !toggle.classList.contains("on");
  toggle.classList.toggle("on", isOn);
  toggle.setAttribute("aria-pressed", String(isOn));
  toggle.querySelector(".toggle-label").textContent = isOn ? "ON" : "OFF";
  statusText.textContent = isOn ? "비행 중 · 경로 기록 중" : "착륙 완료 · 오늘의 경로 공개";
  demoCopy.textContent = isOn
    ? "경로는 보이지 않게 기록 중입니다. 평소처럼 마우스를 사용하세요."
    : "비행이 종료되었습니다. 아래에서 오늘의 경로를 확인하세요.";
  routeVisual?.classList.toggle("recording", isOn);
});
