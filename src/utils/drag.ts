export const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const draggingElement = document.querySelector(
    '[data-dragging="true"]'
  ) as HTMLElement;

  if (!draggingElement) return;

  const desktop = e.currentTarget;
  const desktopRect = desktop.getBoundingClientRect();

  // Atualiza posição do ícone baseado na posição do mouse e limita ao desktop
  const x = Math.max(
    0,
    Math.min(e.clientX - desktopRect.left - 25, desktopRect.width - 50)
  );
  const y = Math.max(
    0,
    Math.min(e.clientY - desktopRect.top - 25, desktopRect.height - 50)
  );

  draggingElement.setAttribute("data-x", x.toString());
  draggingElement.setAttribute("data-y", y.toString());

  draggingElement.style.left = `${x}px`;
  draggingElement.style.top = `${y}px`;
};

export const handleMouseUp = () => {
  const draggingElement = document.querySelector(
    '[data-dragging="true"]'
  ) as HTMLElement;

  if (draggingElement) {
    draggingElement.removeAttribute("data-dragging");
  }
};

export const handleOnMouseDown = <T extends HTMLElement>(
  e: React.MouseEvent<T, MouseEvent>
) => {
  const isHeaderElement = e.currentTarget.tagName === "HEADER";
  const targetElement = isHeaderElement
    ? e.currentTarget.parentElement
    : e.currentTarget;

  if (targetElement) {
    targetElement.setAttribute("data-dragging", "true");
  }
};
