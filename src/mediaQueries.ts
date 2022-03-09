const breakpoints = {
  mobile: 480,
  tabletSM: 768,
  tabletM: 1024,
  tablet: 1240,
  desktopSM: 1360,
  desktop: 1440,
  desktopL: 1640,
};

type BreakpointKeys = keyof typeof breakpoints;

const mediaQueries = {
  until: Object.keys(breakpoints).reduce((acc, item) => {
    acc[item as BreakpointKeys] = `@media all and (max-width: ${
      breakpoints[item as BreakpointKeys]
    }px)`;
    return acc;
  }, {} as Record<BreakpointKeys, string>),
};

export { breakpoints, mediaQueries };
