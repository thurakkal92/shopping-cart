import { useState } from 'react';

export function useModal() {
  const [ isShowing, setIsShowing ] = useState(false)
  function toggle() {
    setIsShowing(!isShowing);
  }

  // if (isShowing) {
  //   document.body.style({ overflow: 'hidden' })
  // } else {
  //   document.body.style({ overflow: 'hidden' })
  // }

  return {
    isShowing,
    toggle
  }
};
