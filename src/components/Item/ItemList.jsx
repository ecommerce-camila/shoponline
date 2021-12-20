import React from 'react';
import Item from './Item';

const ItemList = ({ items, products }) => {
    console.log("Los products", products);
    return (
      <div>
        {items?.map((item) => (
        <Item item={item} key={item.id} />
        ))}
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              description={product.descripcion}
              category={product.categoria}
              image={product.image}
              price={product.price}
              stock={product.stock}
              title={product.title}
              id={product.id}
            />
          );
        })}
      </div>
    );
  };
  export default ItemList;