const es_ES = {
    type: 'esES',
    header: {
        naming: 'calculadora',
        slogan: 'impactos de la minería artesanal de oro',
        linkWebsite: 'ir para el sitio web'
    },
    resume: 'Resumen',
    comeBack: 'Volver',
    iDontKnowYet: "No lo conozco",
    defaultValue: "Valor estándar",
    more: 'Más información',
    knowRegionYes: 'Impactos en un lugar específico',
    knowRegionNo: 'Impactos generales promedio',
    iAlreadyKnow: 'Ya lo sé',
    buttonIntroduction: 'Llévame a la guía',
    buttonResumeCalculator: 'Llévame a la versión corta',
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
                grams: 'Gramos de oro',
                months: 'Meses',
                years: 'Anos'
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
            paragraphy_01: 'La extracción de <strong>$grams gramos de oro</strong> provoca la deforestación de <strong>$hectare hectáreas</strong>, en promedio',
            paragraphy_02: 'La deforestación de estas <strong>$hectare hectáreas</strong> conlleva la pérdida de oportunidades para realizar otras actividades, como la extracción de productos forestales no maderables, el uso recreativo y cultural, y el mantenimiento de los servicios ecosistémicos para la regulación del clima y el control de la erosión'
        },
        siltingOfRivers: {
            headline: 'Sedimentación de ríos',
            paragraphy_01: 'La extracción de <strong>$grams gramos de oro</strong> provoca la erosión y la sedimentación de <strong>$volumeM3 m³</strong> de suelo, en promedio',
            paragraphy_02: 'La sedimentación de estos <strong>$volumeM3 m³</strong> provoca la pérdida de oportunidades para realizar otras actividades en los ríos, como el uso del agua para beber, la pesca y el turismo',

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
            text: 'La calculadora de impactos es un resultado de la colaboración entre CSF y MPF, una herramienta analítica y pedagógica que describe los impactos de la minería ilegal de oro, sus valores monetarios y el paso a paso para su medición',
        },
        
        analysisUnit: {
            headline: 'Qual base de informação você usará para o cálculo de impacto?',
            chooseOption: '* Elige una opción',
            goldType: {
                headline: 'Cantidad de oro',
                text: 'Considera el contexto medio de la productividad y el impacto del garimpo en el Amazonas. Se utiliza cuando se produce la aprehensión de oro ilegal sin conocer su origen exacto.'
            },
            goldMiningSize: {
                headline: 'Tamaño del área impactada',
                text: 'El tamaño del garimpo viene dado por la multiplicación de su superficie por la profundidad media de las fosas. Se utiliza cuando se conoce la ubicación de la mina ilegal, con la posibilidad de detallar el contexto con parámetros específicos.'
            },
            yearsMining: {
                headline: 'Años de minería ilegal',
                text: 'La edad del garimpo puede servir de aproximación al tamaño, cantidad de oro extraído y mercurio utilizado'
            },
            monthsMining: {
                headline: 'Meses de minería ilegal',
                text: 'El tiempo de funcionamiento de la balsa puede utilizarse como una aproximación a la cantidad de oro extraído y de mercurio descargado en el medio ambiente'
            },
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
    },
    hypotheses: 'Hipoteses',
    references: 'Referências',
    observation: 'Observações',
    hypothesesReferences: {
        deforestation: {
            headline: 'Deforestación / Hipótesis y referencias',
            bioprospecting: 'bioprospección',
            bio_ref_line1: 'Andersen (1997)',
            bio_ref_line2: 'May et al (2013)',
            bio_ref_line3: 'Groot et al (2012)',
            carbon: 'Carbono',
            carbon_hypotheses: 'Reserva de carbono por hectárea en amoníaco de 347 tCO2/ha',
            carbon_ref_line1: 'World Bank (2020)',
            carbon_ref_line2: 'Fearnside (2018)',
            woodNonwoodProducts: 'Produtos não-madeireiros e madeireiros',
            woodNonwoodProducts_hypotheses_line1: 'El valor de los productos madereros se obtuvo en estudios de concesiones forestales en la Amazonia.',
            woodNonwoodProducts_hypotheses_line2: 'El valor de los productos no madereros se obtuvo del consorcio de café, cacao, guaraná, açaí y plátano',
            woodNonwoodProducts_ref_line1: 'Rodrigues (2016)',
            woodNonwoodProducts_ref_line2: 'CSF (2019)',
            recreation_culture_species: 'Recreação / Cultural / Espécies',
            recreation_culture_species_hypotheses: 'Meta-análisis de que los valores varían según la densidad de población, el PIB per cápita y la riqueza de especies',
            recreation_culture_species_ref: 'Siikamaki et al (2015)',
            recreation_culture_comments_line1: 'La pérdida de bosques  puede medirse a partir del coste de oportunidad, es decir, se observa en la literatura cuál es la rentabilidad media por hectárea para las diferentes actividades que se excluyeron con la deforestación.',
            recreation_culture_comments_line2: 'Todos estos valores se pierden por completo en la minería y pueden recuperarse anualmente. Se supone que estas actividades volverán a ser el 80% de lo que eran en 30 años.',
            superficialSoilRecovery: 'Recuperação da camada superficial do solo',
            superficialSoilRecovery_hypotheses_line1: 'La recuperación de la tierra vegetal tiene como diferentes técnicas aplicadas como la aplicación de la siembra directa. ',
            superficialSoilRecovery_hypotheses_line2: 'El impacto de la deforestación causada por el garimpo puede generar una extensión de hasta 12 veces más para la construcción de pistas de aterrizaje, carreteras, etc.',
            superficialSoilRecovery_hypotheses_line3: 'Supongamos que dicha recuperación se realiza en 1 año.',
            superficialSoilRecovery_hypotheses_line4: 'El coste del transporte de mudas se considera en función de la distancia media de los puntos de extracción en los municipios (RAISG e IBAMA) y de la ubicación de los centros urbanos.',
            superficialSoilRecovery_ref_line1: 'IBAMA (2019)',
            superficialSoilRecovery_ref_line2: 'Sonter et al (2017)',
            superficialSoilRecovery_ref_line3: 'RAISG – Rede Amazônica de informação Socioambiental',
            superficialSoilRecovery_ref_line4: 'IBGE (2015)',
            superficialSoilRecovery_comments: 'Uno de los primeros impactos de la minería es la pérdida de la cobertura forestal en la zona superficial, que posteriormente hay que recuperar.',
        },
        siltingOfRivers: {
            headline: 'Sedimentación de los ríos / Hipótesis y referenciasSiltation of rivers / Hypotheses and references',
            erosion_Silting: 'Erosión - Sedimentación',
            erosion_Silting_hypotheses_line1: 'Los estudios demuestran la importancia monetaria del control de la erosión por hectárea que se perdió por la minería.',
            erosion_Silting_hypotheses_line2: 'Estos valores se pierden por completo en la minería y pueden recuperarse anualmente. Se supone que estas actividades volverán a ser el 80% de lo que eran en 30 años.',
            erosion_Silting_ref_line1: 'De Groot et al (2012)',
            erosion_Silting_ref_line2: 'Constanza et al (1997)',
            erosion_Silting_comments: 'La presencia de la minería puede tener impactos significativos en la capa profunda del suelo, afectando a los servicios del ecosistema como el control de la erosión.',
            dredging_sediments_in_the_river: 'Dragado de sedimentos en el río',
            dredging_hypotheses_line1: 'Se supone que el 15% de los sedimentos movidos por la minería aluvial se dirigen a los ríos y necesitan ser dragados. Utiliza como referencia un estudio que calcula el coste de una draga de succión entre 8" y 12" (pulgadas)',
            dredging_ref_line1: 'Costa (2016)',
            soil_stabilization: 'Estabilización del suelo',
            soil_stabilization_hypotheses_line1: 'La capa profunda del suelo se divide en un estrato fértil (40 cm) y el resto como tierra que tiene diferentes costes de transporte para el relleno.',
            soil_stabilization_hypotheses_line2: 'Una retroexcavadora tiene capacidad para mover 160 m³ por hora',
            soil_stabilization_hypotheses_line3: 'Una draga tiene capacidad para mover 300 m³ por hora',
            soil_stabilization_ref_line1: 'CID PUCESE (2011)',
            soil_stabilization_ref_line2: 'Tonietto & Silva, (2011)',
            soil_stabilization_ref_line3: 'Polícia Federal (2018)',
            soil_stabilization_ref_line4: 'Cardoso, (2002)',
            soil_stabilization_dredging_sediments_comments_line1: 'Se supone que la recuperación se realiza en 1 año.',
            soil_stabilization_dredging_sediments_comments_line2: 'Para el cálculo del sedimento medio movido se realizó una revisión de la literatura sobre las productividades mineras medias.'
        },
        mercury: {
            headline: 'Impactos del mercurio / Hipótesis y referencias',
            loss_QI: 'Pérdida de CI',
            loss_QI_hypotheses_line1: '2,6 kg de mercurio utilizados para la extracción de 1 kg de oro',
            loss_QI_hypotheses_line2: 'Proporción de mercurio liberado y emitido en el agua y los sedimentos entre el 12% y el 22%.',
            loss_QI_hypotheses_line3: 'La proporción de mercurio que se transforma en metilmercurio (metilación), según la literatura, varía entre el 3% y el 22%.',
            loss_QI_hypotheses_line4: 'La ingesta media diaria de mercurio se calcula a partir del peso medio de los individuos, el nivel medio de consumo de pescado por día diferenciado por el tipo de población (urbana y rural obtenido por el IBGE).',
            loss_QI_hypotheses_line5: 'Se supone que el impacto del metilmercurio en el agua puede producirse hasta 50 años',
            loss_QI_hypotheses_line6: "Cada 1,0 μg/g de mercurio (MeHg) en el cabello de la madre corresponde a una pérdida de 0,18 puntos de CI en el feto.",
            loss_QI_hypotheses_line7: 'El impacto cardiovascular se divide en infarto de miocardio e hipertensión, y tiene tanto coste de tratamiento como días de discapacidad vividos (AVAD)',
            loss_QI_ref_line1: 'Castilhos & Domingos (2018)',
            loss_QI_ref_line2: 'Vasconcellos (2015)',
            loss_QI_ref_line3: 'Lopez & Cólon, 2010',
            loss_QI_ref_line4: 'Lino et al, 2019',
            loss_QI_ref_line5: 'Codex Alimentarius (1995)',
            loss_QI_ref_line6: 'Hacon et al, (2020)',
            loss_QI_ref_line7: 'Fiocruz, 2020',
            loss_QI_ref_line8: 'Bisinoti e Jardim, (2004)',
            loss_QI_ref_line9: 'Salonen et al (1995)',
            loss_QI_ref_line10: 'Hu et al (2018)',
            loss_QI_comments_line1: 'El uso de mercurio en la minería provoca la contaminación del suelo, el aire y el agua, causando problemas a la salud humana.',
            loss_QI_comments_line2: 'Una de las formas de cuantificar el impacto es por los problemas de salud generados por la contaminación del agua y el aumento del riesgo de enfermedades relacionadas con la ingestión de pescado.',
            neuropsychological_symptoms_in_garimpeiros: 'Síntomas neuropsicológicos en los mineros del oro',
            neuroSymptoms_hypotheses_line1: 'Nuestra hipótesis es que un minero medio extrae 150 gramos de oro en un año.',
            neuroSymptoms_hypotheses_line2: 'Probabilidad/proporción de mineros con síntomas neuropsicológicos del 72%.',
            neuroSymptoms_hypotheses_line3: 'Los síntomas neuropsicológicos se valoran tanto por el coste del tratamiento de estos síntomas como por la pérdida de bienestar que genera vivir con dicha discapacidad (DALY).',
            neuroSymptoms_ref_line1: 'Steckling et al (2014)',
            neuroSymptoms_ref_line2: 'Steckling et al (2019)',
            neuroSymptoms_comments_line1: 'Nuestra hipótesis es que un minero medio extrae 150 gramos de oro en un año.',
            neuroSymptoms_comments_line2: 'Probabilidad/proporción de mineros con síntomas neuropsicológicos del 72%.',
            soil_mercury_remediation: 'Remediación del mercurio en el suelo',
            soil_mercury_hypotheses_line1: 'Se supone que la biorremediación, a partir de la plantación de mudas de especies capaces de absorber el mercurio en el suelo, sería la alternativa más aplicable al contexto amazónico para remediar el impacto de la minería.',
            soil_mercury_hypotheses_line2: 'La hipótesis es que la concentración media de mercurio en los suelos es de 0,24 gramos de oro por tonelada de sedimento.',
            soil_mercury_ref_line1: 'Miranda (2019) Kahhat et al (2019)',
            soil_mercury_comments_line1: 'Se supone que la biorremediación, a partir de la plantación de mudas de especies capaces de absorber el mercurio en el suelo, sería la alternativa más aplicable al contexto amazónico para remediar el impacto de la minería.',
            soil_mercury_comments_line2: 'La hipótesis es que la concentración media de mercurio en los suelos es de 0,24 gramos de oro por tonelada de sedimento.',
        }
    }

};

export default es_ES;