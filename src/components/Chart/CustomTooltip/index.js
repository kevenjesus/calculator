import React from 'react'
import { Container, Item, Value } from './style'

const CustomTooltip = (props) => {
  const { active, payload, label } = props;
    if (active && payload && payload.length) {
      const { value, displayName } = payload[0].payload
      const total = Math.round(value * 100) / 100
      console.log(payload[0])
      return (
        <Container>
          <Item>{displayName}</Item>
          <Value>{total.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</Value>
        </Container>
      );
    }
  
    return null;
  };

  export default CustomTooltip