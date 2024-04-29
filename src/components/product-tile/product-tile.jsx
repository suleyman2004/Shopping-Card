import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCard, removeFromCard } from "../../store/slices/card-slice";

const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const  card  = useSelector((state) => state.card);

  function handleAddToCard() {
    dispatch(addToCard(product));
  }

  function handleRemoveFromCard(){
    dispatch(removeFromCard(product.id))
  }

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={card.some((item) => item.id === product.id) ? handleRemoveFromCard : handleAddToCard}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            {card.some((item) => item.id === product.id) ? "Remove from card" : "Add to card"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
