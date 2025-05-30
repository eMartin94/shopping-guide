export const menuSelectVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.2,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.15, when: 'afterChildren' },
  },
};

export const itemSelectVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
};

export const openingHoursVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  exit: { opacity: 0, height: 0 },
};

export const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -150 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -150,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

export const svgTextStyle = {
  fontFamily: 'FuturaStd-Heavy, Futura Std',
  fontWeight: 800,
  pointerEvents: 'none',
};
