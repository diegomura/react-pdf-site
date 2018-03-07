export const getElementHeight = element => {
  if (element.height) {
    return element.height;
  }

  const height = window
    .getComputedStyle(element, '')
    .getPropertyValue('height');
  const value = parseInt(height.substring(0, height.length - 2));

  // cache data
  element.height = value;

  return value;
};
