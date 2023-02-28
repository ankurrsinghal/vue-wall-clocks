import { onUnmounted } from "vue";

export function useInterval(fn: Function, interval = 1000) {
  let timer: any = null;

  function stop() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  function start() {
    stop();
    timer = setInterval(fn, interval);
  }

  start();

  onUnmounted(stop);

  return { start, stop };
}

export function useRaf(fn: Function) {
  let timer: any = null;

  function stop() {
    if (timer !== null) {
      cancelAnimationFrame(timer);
      timer = null;
    }
  }

  function loop() {
    fn();
    if (timer !== null) {
      requestAnimationFrame(loop);
    }
  }

  function start() {
    stop();
    timer = requestAnimationFrame(loop);
  }

  start();

  onUnmounted(stop);

  return { start, stop };
}

export function useResizeObserver() {
  
}