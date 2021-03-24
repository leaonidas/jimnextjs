import { useEffect } from 'react';

export const useDisableBodyScroll = (disable = false) => {
  useEffect(() => {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [disable]);
};
