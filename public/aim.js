// 点站名展开介绍。末尾的域名链接和介绍里的链接才离开这页。
for (const button of document.querySelectorAll(".toggle")) {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
  });
}

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
