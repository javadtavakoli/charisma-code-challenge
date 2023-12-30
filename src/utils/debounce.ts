type AnyFunction = (...args: any[]) => any;

const debounce = <F extends AnyFunction>(func: F, delay: number) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<F>): void => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
export default debounce;
