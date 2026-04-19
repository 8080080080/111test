type SwipeDirection = -1 | 1;

interface MobileSwipeNavigationOptions {
  onSwipe: (direction: SwipeDirection, event: PointerEvent) => void;
  onStart?: (event: PointerEvent) => void;
  onEnd?: (event: PointerEvent) => void;
  isEnabled?: () => boolean;
  shouldIgnore?: (target: EventTarget | null) => boolean;
  threshold?: number;
  touchAction?: string | false;
}

const isCoarsePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

export function attachMobileSwipeNavigation(
  element: HTMLElement | null,
  options: MobileSwipeNavigationOptions
) {
  if (!element || typeof window === "undefined" || !("PointerEvent" in window)) {
    return () => {};
  }

  const threshold = options.threshold ?? 46;
  const touchAction = options.touchAction === undefined ? "pan-y" : options.touchAction;
  const previousTouchAction = element.style.touchAction;
  const shouldRestoreTouchAction = touchAction !== false && !previousTouchAction;

  if (touchAction !== false && !element.style.touchAction) {
    element.style.touchAction = touchAction;
  }

  let pointerId = -1;
  let startX = 0;
  let startY = 0;
  let tracking = false;
  let horizontalIntent = false;
  let suppressClickUntil = 0;

  const enabled = () => (options.isEnabled?.() ?? true) && isCoarsePointer();

  const reset = () => {
    pointerId = -1;
    tracking = false;
    horizontalIntent = false;
  };

  const finish = (event: PointerEvent) => {
    options.onEnd?.(event);
    reset();
  };

  const onPointerDown = (event: PointerEvent) => {
    if (
      !enabled() ||
      event.pointerType !== "touch" ||
      options.shouldIgnore?.(event.target)
    ) {
      return;
    }

    if (pointerId !== -1) {
      reset();
      return;
    }

    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    tracking = true;
    horizontalIntent = false;
    options.onStart?.(event);
  };

  const onPointerMove = (event: PointerEvent) => {
    if (!tracking || event.pointerId !== pointerId) {
      return;
    }

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (!horizontalIntent && absY > 14 && absY > absX * 1.15) {
      finish(event);
      return;
    }

    if (!horizontalIntent && absX > 14 && absX > absY * 1.25) {
      horizontalIntent = true;
    }

    if (horizontalIntent && event.cancelable) {
      event.preventDefault();
    }
  };

  const onPointerUp = (event: PointerEvent) => {
    if (!tracking || event.pointerId !== pointerId) {
      return;
    }

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (horizontalIntent && absX >= threshold && absX > absY * 1.25) {
      suppressClickUntil = Date.now() + 450;
      options.onSwipe(deltaX < 0 ? 1 : -1, event);

      if (event.cancelable) {
        event.preventDefault();
      }
    }

    finish(event);
  };

  const onPointerCancel = (event: PointerEvent) => {
    if (tracking && event.pointerId === pointerId) {
      finish(event);
    }
  };

  const onClick = (event: MouseEvent) => {
    if (Date.now() > suppressClickUntil) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  };

  element.addEventListener("pointerdown", onPointerDown, { passive: true });
  element.addEventListener("pointermove", onPointerMove, { passive: false });
  element.addEventListener("pointerup", onPointerUp, { passive: false });
  element.addEventListener("pointercancel", onPointerCancel, { passive: true });
  element.addEventListener("click", onClick, true);

  return () => {
    element.removeEventListener("pointerdown", onPointerDown);
    element.removeEventListener("pointermove", onPointerMove);
    element.removeEventListener("pointerup", onPointerUp);
    element.removeEventListener("pointercancel", onPointerCancel);
    element.removeEventListener("click", onClick, true);

    if (shouldRestoreTouchAction) {
      element.style.touchAction = "";
    }
  };
}
