import React from "react";
import { Title } from "../../../../ui";
import { TProduct } from "../../../../types";
import { StyledCard, Image, Price, StyledButton, New } from "./styles";

const ProductCard: React.FC<{ product: TProduct }> = ({ product }) => {
  return (
    <StyledCard>
      <Image src={product.image} width={360} height={380} alt={product.title} />
      <Title as="h4" size="XS">{product.title}</Title>
      <New display={product.isNew}>
        <span className="visually-hidden">Новый товар</span>
      </New>
      <Price>{product.price} ₽</Price>
      <StyledButton highlighted onClick={() => {}}>
        Купить
      </StyledButton>
    </StyledCard>
  )
};

export default ProductCard;
