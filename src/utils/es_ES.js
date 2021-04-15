const es_ES = {
    header: {
        naming: 'calculadora',
        slogan: 'impactos de la minería artesanal de oro',
        linkWebsite: 'ir para el sitio web'
    },
    calculatorForm: {
        commons: {
            yes: 'Sí',
            no: 'No'
        },
        labels: {
            knowRegion: '¿Le gustaría conocer los impactos generales de la extracción de oro o los impactos de una extracción de oro específica? ',
            state: 'Región',
            country: 'Municipio',
            analysisUnit: 'Unidad de análisis',
            pitDepth: 'Profundidad del socavón',
            extractionType: 'Tipo de extracción',
            btnCalulator: 'Calcular impactos'
        },
        values: {
            analysisUnit: {
                impactedArea: 'Tamaño del área impactada',
                amountOfGold: 'Cantidad de oro'
            },
            qtdAnalysisUnit: {
                hactare: 'Hectáreas',
                grams: 'Gramos de oro'
            },
            pitDepth: {
                meters: 'metros'
            },
            extractionType: {
                openPit: 'Aluvial (orilla)',
                boat: 'Balsa (flotante)',
		        pitMine: 'Socavón (subterráneo)'
            },
            valueHypothesis: {
                conservative: 'Conservador (Valores promedio)',
                precautionaryPrinciple: 'Principio de precaución (Valores máximos)' 
            },
            txPrevalence: {
                minimum: 'Mínimo',
                medium: 'Medio',
                maximum: 'Máximo'
            }
        }
        
    },
    loading: {
        text: 'Calculando impactos...'
    },
    impacts: {
        menu: {
            deforestation: 'Deforestación',
            siltingOfRivers: 'Sedimentación de ríos',
            mercuryContamination: 'Contaminación por mercurio',
            monetaryImpacts: 'Impactos Monetarios'
        },
        deforestation: {
            headline: 'Deforestación',
            paragraphy_01: 'La extracción de 1 kg de oro provoca la deforestación de 14 hectáreas, en promedio',
            paragraphy_02: 'La deforestación de estas 14 hectáreas conlleva la pérdida de oportunidades para realizar otras actividades, como la extracción de productos forestales no maderables, el uso recreativo y cultural, y el mantenimiento de los servicios ecosistémicos para la regulación del clima y el control de la erosión'
        },
        siltingOfRivers: {
            headline: 'Sedimentación de ríos',
            paragraphy_01: 'La extracción de 1 kg de oro provoca la erosión y la sedimentación de 150 m³ de suelo, en promedio',
            paragraphy_02: 'La sedimentación de estos 150 m³ provoca la pérdida de oportunidades para realizar otras actividades en los ríos, como el uso del agua para beber, la pesca y el turismo',

        },
        mercuryContamination: {
            headline: 'Contaminación por mercurio',
            paragraphy_01: 'La extracción de 1 kg de oro utiliza 2,6 kg de mercurio, de los cuales el 13% se descargan en los ríos. De los cuales, el 3% se metila, volviéndose aún más tóxico y siendo absorbido por los peces, que pueden migrar hasta 2000 km, contaminando a las personas que se alimentan de ellos. Siendo conservadores, consideramos que el radio de dispersión del mercurio es de 100 km.',
            paragraphy_02: 'Según el nivel de consumo de pescado, un individuo tendrá un aumento promedio del nivel de mercurio de entre 4ug/g y 15ug/g, lo que provocará problemas neuropsicológicos, cognitivos y cardiacos',
        },
        monetaryImpacts: {
            headline: 'Impactos monetarios',
            labels: {
                finalValue: 'Valor total monetario',
                typeText: 'por',
                typeGold: 'gramos de oro',
                typeHectare: 'hectáreas',
                impactCategories: 'Categorías de impacto', 
		impactedsVisualization: 'Visualización del impacto',
                mobileImpactedsVisualization: 'Sólo es posible ver 4 impactos a la vez en el smartphone.'
            },
            values: {
                deforestation: 'Deforestación',
                mercuryImpacts: 'Impactos del mercurio',
                pitOpening: 'Excavación / abertura del socavón',
            }
        },
        buttons: {
            references: 'Hipótesis y referencias',
            next: 'Seguir',
            newCalculation: 'Hacer un nuevo cálculo',
            printReports: 'Imprimir informe'
        }
    }, 

    introduction: {
        buttons: {
            skip: 'Saltar la introducción',
            next: 'Seguir',
            moreContextValue: 'Más información'
        },
        about: {
            headline: 'Introducción',
            text: 'La calculadora de impactos es un resultado de la colaboración entre CSF y MPF, una herramienta analítica y pedagógica que describe los <strong>impactos de la minería ilegal de oro</strong>, sus valores monetarios y el paso a paso para su medición',
        },
        contextValue: {
            headline: 'El valor del impacto depende del contexto',
            paragraphy_01: 'El concepto de "valor" se refiere a la importancia social de una variación de la calidad ambiental en el nivel de bienestar de la población.',
            paragraphy_02: 'Por ejemplo: El valor de un terreno o una casa varía si está en un lugar',
            paragraphy_03: '-Con o sin contaminación',
            paragraphy_04: '-Con o sin una vista',
            paragraphy_05: '-Con o sin ruido',
            paragraphy_06: 'La importancia (el valor) de un impacto depende del contexto en el que se produce',  
            paragraphy_07: '-Cuantas más personas dejen de utilizar un recurso natural, mayor será el valor de su pérdida.',
            paragraphy_08: '-Cuanto más escaso es el recurso natural, mayor es su valor.'       
},
        howUseCalculator: {
            headline: 'Cómo utilizar la calculadora',
            paragraphy_01: "Puedes incluir alguna información sobre el contexto para que la calculadora estime el valor de los impactos con mayor precisión",
            paragraphy_02: 'La ubicación define otras variables como:',
            paragraphy_03: "-Densidad y tamaño de la población afectada",
            paragraphy_04: '-Consumo promedio de pescado',
            paragraphy_05: "-Costo de transporte para la recuperación de zonas", 
            paragraphy_06: 'Tipo de minería',
            paragraphy_07: "Unidad de medida",           
            paragraphy_08: 'Si no tiene información específica, no hay problema, los valores promedios del contexto e impacto se incluirán automáticamente y los resultados y sus explicaciones se generarán en la secuencia'
        },
        introduction: {
            headline: 'Introducción',
            paragraphy_01: 'La minería ilegal en la Amazonía ha crecido en los últimos años, impulsada por el alto precio del oro en el mercado internacional.',            
            paragraphy_02: 'La actividad provoca impactos sobre:',
            impacts: [
                {
                    headline: 'Deforestación',
                    text: 'Se abren zonas para la excavación y para la construcción de infraestructuras como carreteras y pistas de aterrizaje '
                },
                {
                    headline: 'Sedimentación de los ríos',
                    text: 'La abertura de fosas genera erosión y sedimentación, mientras que las balsas generan sedimentación. Como consecuencia, hay un agravamiento de la calidad del agua'
                },
                {
                    headline: 'Contaminación por mercurio',
                    text: 'El mercurio derramado por la minería produce impactos en el medio ambiente y en la salud humana, como síntomas neuropsicológicos, cognitivos y cardiacos '
                }
            ],
            paragraphy_03: 'La calculadora estima los valores de cada uno de estos impactos.', 
            paragraphy_04: 'Los valores dependen del contexto y del tipo de minería.'
        },
        pitDepth: {
            headline: 'Profundidad del socavón',
            paragraphy_01: '¿Cuál es la profundidad promedio de los socavones en la minería? '
        },
        region: {
            headline: 'Región',
            text: 'Las regiones tienen características poblacionales (tamaño, densidad, origen) y ambientales (color y turbidez de los ríos) diferentes',
        },
        extractionType: {
            headline: 'Tipo de extracción',
            values: [
                {
                    type: 'Aluvial',
                    text: 'Extracción de mineral mediante la excavación de pozos abiertos, en general a lo largo de las riberas de los ríos. También conocido como "garimpo de baixão", es el tipo de minería ilegal más común en la Amazonía.'
                },
                {
                    type: 'Balsa (flotante)',
                    text: 'Extracción de mineral mediante el dragado de los lechos de los ríos. Realizado en botes o flotantes, no genera deforestación, pero tiene mayor impacto en términos de contaminación del río por mercurio',
                },
                {
                    type: 'Socavón',
                    text: 'La extracción de mineral a través de túneles subterráneos, tiene un menor impacto en términos de deforestación y erosión, pero también utiliza mercurio en el procesamiento del mineral.'
                }
            ],
            text: 'Si no se especifica el tipo, se considerarán los impactos del tipo de minería más común en la Amazonía, la minería aluvial'
        }
    }

};

export default es_ES;