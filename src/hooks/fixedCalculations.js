import { COLOMBIA, countries_region, EQUADOR, PERU } from 'components/CountrySelect'

const fixedCalcultions = (country_region) => {
    let fixedValues = {
        general: null,
        carbon: null,
        bioprospecting: null,
        recoverOfTopSoll: null,
        erosionSiltingUp: null,
        dredgingAndRiverSediments: null,
        cavaGroundingCostAuNorm: null,
        cavaGroundingCostAuFertile: null,
        lossQI: null,
        neuroSymptomsGarimpeiro: null,
        heartAttack: null,
        soilMercuryRemediation: null,
        hypertension: null,
        woodAndNonWoodProducts: null
    }

        const isPeru = country_region && country_region.country === countries_region[PERU].country
        const isEquador = country_region && country_region.country === countries_region[EQUADOR].country
        const isColombia = country_region && country_region.country === countries_region[COLOMBIA].country

        /************************ 
         * FIXED VALUES, DEFAULT BRAZIL
         ************************/ 

        let general = {
            GDPperCapitaBrazilUSD: 6796.84,
            celciusTemperature: 26.8,
            kmRotatedPerLiter: 2.5,
            priceLiterDieselUSD: 0.648,
            averageDriverSalaryFreightPerKmUSD: 0.444,
            densityGold: 2.76,
            excavationGoldLoss: 2,
            hollowMediumDepth: 0.4,
            averageDepthOfFertileEarth: 0.4,
            quantitOfM3ExcavatorPerHour: 160,
            quantityOfGoldGramsPerYearWell: 23700,
            HgAuRatio: 2.6,
            percentLossHgInWater_convervative: 0.13,
            percentLossHgInWater: 0.21,
            percentLossHgInWater_ferry__convervative: 0.22,
            percentLossHgInWater_ferry: 0.35,
            methyladPercent_conservative: 0.11,
            methyladPercent: 0.22,
            ruralIndividualWeight: 59.1,
            urbanindividualWeight: 70,
            levelMediumContaminationFish: 0.5,
            AverageFishConsumptionPerDayInRuralGrams: 144.5,
            consumptionMediumFishByDayInGramsUrban: 57,
            densityPopulationalRegionNorth2060: 6,
            aDALYUSD: 20719.8,
            excavatorHoursDays: 10,
            excavatorCostPerKMUSD: 0.76,
            cavaAverageProductivity: 0.4,
            prodGoldMonthFerry: 302,
        }
        let bioprospecting = { 
            bioprospectingCostByUSD_conservative: 13.63,
            bioprospectingCostByUSD: 23.39,
            discountRate: 0.03
        }

        let carbon = {
            carbonCostPerHaUSD: 177.55
        }
        let recoverOfTopSoll = {
            hectare: 0.31,
            soilSurfaceRecPerHa_conservative: 2938,
            soilSurfaceRecPerHa: 4680,
            capacityLoadTruckNumberOfSeedlings: 2700,
            superficialSeedlingsPerHa: 1667,
            transportCostChangesPerKm: 0.32

        }
        let erosionSiltingUp = {
            siltingUpCostPerHaUSD: 13.28
        }
        let dredgingAndRiverSediments = {
            prodMediaCava: 10,
            prodOuroKgporMes: 0.00604,
            dredgingCostPerM3: 5.6,
            averageMotorPower: 54.4,
            productionSedimentTurnsFeatherTonnesPerMonth: 37.82,
            equivalentErosionTonPerHaPerYear: 12.54,
            erosionControlUSD: 13.28,
            productionSedimentTurnsFeatherTonnesPerMonthGold: 6.262,
            siltingPercentage: 0.15,
            theAmountOfSedimentPer1DredgeM3PerHour: 300,
            transportCost1DredgeUSD: 0.76,
        }
        let cavaGroundingCostAuNorm = {
            normalCavaGroundingCostUSD: 0.2,
        }
        let cavaGroundingCostAuFertile = {
            groundingCostFertilePitUSD: 2.54
        }
        let lossQI = {
            birthRate: 18.8,

        }
        let neuroSymptomsGarimpeiro = {
            amountOfGoldminersYear: 150.45,
            neuroTreatmentCostPerGoldMinerUSD: 449.8,

        }
        let heartAttack = {
            proMenOver40ByPopTotal: 0.12,
            accumulatedRiskMercuryInfarction: 0.0161,
            annualInfarctTreatmentCostUSD: 460,
        }

        let hypertension = {
            propOfPeopleOver20YearsOfAgeByTotalPop: 0.58,
            AnnualHypertensionCostTreatamentUSD: 58.4,
            accumulatedRiskMercuryHypertension: 0.0121
        }

        let soilMercuryRemediation = {
            lossPercentHgInSoil: 0.088,
            HgContainedSoilinGrassPerTon: 0.24,
            DensidadeSolo: 2.76,
            remediationCostUSDPerTonOfSoil: 37.6
        }

        let woodAndNonWoodProducts = {
            costPMNMPerHaYearUSD: 152.8,
            discountRate: 0.03
        }

        if(isPeru) {
            general.GDPperCapitaBrazilUSD = 6126.9
            general.celciusTemperature = 26
            general.densityGold = 2.76
            general.excavationGoldLoss = 2
            general.kmRotatedPerLiter = 5.4
            general.priceLiterDieselUSD = 0.82
            general.averageDriverSalaryFreightPerKmUSD = 0.4
            general.quantityOfGoldGramsPerYearWell = 23700
            general.averageDepthOfFertileEarth = 0.4
            general.quantitOfM3ExcavatorPerHour = 70
            general.HgAuRatio = 2.6
            general.percentLossHgInWater_convervative = 0.075
            general.percentLossHgInWater = 0.35
            general.percentLossHgInWater_ferry__convervative = 0.155
            general.percentLossHgInWater_ferry = 0.28
            general.methyladPercent_conservative = 0.11
            general.methyladPercent = 0.22
            general.ruralIndividualWeight = 55.97
            general.urbanindividualWeight = 55.97
            general.levelMediumContaminationFish = 0.55
            general.AverageFishConsumptionPerDayInRuralGrams = 183
            general.consumptionMediumFishByDayInGramsUrban = 36
            general.densityPopulationalRegionNorth2060 = 5.2
            general.aDALYUSD = 18360.7
            general.excavatorHoursDays = 10
            general.excavatorCostPerKMUSD = 0.77
            general.hollowMediumDepth = 100
            general.cavaAverageProductivity = 0.141
            general.prodGoldMonthFerry = 229.4

            bioprospecting.bioprospectingCostByUSD_conservative = 13.63
            bioprospecting.bioprospectingCostByUSD = 23.39
            bioprospecting.discountRate = 0.03

            carbon.carbonCostPerHaUSD = 259.73

            recoverOfTopSoll.hectare = 0.31
            recoverOfTopSoll.soilSurfaceRecPerHa_conservative = 933.19
            recoverOfTopSoll.soilSurfaceRecPerHa = 2536.63
            recoverOfTopSoll.capacityLoadTruckNumberOfSeedlings = 1500
            recoverOfTopSoll.superficialSeedlingsPerHa = 1111
            recoverOfTopSoll.transportCostChangesPerKm = 0.32

            erosionSiltingUp.siltingUpCostPerHaUSD = 13.28

            dredgingAndRiverSediments.prodMediaCava = 100
            dredgingAndRiverSediments.dredgingCostPerM3 = 7.51
            dredgingAndRiverSediments.prodOuroKgporMes = 0.2294
            dredgingAndRiverSediments.averageMotorPower = 250
            dredgingAndRiverSediments.productionSedimentTurnsFeatherTonnesPerMonth = 37.82
            dredgingAndRiverSediments.equivalentErosionTonPerHaPerYear = 12.54
            dredgingAndRiverSediments.erosionControlUSD = 13.28
            dredgingAndRiverSediments.productionSedimentTurnsFeatherTonnesPerMonthGold = 6.262
            dredgingAndRiverSediments.siltingPercentage = 0.15
            dredgingAndRiverSediments.theAmountOfSedimentPer1DredgeM3PerHour = 250
            dredgingAndRiverSediments.transportCost1DredgeUSD = 0.73

            cavaGroundingCostAuNorm.normalCavaGroundingCostUSD = 0.2
            

            cavaGroundingCostAuFertile.groundingCostFertilePitUSD = 2.86

            lossQI.birthRate = 17.55
            

            neuroSymptomsGarimpeiro.amountOfGoldminersYear = 384
            neuroSymptomsGarimpeiro.neuroTreatmentCostPerGoldMinerUSD = 534

            heartAttack.proMenOver40ByPopTotal = 0.1732
            heartAttack.accumulatedRiskMercuryInfarction = 0.0161
            heartAttack.annualInfarctTreatmentCostUSD = 6191.55

            hypertension.AnnualHypertensionCostTreatamentUSD = 96.15
            hypertension.propOfPeopleOver20YearsOfAgeByTotalPop = 0.6782
            hypertension.accumulatedRiskMercuryHypertension = 0.0121

            soilMercuryRemediation.lossPercentHgInSoil = 0.088
            soilMercuryRemediation.HgContainedSoilinGrassPerTon  = 0.02
            soilMercuryRemediation.DensidadeSolo = 2.76
            soilMercuryRemediation.remediationCostUSDPerTonOfSoil = 45.67

            woodAndNonWoodProducts.costPMNMPerHaYearUSD = 93.83
            woodAndNonWoodProducts.discountRate = 0.03
            

        }else if(isEquador) {
            general.GDPperCapitaBrazilUSD = 5600.39
            general.celciusTemperature = 24.5
            general.kmRotatedPerLiter = 2.86
            general.densityGold = 2.76
            general.excavationGoldLoss = 2
            general.priceLiterDieselUSD = 0.502
            general.averageDriverSalaryFreightPerKmUSD = 0.28
            general.quantityOfGoldGramsPerYearWell = 18000
            general.averageDepthOfFertileEarth = 0.4
            general.quantitOfM3ExcavatorPerHour = 160
            general.HgAuRatio = 7.2
            general.percentLossHgInWater_convervative = 0.075
            general.percentLossHgInWater = 0.2
            general.percentLossHgInWater_ferry__convervative = 0.155
            general.percentLossHgInWater_ferry = 0.28
            general.methyladPercent_conservative = 0.11
            general.methyladPercent = 0.22
            general.ruralIndividualWeight = 59.75
            general.urbanindividualWeight = 70
            general.levelMediumContaminationFish = 0.36
            general.AverageFishConsumptionPerDayInRuralGrams = 183
            general.consumptionMediumFishByDayInGramsUrban = 23.33
            general.densityPopulationalRegionNorth2060 = 6.2
            general.aDALYUSD = 16801.17
            general.excavatorHoursDays = 10
            general.excavatorCostPerKMUSD = 0.76
            general.hollowMediumDepth = 10
            general.cavaAverageProductivity = 0.4
            general.prodGoldMonthFerry = 302

            bioprospecting.bioprospectingCostByUSD_conservative = 13.63
            bioprospecting.bioprospectingCostByUSD = 23.39
            bioprospecting.discountRate = 0.03
            
            carbon.carbonCostPerHaUSD = 113.39

            recoverOfTopSoll.hectare = 0.31
            recoverOfTopSoll.soilSurfaceRecPerHa_conservative = 933.19
            recoverOfTopSoll.soilSurfaceRecPerHa = 3134
            recoverOfTopSoll.capacityLoadTruckNumberOfSeedlings = 1500
            recoverOfTopSoll.superficialSeedlingsPerHa = 1111
            recoverOfTopSoll.transportCostChangesPerKm = 0.32

            erosionSiltingUp.siltingUpCostPerHaUSD = 13.28

            dredgingAndRiverSediments.prodMediaCava = 10
            dredgingAndRiverSediments.dredgingCostPerM3 = 7.51
            dredgingAndRiverSediments.prodOuroKgporMes = 0.00604
            dredgingAndRiverSediments.averageMotorPower = 54.4
            dredgingAndRiverSediments.productionSedimentTurnsFeatherTonnesPerMonth = 37.82
            dredgingAndRiverSediments.equivalentErosionTonPerHaPerYear = 12.54
            dredgingAndRiverSediments.erosionControlUSD = 13.28
            dredgingAndRiverSediments.productionSedimentTurnsFeatherTonnesPerMonthGold = 6.262
            dredgingAndRiverSediments.siltingPercentage = 0.15
            dredgingAndRiverSediments.theAmountOfSedimentPer1DredgeM3PerHour = 300
            dredgingAndRiverSediments.transportCost1DredgeUSD = 0.76

            cavaGroundingCostAuNorm.normalCavaGroundingCostUSD = 0.2

            cavaGroundingCostAuFertile.groundingCostFertilePitUSD = 2.54

            lossQI.birthRate = 19.19
            

            neuroSymptomsGarimpeiro.amountOfGoldminersYear = 1464.28
            neuroSymptomsGarimpeiro.neuroTreatmentCostPerGoldMinerUSD = 5921.7

            heartAttack.proMenOver40ByPopTotal = 0.2204
            heartAttack.accumulatedRiskMercuryInfarction = 0.0161
            heartAttack.annualInfarctTreatmentCostUSD = 8139.05

            hypertension.AnnualHypertensionCostTreatamentUSD = 1296.43
            hypertension.propOfPeopleOver20YearsOfAgeByTotalPop = 0.5075
            hypertension.accumulatedRiskMercuryHypertension = 0.0121

            soilMercuryRemediation.lossPercentHgInSoil = 0.088
            soilMercuryRemediation.HgContainedSoilinGrassPerTon = 0.19
            soilMercuryRemediation.DensidadeSolo = 2.76
            soilMercuryRemediation.remediationCostUSDPerTonOfSoil = 45.67

            woodAndNonWoodProducts.costPMNMPerHaYearUSD = 484.84
            woodAndNonWoodProducts.discountRate = 0.03
            

        
        }else if(isColombia) {
            general.GDPperCapitaBrazilUSD = 5334.6
            general.celciusTemperature = 26.3
            general.kmRotatedPerLiter = 3.17
            general.excavationGoldLoss = 2
            general.priceLiterDieselUSD = 0.75
            general.densityGold = 2.76
            general.averageDriverSalaryFreightPerKmUSD = 0.14
            general.quantityOfGoldGramsPerYearWell = 3456
            general.averageDepthOfFertileEarth = 0.4
            general.quantitOfM3ExcavatorPerHour = 64
            general.HgAuRatio = 2.33
            general.percentLossHgInWater_convervative = 0.09
            general.percentLossHgInWater = 0.2
            general.percentLossHgInWater_ferry__convervative = 0.17
            general.percentLossHgInWater_ferry = 0.28
            general.methyladPercent_conservative = 0.11
            general.methyladPercent = 0.22
            general.ruralIndividualWeight = 65.25
            general.urbanindividualWeight = 69.14
            general.levelMediumContaminationFish = 0.49
            general.AverageFishConsumptionPerDayInRuralGrams = 89.55
            general.consumptionMediumFishByDayInGramsUrban = 9.35
            general.densityPopulationalRegionNorth2060 = 2.59
            general.excavatorHoursDays = 10
            general.excavatorCostPerKMUSD = 0.76
            general.hollowMediumDepth = 10
            general.cavaAverageProductivity = 0.20
            general.prodGoldMonthFerry = 852

            bioprospecting.bioprospectingCostByUSD_conservative = 13.63
            bioprospecting.bioprospectingCostByUSD = 23.39
            bioprospecting.discountRate = 0.03

            carbon.carbonCostPerHaUSD = 277.53

            recoverOfTopSoll.hectare = 0.31
            recoverOfTopSoll.soilSurfaceRecPerHa_conservative = 1771
            recoverOfTopSoll.soilSurfaceRecPerHa = 4833
            recoverOfTopSoll.capacityLoadTruckNumberOfSeedlings = 2700
            recoverOfTopSoll.superficialSeedlingsPerHa = 1100
            recoverOfTopSoll.transportCostChangesPerKm = 0.32

            erosionSiltingUp.siltingUpCostPerHaUSD = 13.28

            dredgingAndRiverSediments.prodMediaCava = 10
            dredgingAndRiverSediments.dredgingCostPerM3 = 7.51
            dredgingAndRiverSediments.prodOuroKgporMes = 0.0011
            dredgingAndRiverSediments.averageMotorPower = 147
            dredgingAndRiverSediments.productionSedimentTurnsFeatherTonnesPerMonth = 37.82
            dredgingAndRiverSediments.equivalentErosionTonPerHaPerYear = 12.54
            dredgingAndRiverSediments.erosionControlUSD = 13.28
            dredgingAndRiverSediments.productionSedimentTurnsFeatherTonnesPerMonthGold = 6.262
            dredgingAndRiverSediments.siltingPercentage = 0.15
            dredgingAndRiverSediments.theAmountOfSedimentPer1DredgeM3PerHour = 20
            dredgingAndRiverSediments.transportCost1DredgeUSD = 0.76

            cavaGroundingCostAuNorm.normalCavaGroundingCostUSD = 0.2
            cavaGroundingCostAuFertile.groundingCostFertilePitUSD = 1.55

            lossQI.birthRate = 14.7
            lossQI.aDALYUSD = 16003.8
            

            neuroSymptomsGarimpeiro.amountOfGoldminersYear = 150.45
            neuroSymptomsGarimpeiro.neuroTreatmentCostPerGoldMinerUSD = 49

            heartAttack.proMenOver40ByPopTotal = 0.2564
            heartAttack.accumulatedRiskMercuryInfarction = 0.0161
            heartAttack.annualInfarctTreatmentCostUSD = 1509.40

            hypertension.AnnualHypertensionCostTreatamentUSD = 5896.29
            hypertension.propOfPeopleOver20YearsOfAgeByTotalPop = 0.67
            hypertension.accumulatedRiskMercuryHypertension = 0.0121

            soilMercuryRemediation.lossPercentHgInSoil = 0.088
            soilMercuryRemediation.HgContainedSoilinGrassPerTon  = 0.44
            soilMercuryRemediation.DensidadeSolo = 2.76
            soilMercuryRemediation.remediationCostUSDPerTonOfSoil = 45.67

            woodAndNonWoodProducts.costPMNMPerHaYearUSD = 119.81
            woodAndNonWoodProducts.discountRate = 0.03

        }

        fixedValues = {
            bioprospecting,
            woodAndNonWoodProducts,
            carbon,
            cavaGroundingCostAuFertile,
            cavaGroundingCostAuNorm,
            dredgingAndRiverSediments,
            erosionSiltingUp,
            general,
            heartAttack,
            hypertension,
            lossQI,
            neuroSymptomsGarimpeiro,
            recoverOfTopSoll,
            soilMercuryRemediation
        }

        return fixedValues

}

export default fixedCalcultions