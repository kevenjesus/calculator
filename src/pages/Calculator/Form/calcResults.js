import { BRAZIL, countries_region } from "components/CountrySelect"
import fixedCalcultions from "hooks/fixedCalculations"
import { stateTypes } from "utils/AppContext"
import calculateInflation from "utils/calculateInflation"
import getValueToCountry from "utils/getValueToCountry"
import goldToHecatere from "utils/GoldToHectare"
import hectareToGold, { goldenGramForHectare } from "utils/hectareToGold"
import ToBRL from "utils/toBRL"
import toUSD from "utils/toUSD"
import bioprospecting from "./calculations/bioprospecting"
import carbon from "./calculations/carbon"
import cavaGroundingCostAuFertile from "./calculations/cavaGroundingCostAuFertile"
import cavaGroundingCostAuNorm from "./calculations/cavaGroundingCostAuNorm"
import culturedAndSpecies from "./calculations/culturedAndSpecies"
import dredgingAndRiverSediments from "./calculations/dredgingAndRiverSediments"
import erosionSiltingUp from "./calculations/erosionSiltingUp"
import heartAttack from "./calculations/heartAttack"
import hypertension from "./calculations/hypertension"
import lossQI from "./calculations/lossQI"
import neuroSymptomsGarimpeiro from "./calculations/neuroSymptomsGarimpeiro"
import recoveryOfTopsoil from "./calculations/recoverOfTopsoil"
import recreation from "./calculations/recreation"
import soilMercuryRemediation from "./calculations/soilMercuryRemediation"
import woodAndNonWoodProducts from "./calculations/woodAndNonWoodProducts"
import { AMOUNT_GOLD, CATEGORY_DEFORESTATION, CATEGORY_MERCURY, CATEGORY_SILTING_RIVERS, IMPACTED_AREA } from "./consts"

const totalWithInflation = (isBrazil, inflation, total) => {
    const inflationNumber = inflation ? Number(inflation.replace(",", ".")) : 0
    if(isBrazil) {
        const valueInflation2020at2021 = calculateInflation(14.58, total)
        const valueInflation = calculateInflation(inflationNumber, total)
        const totalInflation = valueInflation2020at2021+valueInflation+total
        return totalInflation
    }else {
        const valueInflation = calculateInflation(inflationNumber, total)
        const totalInflation = valueInflation+total
        return totalInflation
    }
}


