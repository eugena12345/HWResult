interface ArgumentType {
  price: number;
  discount: number;
  isInstallment: boolean;
  months?: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months = 1,
}: ArgumentType): number => {
  const priceWithDiscont = +((price * (100 - discount)) / 100).toFixed(2);
  if (!isInstallment) return priceWithDiscont;
  if (isInstallment && !months) {
    throw Error("add month for Installment");
  }
  const prisePerMonth = priceWithDiscont / months;
  return prisePerMonth;
};
