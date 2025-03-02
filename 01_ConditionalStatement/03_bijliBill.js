let unit = 700;
let amount = 0;

if (unit > 400) {
  amount = (unit - 400) * 13;
  unit = 400;
}
if (unit <= 400 && unit > 200) {
  amount += (unit - 200) * 8;
  unit = 200;
}
