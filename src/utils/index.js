export const mathPercent = (previous, current) => {
  const element = previous / 100;
  const result = current / +element.toFixed(0);
  return 100 - result.toFixed(0);
};

// {previousPrice && (
//     <p className={cls.active}>{validPrice(previousPrice)} p</p>
// )}
// <p>{validPrice(currentPrice)} р</p>

// {previousPrice && (
//     <div className={cls.productItem__discount}>
//         {mathProcent(previousPrice, currentPrice)}%
//     </div>
// )}
