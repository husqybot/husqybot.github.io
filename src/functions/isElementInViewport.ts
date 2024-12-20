export default function isElementInViewport(element: HTMLElement) {
  var rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.visualViewport.height ||
        document.documentElement.clientHeight + 150) &&
    rect.right <=
      (window.visualViewport.width || document.documentElement.clientWidth)
  );
}
