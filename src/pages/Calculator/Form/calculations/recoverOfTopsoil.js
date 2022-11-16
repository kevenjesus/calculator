import fixedCalcultions from "hooks/fixedCalculations";
import { ALLUVIUM, FERRY, IMPACTED_AREA, PIT } from "../consts";

const CONSERVATIVE = 0.29

const recoveryOfTopsoil = (country_region, likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence, typeValueLikeMining) => {
  
  const { general, recoverOfTopSoll } = fixedCalcultions(country_region)
  const { kmRotatedPerLiter, priceLiterDieselUSD, averageDriverSalaryFreightPerKmUSD } = general 
  const { hectare, soilSurfaceRecPerHa_conservative, soilSurfaceRecPerHa, capacityLoadTruckNumberOfSeedlings, superficialSeedlingsPerHa, transportCostChangesPerKm } = recoverOfTopSoll

  //console.log('recoveryOfTopsoil', kmRotatedPerLiter, priceLiterDieselUSD, averageDriverSalaryFreightPerKmUSD, hectare, soilSurfaceRecPerHa_conservative, soilSurfaceRecPerHa, capacityLoadTruckNumberOfSeedlings, superficialSeedlingsPerHa, transportCostChangesPerKm)


  const soilSurfaceRecPerHaValue = txPrevalence === CONSERVATIVE ? soilSurfaceRecPerHa_conservative : soilSurfaceRecPerHa;

    let hectareValue; 
    if(likeMining === PIT) {
      hectareValue = hectare
    }else {
      hectareValue = goldenGramPerHa * gold
    }

    //const capacityLoadTruckNumberOfSeedlings = 2700;
    //const superficialSeedlingsPerHa = 1667;
    //const transportCostChangesPerKm = 1.60;

    //const kmRotatedPerLiter = 2.5;
    //const priceLiterDiesel = 3.24;
    //const averageDriverSalaryFreightPerKmUSD = 2.22;

    const numberOfPathsSuperficialSeddlindRecovery = ((hectareValue*superficialSeedlingsPerHa)/capacityLoadTruckNumberOfSeedlings) < 0.9999999999999 ? 1 : Math.ceil((hectareValue*superficialSeedlingsPerHa)/capacityLoadTruckNumberOfSeedlings);
    const totalSurfaceFreightCostChances = distanceanningCenter * transportCostChangesPerKm;
    const quantityOfLitersConsumedDieselSurfaceRecovery =	distanceanningCenter / kmRotatedPerLiter;
    const fuelCostFreightSurfaceRecovery =	priceLiterDieselUSD * quantityOfLitersConsumedDieselSurfaceRecovery;
    const costFreightWithDriverSurfaceRecovery = averageDriverSalaryFreightPerKmUSD * distanceanningCenter;
    const toSurfaceFreightCostOneWay = costFreightWithDriverSurfaceRecovery+ fuelCostFreightSurfaceRecovery + totalSurfaceFreightCostChances;
    const toSurfaceFreightCostRoundTrip =	toSurfaceFreightCostOneWay * 2;
    const toCostFreightFinalSurfaceRecovery =	toSurfaceFreightCostRoundTrip * numberOfPathsSuperficialSeddlindRecovery;
    
    if(likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA) {
      const surfaceSoilRecoveryWithoutFreight = soilSurfaceRecPerHaValue * hectareValue;
      const toSurfaceRecoveryCostWithFreight = toCostFreightFinalSurfaceRecovery + surfaceSoilRecoveryWithoutFreight;
      return toSurfaceRecoveryCostWithFreight

    }else if(likeMining === FERRY) {
      const toSurfaceRecoveryCostWithFreight = 0;
      return toSurfaceRecoveryCostWithFreight

    }else{
      const surfaceSoilRecoveryWithoutFreight = soilSurfaceRecPerHaValue * hectareValue * 12;
      const toSurfaceRecoveryCostWithFreight =	toCostFreightFinalSurfaceRecovery + surfaceSoilRecoveryWithoutFreight;
      return toSurfaceRecoveryCostWithFreight 
    }
}

export default recoveryOfTopsoil