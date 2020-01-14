function moneyConverter([arg1]){
  usd = arg1;
  bgn = usd * 1.79549;
  console.log(usd + ' dollars are ' + bgn.toFixed(2) + ' leva.');
}

moneyConverter([100]);
