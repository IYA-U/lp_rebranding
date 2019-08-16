export default ({
  dark, bright, white, black,
}) => ({
  a: {
    hdline: dark,
    paragraph: black,
    background: white,
  },
  b: {
    hdline: dark,
    paragraph: black,
    background: bright,
  },
  c: {
    hdline: bright,
    paragraph: white,
    background: dark,
  },
});
