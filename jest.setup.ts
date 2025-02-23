const originalError = console.error;
console.error = (...args) => {
  if (args[0].includes('Image is missing required "src" property')) {
    return;
  }
  originalError.call(console, ...args);
};

const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0].includes('Image with src')) {
    return;
  }
  originalWarn.call(console, ...args);
};
