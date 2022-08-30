import React from 'react'
import { Container, Item, Value } from './style'

const CustomTooltip = (props) => {
  const { active, payload } = props;
    if (active && payload && payload.length) {
      const { value, displayName } = payload[0].payload
      const total = Math.round(value * 100) / 100
      return (
        <Container>
          <Item>{displayName}</Item>
          <Value>{total.toLocaleString("en-US", { minimumFractionDigits: 2 , style: 'currency', currency: 'USD' })}</Value>
        </Container>
      );
    }
  
    return null;
  };

  export default CustomTooltip