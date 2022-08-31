import { BRAZIL, countries_region } from 'components/CountrySelect';
import React, { useContext } from 'react'
import { AppContext } from 'utils/AppContext';
import ToBRL from 'utils/toBRL';
import toUSD from 'utils/toUSD';
import { Container, Item, Value } from './style'

const CustomTooltip = (props) => {
  const { state } = useContext(AppContext)
  const { country_region } = state
  const isBrazil = country_region.country === countries_region[BRAZIL].country
  
  const { active, payload } = props;
    if (active && payload && payload.length) {
      const { value, displayName } = payload[0].payload
      const totalConverted = isBrazil ? ToBRL(value) : toUSD(value)
      return (
        <Container>
          <Item>{displayName}</Item>
          <Value>{totalConverted}</Value>
        </Container>
      );
    }
  
    return null;
  };

  export default CustomTooltip