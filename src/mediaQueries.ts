export const breakpoints = {
  mobile: 480,
  tabletSM: 768,
  tabletM: 1024,
  desktop: 1440,
};

type BreakpointKeys = keyof typeof breakpoints;

export const mediaQueries = {
  until: Object.keys(breakpoints).reduce((acc, item) => {
    acc[item as BreakpointKeys] = `@media all and (max-width: ${
      breakpoints[item as BreakpointKeys]
    }px)`;
    return acc;
  }, {} as Record<BreakpointKeys, string>),
};
