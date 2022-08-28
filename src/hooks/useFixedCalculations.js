import { BRAZIL, COLOMBIA, countries_region, EQUADOR, PERU } from 'components/CountrySelect'
import { useState, useEffect, useContext } from 'react'
import { AppContext } from 'utils/AppContext'

const useFixedCalcultions = () => {
    const {state} = useContext(AppContext)
    const { country_region } = state
    const [fixedValues, setValues] = useState({
        general: null,
        carbon: null,
        recoverOfTopSoll: null,
        erosionSiltingUp: null,
        dredgingAndRiverSediments: null,
        cavaGroundingCostAuNorm: null,
        cavaGroundingCostAuFertile: null,
        lossQI: null,
        neuroSymptomsGarimpeiro: null,
        heartAttack: null
    })

    useEffect(() => {
        const isPeru = country_region && country_region.country === countries_region[PERU].country
        const isEquador = country_region && country_region.country === countries_region[EQUADOR].country
        const isColombia = country_region && country_region.country === countries_region[COLOMBIA].country

        /************************ 
         * FIXED VALUES, DEFAULT BRAZIL
         ************************/ 

        let general = {
            GDPperCapitaBrazilUSD: 6796.84,
            celciusTemperature: 26.8
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
            averageDriverSalaryFreightPerKm: 0.32,
            kmRotatedPerLiter: 2.5,
            priceLiterDiesel: 0.648,
            averageDriverSalaryFreightPerKm: 0.444

        }
        let erosionSiltingUp = {
            siltingUpCostPerHaUSD: 13.28
        }
        let dredgingAndRiverSediments = {
            dredgingCostPerM3: 5.6,
        }
        let cavaGroundingCostAuNorm = {

        }
        let cavaGroundingCostAuFertile = {

        }
        let lossQI = {

        }
        let neuroSymptomsGarimpeiro = {

        }
        let heartAttack = {

        }

        
        if(isPeru) {

        }else if(isEquador) {

        }else if(isColombia) {

        }
    

    }, [country_region])

    return {
        carbon
    }

}

export default useFixedCalcultions