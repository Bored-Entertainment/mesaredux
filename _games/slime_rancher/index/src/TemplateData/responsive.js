(function () {
  const q = (selector) => document.querySelector(selector);

  const gameContainer = q("#gameContainer");

  gameContainer.style.width = "100%";
  gameContainer.style.height = "100%";

  let gCanvasElement = null;

  const getCanvasFromMutationsList = (mutationsList) => {
    for (let mutationItem of mutationsList) {
      for (let addedNode of mutationItem.addedNodes) {
        if (addedNode.id === "#canvas") {
          return addedNode;
        }
      }
    }
    return null;
  };

  window.UnityLoader.Error.handler = function () {};

  const i = 0;
  new MutationObserver(function (mutationsList) {
    const canvas = getCanvasFromMutationsList(mutationsList);
    if (canvas) {
      gCanvasElement = canvas;

      new MutationObserver(function () {
        this.disconnect();
        q(".bg").classList.add("hide");
      }).observe(canvas, {
        attributes: true,
      });

      this.disconnect();
    }
  }).observe(gameContainer, {
    childList: true,
  });
})();
