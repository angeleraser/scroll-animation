function getDocumentScrollPercentage() {
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;
  const scrollY = window.scrollY;
  const maxScrollHeight = bodyHeight - windowHeight;
  return `${((scrollY * 100) / maxScrollHeight).toFixed(2)}%`;
}

function isElementIntoView(element: HTMLElement) {
  const windowHeight = window.innerHeight;
  const { height, top } = element.getBoundingClientRect();
  const isShownByScrollDown = top <= windowHeight - height;
  // const isShowingScrollingUp = Math.abs(top) < height || top > 0;

  return isShownByScrollDown; /** && isShowingScrollingUp */
}

export { isElementIntoView, getDocumentScrollPercentage };
