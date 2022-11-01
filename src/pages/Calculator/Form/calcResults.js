import { BRAZIL, countries_region } from "components/CountrySelect"
import fixedCalcultions from "hooks/fixedCalculations"
import { stateTypes } from "utils/AppContext"
import calculateInflation from "utils/calculateInflation"
import convertAllinGold from "utils/convertAllinGold"
import convertAllinHectare from "utils/convertAllinHectare"
import getValueToCountry from "utils/getValueToCountry"
import goldToHecatere from "utils/GoldToHectare"
import hectareToGold, { goldenGramForHectare } from "utils/hectareToGold"
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
import { AMOUNT_GOLD, CATEGORY_DEFORESTATION, CATEGORY_MERCURY, CATEGORY_SILTING_RIVERS, FERRY, IMPACTED_AREA } from "./consts"

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
    const { calculator, language, country_region } = state
    const {
        knowRegion,
        counties,
        country,
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
        const notMonetary = []
        const { general } = fixedCalcultions(country_region)
        const { densityPopulationalRegionNorth2060, speciesForZero } = general
        const hectareValue = calculator.analysisUnit === AMOUNT_GOLD ? goldToHecatere(Number(qtdAnalysis.value), pitDepth, country_region) : Number(qtdAnalysis.value)
        const goldValue = calculator.analysisUnit === IMPACTED_AREA ? hectareToGold(Number(qtdAnalysis.value), pitDepth, country_region) : Number(qtdAnalysis.value)
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
        const species = knowRegion ? (currentCountry.species <= 0 ? speciesForZero : currentCountry.species) : speciesForZero;
        // tipo de garimpo = likeMining
        // valor do tipo de garimpo = valueLikeMining
        // tipo de valor do garimpo = typeValueLikeMining

        const goldGrass = convertAllinGold(country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth)
        const { proporcaoKgporHectare, value: hecatereGrass } = convertAllinHectare(country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth)
        notMonetary.push({label: 'Produção de ouro total', value: goldGrass, measure: 'kg de Au'})
        notMonetary.push({label: 'Kg de ouro por hectare impactado', value: (Math.round((proporcaoKgporHectare/1000)*100)/100), measure: 'kg de Au / ha'})
        notMonetary.push({label: 'Total de hectares impactados', value: (Math.round(hecatereGrass*100)/100), measure: 'ha'})

        const totalBio = bioprospecting(country_region, likeMining, typeValueLikeMining, txPrevalence, hectareValue)
        const totalBioInflation = totalWithInflation(isBrazil, inflation, totalBio)

        impacts.push({ label: language.bioprospecting, displayName: language.bioprospecting, category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalBioInflation, dolarTOReal) })

        const totalCarbon = carbon(country_region, likeMining, typeValueLikeMining, hectareValue)
        const totalCarbonInflation = totalWithInflation(isBrazil, inflation, totalCarbon)

        impacts.push({ label: language.carbon, displayName: language.carbon, category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalCarbonInflation, dolarTOReal) })

        const totalPMNM = woodAndNonWoodProducts(country_region, likeMining, typeValueLikeMining, hectareValue)
        const totalPMNMInflation = totalWithInflation(isBrazil, inflation, totalPMNM)
        impacts.push({ label: language.woodAndNonWoodProducts, displayName: language.woodAndNonWoodProducts_tooltip, category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalPMNMInflation, dolarTOReal) })

        const totalRecreation = recreation(country_region, likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const totalRecreationInflation = totalWithInflation(isBrazil, inflation, totalRecreation)
        impacts.push({ label: language.recreation, displayName: language.recreation, category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalRecreationInflation, dolarTOReal)  })

        const totalCulturedAndSpecies = culturedAndSpecies(country_region, likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const totalCulturedAndSpeciesInflation = totalWithInflation(isBrazil, inflation, totalCulturedAndSpecies)
        impacts.push({ label: language.culturedAndSpecies, displayName: language.culturedAndSpecies, category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalCulturedAndSpeciesInflation, dolarTOReal)  })
        
       
        
        if(valuatioMethod !== FERRY) {
            const { value: totalCavaGroundingCostAuFertile, lossyVolume: lossyVolumeFertile } = cavaGroundingCostAuFertile(country_region,likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceanningCenter, goldValue)
            const totalCavaGroundingCostAuFertileInflation = totalWithInflation(isBrazil, inflation, totalCavaGroundingCostAuFertile)
            notMonetary.push({label: 'Volume de sedimentos movimentado', value: (Math.round(lossyVolumeFertile*100)/100), measure: 'm3'})

            const totalCavaGroundingCostAuNorm = cavaGroundingCostAuNorm(country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceanningCenter, hectareValue)
            const totalCavaGroundingCostAuNormInflation = totalWithInflation(isBrazil, inflation, totalCavaGroundingCostAuNorm)
            const totalFertilNorm = totalCavaGroundingCostAuFertileInflation+totalCavaGroundingCostAuNormInflation
            impacts.push({ label: language.cavaGroundingCostAu, displayName: language.cavaGroundingCostAu, category: CATEGORY_SILTING_RIVERS, value: getValueToCountry(country_region, totalFertilNorm, dolarTOReal) })
        }
        
        const totalRecoveryOfTopsoil = recoveryOfTopsoil(country_region, likeMining, distanceanningCenter, goldValue, gramadeOuroporHe, txPrevalence, typeValueLikeMining)
        const totalRecoveryOfTopsoiInflation = totalWithInflation(isBrazil, inflation, totalRecoveryOfTopsoil)
        impacts.push({ label: language.recoveryOfTopsoil, displayName: language.recoveryOfTopsoil, category: CATEGORY_DEFORESTATION, value: getValueToCountry(country_region, totalRecoveryOfTopsoiInflation, dolarTOReal) })
 
        const totalDredgingAndRiverSediments = dredgingAndRiverSediments(country_region, likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectareValue)
        const totalDredgingAndRiverSedimentsInflation = totalWithInflation(isBrazil, inflation, totalDredgingAndRiverSediments)
        impacts.push({ label: language.dredgingAndRiverSediments, displayName: language.dredgingAndRiverSediments, category: CATEGORY_SILTING_RIVERS, value: getValueToCountry(country_region, totalDredgingAndRiverSedimentsInflation, dolarTOReal) })
        
        const totalErosionSiltingUp = erosionSiltingUp(country_region, likeMining, txPrevalence, typeValueLikeMining, hectareValue)
        const totalErosionSiltingUpInflation = totalWithInflation(isBrazil, inflation, totalErosionSiltingUp)
        impacts.push({ label: language.erosionSiltingUp, displayName: language.erosionSiltingUp, category: CATEGORY_SILTING_RIVERS, value: getValueToCountry(country_region, totalErosionSiltingUpInflation, dolarTOReal) })
    
        if(!retort[0].checked) {
            const { value: totalNeuroSymptomsGarimpeiro, qtdOfMinersAffected } = neuroSymptomsGarimpeiro(country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, goldValue)//gold
            notMonetary.push({label: 'Garimpeiros com risco de desenvolver sintomas neuropsicológicos', value: Math.ceil(qtdOfMinersAffected), measure: 'pessoa(s)'})

            const totalNeuroSymptomsGarimpeiroInflation = totalWithInflation(isBrazil, inflation, totalNeuroSymptomsGarimpeiro)
            impacts.push({ label: language.neuroSymptomsGarimpeiro, displayName: language.neuroSymptomsGarimpeiro, category: CATEGORY_MERCURY, value: getValueToCountry(country_region, totalNeuroSymptomsGarimpeiroInflation, dolarTOReal) })
        }
        
        
        const { value: totalLossQI, concentrationMediaMercuryHair, porcentNascidosVivosPerdaQIAcimaDe2Pts } = lossQI (country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, goldValue, knowRegion)//gold
        notMonetary.push({label: 'Nível de contaminação médio de mercúrio no cabelo pela ingestão de peixes contaminados', value: (Math.round(concentrationMediaMercuryHair*100)/100), measure: 'μg/g'})
        notMonetary.push({label: 'Nascidos vivos com perda de QI maior que 2 pontos', value: ((Math.round(porcentNascidosVivosPerdaQIAcimaDe2Pts*100)/100)*100) , measure: '%'})
        
        const totalLossQIInflation = totalWithInflation(isBrazil, inflation, totalLossQI)
        impacts.push({ label: language.lossQI, displayName: language.lossQI, category: CATEGORY_MERCURY, value: getValueToCountry(country_region, totalLossQIInflation, dolarTOReal) })

        const { value: totalHypertension, peopleAbove20YearsoldInTheRegionIn52Years } = hypertension(country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, goldValue, knowRegion)//gold
        const totalHypertensionInflation = totalWithInflation(isBrazil, inflation, totalHypertension)
        
        const { value: totalHeartAttack, toMethylatedWater, toPopulationAffectedMercuryHair, menOver40InTheRegionIn27Years } = heartAttack(country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, goldValue, knowRegion)//gold
        const totalHeartAttackInflation = totalWithInflation(isBrazil, inflation, totalHeartAttack)
        notMonetary.push({label: 'Quantidade de mercúrio que se transforma em metilmercúrio e entra na cadeia trófica (em gramas)', value: (Math.round(toMethylatedWater*100)/100), measure: 'g de Hg'})
        notMonetary.push({label: 'População potencialmente exposta ao risco', value: Math.ceil(toPopulationAffectedMercuryHair), measure: 'pessoa(s)'})
        notMonetary.push({label: 'População com risco de infarto agudo do miocárdio', value: Math.ceil(menOver40InTheRegionIn27Years), measure: 'pessoa(s)'})
        notMonetary.push({label: 'População com risco de hipertensão arterial', value: Math.ceil(peopleAbove20YearsoldInTheRegionIn52Years), measure: 'pessoa(s)'})

        const totalHeartHypertension = totalHypertensionInflation+totalHeartAttackInflation
        impacts.push({ label: language.HeartHypertesion, displayName: language.HeartHypertesion_tooltip, category: CATEGORY_MERCURY, value: getValueToCountry(country_region, totalHeartHypertension, dolarTOReal) })
        
        const totalsoilMercuryRemediation = soilMercuryRemediation(country_region,likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, goldValue)//gold
        const totalsoilMercuryRemediationInflation = totalWithInflation(isBrazil, inflation, totalsoilMercuryRemediation)
        impacts.push({ label: language.soilMercuryRemediation, displayName: language.soilMercuryRemediation, category: CATEGORY_MERCURY, value: getValueToCountry(country_region, totalsoilMercuryRemediationInflation, dolarTOReal) })

        // eslint-disable-next-line
        const impactsFiltered = likeMining === FERRY ? impacts.filter(function(impact) {
            if(impact.category !== CATEGORY_DEFORESTATION) {
                return impact
            }
        }) : impacts

        // eslint-disable-next-line
        const notMonetaryFiltered = notMonetary.filter(impact => {
            if(impact.value) {
                return impact
            }
        })


        const reducer = ((acc, current) => acc+current.value);
        const totalValue = impactsFiltered.reduce(reducer, 0);
        

        dispatch({ type: stateTypes.SET_NOT_MONETARY, payload: notMonetaryFiltered})
        dispatch({ type: stateTypes.ADD_VALUE, payload: impactsFiltered })
        dispatch({ type: stateTypes.CHANGE_TOTALVALUE, payload: totalValue })
        

        return {
            impacts,
            totalValue
        }
}

export default calcResults