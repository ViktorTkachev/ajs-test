// eslint-disable-next-line import/prefer-default-export
export const calculateItems = (purchases) => {
  let resalt = 0;

  purchases.forEach((element) => {
    resalt += element.count * element.price;
  });

  return resalt;
};
