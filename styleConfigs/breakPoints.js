const breakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
export default breakPoints;

export const media = {
  sm: `(min-width: ${breakPoints.sm}px)`,
  md: `(min-width: ${breakPoints.md}px)`,
  lg: `(min-width: ${breakPoints.lg}px)`,
  xl: `(min-width: ${breakPoints.xl}px)`,
};
