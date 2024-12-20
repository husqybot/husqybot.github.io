export default function isElementInViewport(
  element: HTMLElement,
  customOffset: number = 150
) {
  var rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.visualViewport.height + customOffset ||
        document.documentElement.clientHeight + customOffset) &&
    rect.right <=
      (window.visualViewport.width || document.documentElement.clientWidth)
  );
}
