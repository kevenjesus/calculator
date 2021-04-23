import { FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29

const recoveryOfTopsoil = (likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence) => {
  
    let hectare; 
    if(likeMining === PIT) {
      hectare = 0.31

    }else {
      hectare = goldenGramPerHa * gold

    }

    if(likeMining === FERRY) {
      const toSurfaceRecoveryCostWithFreight = 0
      return toSurfaceRecoveryCostWithFreight
    }
    const soilSurfaceRecPerHa = txPrevalence === CONSERVATIVE ? 14690 : 23400;

    const capacityLoadTruckNumberOfSeedlings = 2700;
    const superficialSeedlingsPerHa = 1667;
    const transportCostChangesPerKm = 1.60;
    const kmRotatedPerLiter = 2.5;
    const priceLiterDiesel = 3.24;
    const averageDriverSalaryFreightPerKm = 2.22;

    const surfaceSoilRecoveryWithoutFreight = soilSurfaceRecPerHa * hectare * 12;
    const numberOfPathsSuperficialSeddlindRecovery = ((hectare*superficialSeedlingsPerHa)/capacityLoadTruckNumberOfSeedlings) < 0.9999999999999 ? 1 : Math.ceil((hectare*superficialSeedlingsPerHa)/capacityLoadTruckNumberOfSeedlings);
    const totalSurfaceFreightCostChances = distanceanningCenter * transportCostChangesPerKm;
    const quantityOfLitersConsumedDieselSurfaceRecovery =	distanceanningCenter / kmRotatedPerLiter;
    const fuelCostFreightSurfaceRecovery =	priceLiterDiesel * quantityOfLitersConsumedDieselSurfaceRecovery;
    const costFreightWithDriverSurfaceRecovery =    averageDriverSalaryFreightPerKm * distanceanningCenter;
    const toSurfaceFreightCostOneWay =   costFreightWithDriverSurfaceRecovery+ fuelCostFreightSurfaceRecovery + totalSurfaceFreightCostChances;
    const toSurfaceFreightCostRoundTrip =	toSurfaceFreightCostOneWay * 2;
    const toCostFreightFinalSurfaceRecovery =	toSurfaceFreightCostRoundTrip * numberOfPathsSuperficialSeddlindRecovery;
    const toSurfaceRecoveryCostWithFreight =	toCostFreightFinalSurfaceRecovery + surfaceSoilRecoveryWithoutFreight;

    return toSurfaceRecoveryCostWithFreight

}

export default recoveryOfTopsoil