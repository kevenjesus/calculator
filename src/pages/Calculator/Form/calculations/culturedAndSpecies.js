import fixedCalcultions from "hooks/fixedCalculations";
import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, PIT } from "../consts";

const culturedAndSpecies = (country_region, likeMining, popDensity2010, species, typeValueLikeMining, hectare) => {
  const { general, bioprospecting } = fixedCalcultions(country_region)
  const { discountRate } = bioprospecting
  const { celciusTemperature, GDPperCapitaBrazilUSD } = general
  
  //const GDPperCapitaBrazilUSD = 8717.18;
  //const celciusTemperature = 26.8;
  //const discountRate = 0.03;

  const calc1 = 0.643 * Math.log(popDensity2010);
  const calc2 = 1.655 * Math.log(GDPperCapitaBrazilUSD);
  const calc3 = 0.234 * celciusTemperature;
  const calc4 = 2.145 * Math.log(species);
  const calc5 = calc1 + calc2 - calc3 + calc4;
  const calc6 = calc5 - 20.85;
  const speciesCostPerHaUSD = Math.exp(calc6);
  //const speciesCostPerHaBRL = speciesCostPerHaUSD * exchangeTax;
  
  const amounts = calcMontante(speciesCostPerHaUSD)
  const VPLHectareCulturedAndSpecies = vpl(discountRate, amounts)

  let toCulturedAndSpecies;

  if(likeMining === FERRY)  { 
    toCulturedAndSpecies = 0
  }else if (likeMining === PIT) {
    toCulturedAndSpecies = VPLHectareCulturedAndSpecies * 0.31 * 12
  }else if(likeMining === ALLUVIUM && typeValueLikeMining === AMOUNT_GOLD){
    toCulturedAndSpecies = VPLHectareCulturedAndSpecies * hectare * 12
  }else if(likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
    toCulturedAndSpecies = VPLHectareCulturedAndSpecies * hectare
  }
  return toCulturedAndSpecies
           
}

export default culturedAndSpecies
