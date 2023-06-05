const transformNumber = number => {
  const arr = number.toString().split('').reverse();
  const newArray = arr.map((digit, index, array) => {
    if (index % 3 === 2 && array.length - 1 > index) {
      return `,${digit}`;
    }
    return digit;
  });
  const result = newArray.reverse().join('');
  return result;
};

export default transformNumber;
