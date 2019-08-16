export default ({
  dark, bright, white, black,
}) => ({
  a: {
    hdline: dark,
    background: white,
  },
  b: {
    hdline: dark,
    background: bright,
  },
  c: {
    hdline: bright,
    background: dark,
  },
});
