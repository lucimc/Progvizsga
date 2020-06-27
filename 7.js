// Calculator module

const summary = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

module.exports = {
  summary: summary,
  sub: sub,
  mul: mul,
  div: div
};
