import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {
    productName: "Nintendo",
    quantity: 10,
  },
  {
    productName: "PlayStation",
    quantity: 5,
  },
  {
    productName: "Xbox",
    quantity: 3,
  },
];

export const FirtsStepsApp = () => {
  return (
    <>
      <h1>Carrito de Compras</h1>

      <div className="grid grid-cols-3 gap-4">
        {itemsInCart.map((item) => (
          <ItemCounter
            key={item.productName}
            name={item.productName}
            quantity={item.quantity}
          />
        ))}
      </div>
    </>
  );
};
