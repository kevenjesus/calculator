import React from 'react'
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, MONTHS_OF_MINING, YEARS_OF_MINING } from '../consts'

const ExtrationTypeOptions = ({value, type, translate}) => {
    if (type === ALLUVIUM) {
        return (
            <>
                <option selected={value === IMPACTED_AREA} value={IMPACTED_AREA}>{translate.analysisUnit.goldMiningSize.headline}</option>
                <option value={AMOUNT_GOLD}>{translate.analysisUnit.goldType.headline}</option>
            </>
        )
    }else if (type === FERRY) {
        return (
            <>
                <option selected={value === MONTHS_OF_MINING} value={MONTHS_OF_MINING}>{translate.analysisUnit.monthsMining.headline}</option>
                <option selected={value === AMOUNT_GOLD} value={AMOUNT_GOLD}>{translate.analysisUnit.goldType.headline}</option>
            </>
        )
    }else {
        return (
            <>
                <option selected={value === YEARS_OF_MINING} value={YEARS_OF_MINING}>{translate.analysisUnit.yearsMining.headline}</option>
                <option selected={value === AMOUNT_GOLD} value={AMOUNT_GOLD}>{translate.analysisUnit.goldType.headline}</option>
            </>
        )
    }
}

export default ExtrationTypeOptions