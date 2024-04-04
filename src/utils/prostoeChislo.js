const prostoe = (n) => {
  if (n <= 1) return 'no';
  if (n === 2) return 'yes';

  if (n % 2 === 0) return 'no';

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};
export default prostoe;
