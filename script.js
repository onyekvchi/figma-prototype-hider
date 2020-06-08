function hidePrototypes() {
  let protoIcons = document.querySelectorAll("div[class*='generic_tile_thumbnail--prototypeIcon']");
  let protoContainers = Array.from(protoIcons).map(elem => elem.closest("[class*='generic_tile--container']"));
  protoContainers.forEach(container => container.style.display = 'none');
}

function start() {
  let nodes = document.querySelectorAll("[class*='generic_tile--container']");
  if (nodes.length) {
    setTimeout(hidePrototypes, 100);
    clearInterval(timer);
    return;
  }
}

const timer = setInterval(start, 100);