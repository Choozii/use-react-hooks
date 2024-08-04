type GenericCallback<T extends unknown[]> = (...args: T) => void;

export const throttle = <T extends unknown[]>(
  callbackFn: GenericCallback<T>,
  delayTime: number
) => {
  let lastTime = 0;

  const throttledFunction = (...args: T) => {
    const now = Date.now();
    if (now - lastTime >= delayTime) {
      lastTime = now;
      callbackFn(...args);
    }
  };

  return throttledFunction;
};
