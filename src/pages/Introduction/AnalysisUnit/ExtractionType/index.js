import { ALLUVIUM, FERRY } from 'pages/Calculator/Form/consts'
import { IMPACTED_AREA, AMOUNT_GOLD, YEARS_OF_MINING, MONTHS_OF_MINING } from 'pages/Calculator/Form/consts'
import { ItemType, Title, Paragraphy, Thumbnail } from '../style'
import { Col } from 'react-flexbox-grid'
import Image from 'assets/images/example2.svg'
import React from 'react'

const ExtractionType = ({type, state, translate, handleState}) => {
    if(type === ALLUVIUM) {
        return (
            <>
                <Col xs={6}>
                    <ItemType active={state === IMPACTED_AREA} onClick={() => handleState(IMPACTED_AREA)}>
                    <Title>{translate.analysisUnit.goldMiningSize.headline}</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            {translate.analysisUnit.goldMiningSize.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col xs={6}>
                    <ItemType active={state === AMOUNT_GOLD} onClick={() => handleState(AMOUNT_GOLD)}>
                        <Title>{translate.analysisUnit.goldType.headline}</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            {translate.analysisUnit.goldType.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
            </>
        )
    }else if(type === FERRY) {
        return (
            <>
                <Col xs={6}>
                    <ItemType active={state === MONTHS_OF_MINING} onClick={() => handleState(MONTHS_OF_MINING)}>
                    <Title>{translate.analysisUnit.monthsMining.headline}</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            {translate.analysisUnit.monthsMining.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col xs={6}>
                    <ItemType active={state === AMOUNT_GOLD} onClick={() => handleState(AMOUNT_GOLD)}>
                        <Title>{translate.analysisUnit.goldType.headline}</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            {translate.analysisUnit.goldType.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
            </>
        )
    }else {
        return (
            <>
                <Col xs={6}>
                    <ItemType active={state === YEARS_OF_MINING} onClick={() => handleState(YEARS_OF_MINING)}>
                    <Title>{translate.analysisUnit.yearsMining.headline}</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            {translate.analysisUnit.yearsMining.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
                
                <Col xs={6}>
                    <ItemType active={state === AMOUNT_GOLD} onClick={() => handleState(AMOUNT_GOLD)}>
                        <Title>{translate.analysisUnit.goldType.headline}</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            {translate.analysisUnit.goldType.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
            </>
        )
    }
}

export default ExtractionType