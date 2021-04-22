import { FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29

const recoveryOfTopsoil = (valueHypothesis, miningDistanceUrbanCenterFreight, gold, goldenGramPerHa, likeMining, panningTime) => {
  
    let hectare; 
    if(likeMining === PIT) {
      hectare = 0.31
    }else if (likeMining === PIT && panningTime) {
      hectare = 0.31
    }else {
      hectare = goldenGramPerHa * gold
    }

    if(likeMining === FERRY) {
      const toSurfaceRecoveryCostWithFreight = 0
      return toSurfaceRecoveryCostWithFreight
    }
    const soilSurfaceRecPerHa = valueHypothesis === CONSERVATIVE ? 14690 : 23400;

    const capacityLoadTruckNumberOfSeedlings = 2700;
    const superficialSeedlingsPerHa = 1667;
    const transportCostChangesPerKm = 1.60;
    const kmRotatedPerLiter = 2.5;
    const priceLiterDiesel = 3.24;
    const averageDriverSalaryFreightPerKm = 2.22;

    const surfaceSoilRecoveryWithoutFreight = soilSurfaceRecPerHa * hectare * 12;
    const numberOfPathsSuperficialSeddlindRecovery = ((hectare*superficialSeedlingsPerHa)/capacityLoadTruckNumberOfSeedlings) < 0.9999999999999 ? 1 : Math.ceil((hectare*superficialSeedlingsPerHa)/capacityLoadTruckNumberOfSeedlings);
    const totalSurfaceFreightCostChances = miningDistanceUrbanCenterFreight * transportCostChangesPerKm;
    const quantityOfLitersConsumedDieselSurfaceRecovery =	miningDistanceUrbanCenterFreight / kmRotatedPerLiter;
    const fuelCostFreightSurfaceRecovery =	priceLiterDiesel * quantityOfLitersConsumedDieselSurfaceRecovery;
    const costFreightWithDriverSurfaceRecovery =    averageDriverSalaryFreightPerKm * miningDistanceUrbanCenterFreight;
    const toSurfaceFreightCostOneWay =   costFreightWithDriverSurfaceRecovery+ fuelCostFreightSurfaceRecovery + totalSurfaceFreightCostChances;
    const toSurfaceFreightCostRoundTrip =	toSurfaceFreightCostOneWay * 2;
    const toCostFreightFinalSurfaceRecovery =	toSurfaceFreightCostRoundTrip * numberOfPathsSuperficialSeddlindRecovery;
    const toSurfaceRecoveryCostWithFreight =	toCostFreightFinalSurfaceRecovery + surfaceSoilRecoveryWithoutFreight;

    return toSurfaceRecoveryCostWithFreight

}

export default recoveryOfTopsoil