const calcResults = (state, dispatch, dolarTOReal) => {
    const { calculator, country_region } = state
    const {
        knowRegion,
        counties,
        country,
        state: StateCity,
        qtdAnalysis,
        pitDepth,
        txPrevalence,
        retort,
        inflation,
        valuatioMethod } = calculator
        const isBrazil = country_region.country === countries_region[BRAZIL].country

        if(!country) {
            return
        }

        const impacts = []
        const { general } = fixedCalcultions(country_region)
        const { densityPopulationalRegionNorth2060 } = general
        const hectareValue = calculator.analysisUnit === AMOUNT_GOLD ? goldToHecatere(Number(qtdAnalysis.value), pitDepth) : Number(qtdAnalysis.value)
        const goldValue = calculator.analysisUnit === IMPACTED_AREA ? hectareToGold(Number(qtdAnalysis.value), pitDepth) : Number(qtdAnalysis.value)
        const gramadeOuroporHe = goldenGramForHectare(hectareValue, goldValue)
    
        const currentCountry = counties.find(c => c.id === Number(country))
        const likeMining = valuatioMethod // FERRY, PIT or ALLUVION
        const valueLikeMining = qtdAnalysis.value // gold, hactare, months, years
        const typeValueLikeMining = calculator.analysisUnit // AMOUNT_GOLD / IMPACTED_AREA / YEARS_OF_MINING / MONTHS_OF_MINING
        const popDensity2010 = knowRegion ? currentCountry.popDensity2010 : 4.12;
        const popDensity2060 = knowRegion ? currentCountry.popDensity2060  : densityPopulationalRegionNorth2060;
        const urbanPopMunicipality = knowRegion ? currentCountry.urbanPopMunicipality : 0.7353;
        const ruralPopMunicipality = knowRegion ? currentCountry.ruralPopMunicipality : 0.2647;
        const distanceanningCenter = knowRegion ? currentCountry.distanceanningCenter : 212.74;
        const species = knowRegion ? (currentCountry.species <= 0 ? StateCity.species : currentCountry.species) : 69.21;

        // tipo de garimpo = likeMining
        // valor do tipo de garimpo = valueLikeMining
        // tipo de valor do garimpo = typeValueLikeMining

        const totalBio = bioprospecting(country_region, likeMining, typeValueLikeMining, txPrevalence, hectareValue)
        const totalBioInflation = totalWithInflation(isBrazil, inflation, totalBio)

        impacts.push({ label: 'BioProspecção', displayName: 'BioProspecção', category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalBioInflation, dolarTOReal) })

        const totalCarbon = carbon(country_region, likeMining, typeValueLikeMining, hectareValue)
        const totalCarbonInflation = totalWithInflation(isBrazil, inflation, totalCarbon)

        impacts.push({ label: 'Carbono', displayName: 'Carbono', category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalCarbonInflation, dolarTOReal) })

        const totalPMNM = woodAndNonWoodProducts(country_region, likeMining, typeValueLikeMining, hectareValue)
        const totalPMNMInflation = totalWithInflation(isBrazil, inflation, totalPMNM)
        impacts.push({ label: 'PMNM', displayName: 'Produtos não-madeireiros e madeireiros', category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalPMNMInflation, dolarTOReal) })

        const totalRecreation = recreation(country_region, likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const totalRecreationInflation = totalWithInflation(isBrazil, inflation, totalRecreation)
        impacts.push({ label: 'Recreação', displayName: 'Recreação', category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalRecreationInflation, dolarTOReal)  })

        const totalCulturedAndSpecies = culturedAndSpecies(likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const totalCulturedAndSpeciesInflation = totalWithInflation(isBrazil, inflation, totalCulturedAndSpecies)
        impacts.push({ label: 'Espécies', displayName: 'Espécies', category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalCulturedAndSpeciesInflation, dolarTOReal)  })
        
        const totalCavaGroundingCostAuFertile = cavaGroundingCostAuFertile(country_region,likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceanningCenter, goldValue)
        const totalCavaGroundingCostAuFertileInflation = totalWithInflation(isBrazil, inflation, totalCavaGroundingCostAuFertile)

        const totalCavaGroundingCostAuNorm = cavaGroundingCostAuNorm(country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceanningCenter, hectareValue)
        const totalCavaGroundingCostAuNormInflation = totalWithInflation(isBrazil, inflation, totalCavaGroundingCostAuNorm)
        const totalFertilNorm = totalCavaGroundingCostAuFertileInflation+totalCavaGroundingCostAuNormInflation
        impacts.push({ label: 'Aterramento de cava', displayName: 'Aterramento de cava', category: CATEGORY_SILTING_RIVERS, value: getValueToCountry(country_region, totalFertilNorm, dolarTOReal) })

        const totalRecoveryOfTopsoil = recoveryOfTopsoil(country_region, likeMining, distanceanningCenter, goldValue, gramadeOuroporHe, txPrevalence, typeValueLikeMining)
        const totalRecoveryOfTopsoiInflation = totalWithInflation(isBrazil, inflation, totalRecoveryOfTopsoil)
        impacts.push({ label: 'Recuperação superficie do solo', displayName: 'Recuperação superficie do solo', category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalRecoveryOfTopsoiInflation, dolarTOReal) })
 
        const totalDredgingAndRiverSediments = dredgingAndRiverSediments(country_region, likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectareValue)
        const totalDredgingAndRiverSedimentsInflation = totalWithInflation(isBrazil, inflation, totalDredgingAndRiverSediments)
        impacts.push({ label: 'Dragagem de sedimentos no rio', displayName: 'Dragagem de sedimentos no rio', category: CATEGORY_SILTING_RIVERS, value: getValueToCountry(country_region, totalDredgingAndRiverSedimentsInflation, dolarTOReal) })
        
        const totalErosionSiltingUp = erosionSiltingUp(country_region, likeMining, txPrevalence, typeValueLikeMining, hectareValue)
        const totalErosionSiltingUpInflation = totalWithInflation(isBrazil, inflation, totalErosionSiltingUp)
        impacts.push({ label: 'Erosão', displayName: 'Erosão', category: CATEGORY_SILTING_RIVERS, value: getValueToCountry(country_region, totalErosionSiltingUpInflation, dolarTOReal) })
    
        if(!retort[0].checked) {
            const totalNeuroSymptomsGarimpeiro = neuroSymptomsGarimpeiro(country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, goldValue)//gold
            const totalNeuroSymptomsGarimpeiroInflation = totalWithInflation(isBrazil, inflation, totalNeuroSymptomsGarimpeiro)
            impacts.push({ label: 'Sintomas neuropsicológicos em garimpeiros', displayName: 'Sintomas neuropsicológicos em garimpeiros', category: CATEGORY_MERCURY, value: getValueToCountry(country_region, totalNeuroSymptomsGarimpeiroInflation, dolarTOReal) })
        }
        
        
        const totalLossQI = lossQI (country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, goldValue, knowRegion)//gold
        const totalLossQIInflation = totalWithInflation(isBrazil, inflation, totalLossQI)
        impacts.push({ label: 'Perda de Qi em Fetos', displayName: 'Perda de Qi em Fetos', category: CATEGORY_MERCURY, value: getValueToCountry(country_region, totalLossQIInflation, dolarTOReal) })

        const totalHypertension = hypertension(country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, goldValue, knowRegion)//gold
        const totalHypertensionInflation = totalWithInflation(isBrazil, inflation, totalHypertension)

        const totalHeartAttack = heartAttack(country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, goldValue, knowRegion)//gold
        const totalHeartAttackInflation = totalWithInflation(isBrazil, inflation, totalHeartAttack)

        const totalHeartHypertension = totalHypertensionInflation+totalHeartAttackInflation
        impacts.push({ label: 'Doenças cardiovasculares', displayName: 'Doenças cardiovasculares (HIPERTENSÃO + INFARTO)', category: CATEGORY_MERCURY, value: getValueToCountry(country_region, totalHeartHypertension, dolarTOReal) })
        
        const totalsoilMercuryRemediation = soilMercuryRemediation(country_region,likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, goldValue)//gold
        const totalsoilMercuryRemediationInflation = totalWithInflation(isBrazil, inflation, totalsoilMercuryRemediation)
        impacts.push({ label: 'Remediação de mercúrio no solo', displayName: 'Remediação de mercúrio no solo', category: CATEGORY_MERCURY, value: getValueToCountry(country_region, totalsoilMercuryRemediationInflation, dolarTOReal) })

        console.log(impacts)
        const reducer = ((acc, current) => acc+current.value);
        const totalValue = impacts.reduce(reducer, 0);

        const totalConverted = isBrazil ? ToBRL(totalValue*dolarTOReal) : toUSD(totalValue)

        

        dispatch({ type: stateTypes.ADD_VALUE, payload: impacts })
        dispatch({ type: stateTypes.CHANGE_TOTALVALUE, payload: totalConverted })
        

        return {
            impacts,
            totalValue
        }
}

export default calcResults