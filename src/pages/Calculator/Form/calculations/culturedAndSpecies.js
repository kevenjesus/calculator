import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { FERRY, PIT } from "../consts";

const culturedAndSpecies = (hectare, popDensity2010, speciesWealth, likeMining, panningTime) => {
  
  const GDPperCapitaBrazil2019USD = 8717.18;
  const celsiusTemperature = 26.8;
  const exchangeTax = 5;
  const discountRate = 0.03;

  const calc1 = 0.643 * Math.log(popDensity2010);
  const calc2 = 1.655 * Math.log(GDPperCapitaBrazil2019USD);
  const calc3 = 0.234 * celsiusTemperature;
  const calc4 = 2.145 * Math.log(speciesWealth);
  const calc5 = calc1 + calc2 - calc3 + calc4;
  const calc6 = calc5 - 20.85;
  const speciesCostPerHaUSD = Math.exp(calc6);
  const speciesCostPerHaBRL = speciesCostPerHaUSD * exchangeTax;
  
  const amounts = calcMontante(speciesCostPerHaBRL)
  const VPLHectareCulturedAndSpecies = vpl(discountRate, amounts)

  let toCulturedAndSpecies;

  if(likeMining === FERRY) { 
    toCulturedAndSpecies = 0
  }else if (likeMining === PIT && hectare) {
    toCulturedAndSpecies = VPLHectareCulturedAndSpecies * 0.31 * 12
  }else if (likeMining === PIT && panningTime) {
    toCulturedAndSpecies = VPLHectareCulturedAndSpecies * 0.31 * 12
  }else {
    toCulturedAndSpecies = VPLHectareCulturedAndSpecies * hectare * 12
  }
  return toCulturedAndSpecies
           
}

export default culturedAndSpecies
