function hidePrototypes() {
  let protoIcons = document.querySelectorAll("div[class*='generic_tile_thumbnail--prototypeIcon']");
  let protoContainers = Array.from(protoIcons).map(elem => elem.closest("[class*='generic_tile--container']"));
  protoContainers.forEach(container => container.style.display = 'none');
}

const timer = setInterval(start, 100);
let counter = 0;

function start() {
  console.log("running script");
  
  let nodes = document.querySelectorAll("[class*='generic_tile--container']");
  if (nodes.length || counter > 10) {
    setTimeout(hidePrototypes, 1000);
    clearInterval(timer);
    return;
  } else {
    counter += 1;
  }
}

chrome.runtime.onMessage.addListener(function(request) {
  const { message, url } = request;
  if (message === 'changedUrl' && url === 'https://www.figma.com/files/recent') {
    start();
  }
});