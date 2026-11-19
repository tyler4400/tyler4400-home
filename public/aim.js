// 目录页只留一个机关：十字准星，以及它读出的坐标。触控设备保持系统光标。
const finePointer = window.matchMedia("(pointer: fine)").matches;

if (finePointer) {
  const mark = document.querySelector(".mark");
  const readout = document.querySelector(".readout");

  window.addEventListener("pointermove", (event) => {
    document.documentElement.classList.add("aim", "moving");
    mark.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    readout.textContent = `x ${Math.round(event.clientX)}  y ${Math.round(event.clientY)}`;
  }, { passive: true });

  window.addEventListener("pointerleave", () => {
    document.documentElement.classList.remove("moving");
  });
}
