'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('processes', [{    
      description: '(GC/ECD)/(GC/MS/MS SCREEN)',
      active: 1,
    },
    {
      description: '42406.015-4',
      active: 1,
    },
    {
      description: 'ACH-157',
      active: 1,
    },
    {
      description: 'ACH-158',
      active: 1,
    },
    {
      description: 'AOAC 2002.11',
      active: 1,
    },
    {
      description: 'AOAC 923.03',
      active: 1,
    },
    {
      description: 'AOAC 925.10',
      active: 1,
    },
    {
      description: 'AOAC 938.06',
      active: 1,
    },
    {
      description: 'AOAC 950.54',
      active: 1,
    },
    {
      description: 'AOAC 958.01',
      active: 1,
    },
    {
      description: 'AOAC 960.29',
      active: 1,
    },
    {
      description: 'AOAC 981.12',
      active: 1,
    },
    {
      description: 'AOAC 989.10',
      active: 1,
    },
    {
      description: 'AOAC 989.14',
      active: 1,
    },
    {
      description: 'AOAC 997.02',
      active: 1,
    },
    {
      description: 'AOAC 998.09',
      active: 1,
    },
    {
      description: 'AOAC OMA 2003.01',
      active: 1,
    },
    {
      description: 'AOAC OMA 2003.07',
      active: 1,
    },
    {
      description: 'AOAC OMA 2003.08',
      active: 1,
    },
    {
      description: 'AOAC OMA 2014.05',
      active: 1,
    },
    {
      description: 'AOAC OMA 2015.13',
      active: 1,
    },
    {
      description: 'AOAC OMA 2016.01',
      active: 1,
    },
    {
      description: 'AOAC OMA 2016.08',
      active: 1,
    },
    {
      description: 'AOAC OMA 2018.13',
      active: 1,
    },
    {
      description: 'AOAC OMA 990.12',
      active: 1,
    },
    {
      description: 'AOAC OMA 991.14',
      active: 1,
    },
    {
      description: 'AOAC PTM 121301',
      active: 1,
    },
    {
      description: 'AOCS Ah 1-72',
      active: 1,
    },
    {
      description: 'AOCS Ba 3-38',
      active: 1,
    },
    {
      description: 'AOCS Bc-3-49',
      active: 1,
    },
    {
      description: 'AOCS Bc-5a-49',
      active: 1,
    },
    {
      description: 'AOCS Ca 6c-65',
      active: 1,
    },
    {
      description: 'AOCS Ca-11-55',
      active: 1,
    },
    {
      description: 'AOCS Ca-12-55',
      active: 1,
    },
    {
      description: 'AOCS Ca-17-01',
      active: 1,
    },
    {
      description: 'AOCS Ca-2b-38',
      active: 1,
    },
    {
      description: 'AOCS Ca-2b-38/Ca-3a-46',
      active: 1,
    },
    {
      description: 'AOCS Ca-2b-38/Ca-6a-40',
      active: 1,
    },
    {
      description: 'AOCS Ca-2c-25',
      active: 1,
    },
    {
      description: 'AOCS Ca-2e-84',
      active: 1,
    },
    {
      description: 'AOCS Ca-3a-46',
      active: 1,
    },
    {
      description: 'AOCS Ca-5a-40',
      active: 1,
    },
    {
      description: 'AOCS Ca-6a-40',
      active: 1,
    },
    {
      description: 'AOCS Ca-6b-53',
      active: 1,
    },
    {
      description: 'AOCS Ca-9a-52',
      active: 1,
    },
    {
      description: 'AOCS Ca-9f-57',
      active: 1,
    },
    {
      description: 'AOCS Cc-03-25',
      active: 1,
    },
    {
      description: 'AOCS Cc-06-25',
      active: 1,
    },
    {
      description: 'AOCS Cc-10a-25',
      active: 1,
    },
    {
      description: 'AOCS Cc-10b-25',
      active: 1,
    },
    {
      description: 'AOCS Cc-11-53',
      active: 1,
    },
    {
      description: 'AOCS Cc-11-54',
      active: 1,
    },
    {
      description: 'AOCS Cc-12-59',
      active: 1,
    },
    {
      description: 'AOCS Cc-13d-55',
      active: 1,
    },
    {
      description: 'AOCS Cc-13e-92',
      active: 1,
    },
    {
      description: 'AOCS Cc-13g-94',
      active: 1,
    },
    {
      description: 'AOCS Cc-13j-97',
      active: 1,
    },
    {
      description: 'AOCS Cc-16-60',
      active: 1,
    },
    {
      description: 'AOCS Cc-17-95',
      active: 1,
    },
    {
      description: 'AOCS Cc-7-25',
      active: 1,
    },
    {
      description: 'AOCS Cc-9a-48',
      active: 1,
    },
    {
      description: 'AOCS Cc-9b-55 / Cc-9c-95',
      active: 1,
    },
    {
      description: 'AOCS Cd 21-91',
      active: 1,
    },
    {
      description: 'AOCS Cd 26-96',
      active: 1,
    },
    {
      description: 'AOCS Cd-01-25',
      active: 1,
    },
    {
      description: 'AOCS Cd-03-25',
      active: 1,
    },
    {
      description: 'AOCS Cd-08-53',
      active: 1,
    },
    {
      description: 'AOCS Cd-11b-91',
      active: 1,
    },
    {
      description: 'AOCS Cd-12b-92',
      active: 1,
    },
    {
      description: 'AOCS Cd-16b-93',
      active: 1,
    },
    {
      description: 'AOCS Cd-18-50',
      active: 1,
    },
    {
      description: 'AOCS Cd-18-90',
      active: 1,
    },
    {
      description: 'AOCS Cd-1d-92',
      active: 1,
    },
    {
      description: 'AOCS Cd-8b-90',
      active: 1,
    },
    {
      description: 'AOCS Ce 1b-89',
      active: 1,
    },
    {
      description: 'AOCS Ce-1-62',
      active: 1,
    },
    {
      description: 'AOCS Ce1c-89',
      active: 1,
    },
    {
      description: 'AOCS Ce-1h-05',
      active: 1,
    },
    {
      description: 'AOCS Ce-1h-07',
      active: 1,
    },
    {
      description: 'AOCS Ce-6-69',
      active: 1,
    },
    {
      description: 'AOCS Ce-6-86',
      active: 1,
    },
    {
      description: 'AOCS Ch-06-91',
      active: 1,
    },
    {
      description: 'AOCS Ch-5-91',
      active: 1,
    },
    {
      description: 'AOCS Cj-03-99',
      active: 1,
    },
    {
      description: 'AOCS Da-08-48',
      active: 1,
    },
    {
      description: 'AOCS Da-09-48',
      active: 1,
    },
    {
      description: 'AOCS Da-13-48',
      active: 1,
    },
    {
      description: 'AOCS Da-14-48',
      active: 1,
    },
    {
      description: 'AOCS Da-23-56',
      active: 1,
    },
    {
      description: 'AOCS Da-2a-48',
      active: 1,
    },
    {
      description: 'AOCS Da-4a-48',
      active: 1,
    },
    {
      description: 'AOCS Dd-4-60',
      active: 1,
    },
    {
      description: 'AOCS Ea 8-58',
      active: 1,
    },
    {
      description: 'AOCS Ea-6-51',
      active: 1,
    },
    {
      description: 'AOCS Ea-7-95',
      active: 1,
    },
    {
      description: 'AOCS G-03-53',
      active: 1,
    },
    {
      description: 'AOCS G-03-53 (Modificado)',
      active: 1,
    },
    {
      description: 'AOCS G-07-56',
      active: 1,
    },
    {
      description: 'AOCS Gc-06-40',
      active: 1,
    },
    {
      description: 'AOCS Ja-10-87',
      active: 1,
    },
    {
      description: 'AOCS K-12-55',
      active: 1,
    },
    {
      description: 'APHA 4500-Si E y DIN 38 405 D21',
      active: 1,
    },
    {
      description: 'ASTM 1126-92',
      active: 1,
    },
    {
      description: 'ASTM D 2063 2012',
      active: 1,
    },
    {
      description: 'ASTM D 2732',
      active: 1,
    },
    {
      description: 'ASTM D 4541',
      active: 1,
    },
    {
      description: 'ASTM D-1160',
      active: 1,
    },
    {
      description: 'ASTM D-1298',
      active: 1,
    },
    {
      description: 'ASTM D-130',
      active: 1,
    },
    {
      description: 'ASTM D-1709',
      active: 1,
    },
    {
      description: 'ASTM D1894',
      active: 1,
    },
    {
      description: 'ASTM D2500',
      active: 1,
    },
    {
      description: 'ASTM D2709',
      active: 1,
    },
    {
      description: 'ASTM D279-02',
      active: 1,
    },
    {
      description: 'ASTM D287-82',
      active: 1,
    },
    {
      description: 'ASTM D2911',
      active: 1,
    },
    {
      description: 'ASTM D2911M - 16',
      active: 1,
    },
    {
      description: 'ASTM D3078',
      active: 1,
    },
    {
      description: 'ASTM D3330',
      active: 1,
    },
    {
      description: 'ASTM D3359-02',
      active: 1,
    },
    {
      description: 'ASTM D3774-18',
      active: 1,
    },
    {
      description: 'ASTM D3776',
      active: 1,
    },
    {
      description: 'ASTM D3808-01',
      active: 1,
    },
    {
      description: 'ASTM D3985',
      active: 1,
    },
    {
      description: 'ASTM D-445',
      active: 1,
    },
    {
      description: 'ASTM D-4530 / D-189',
      active: 1,
    },
    {
      description: 'ASTM D-4951',
      active: 1,
    },
    {
      description: 'ASTM D-5453 / D-2622 / D-4294',
      active: 1,
    },
    {
      description: 'ASTM D613',
      active: 1,
    },
    {
      description: 'ASTM D-6371',
      active: 1,
    },
    {
      description: 'ASTM D-6584',
      active: 1,
    },
    {
      description: 'ASTM D664',
      active: 1,
    },
    {
      description: 'ASTM D-7501',
      active: 1,
    },
    {
      description: 'ASTM D-874',
      active: 1,
    },
    {
      description: 'ASTM D882',
      active: 1,
    },
    {
      description: 'ASTM D-93',
      active: 1,
    },
    {
      description: 'ASTM F1249',
      active: 1,
    },
    {
      description: 'ASTM F1249 10',
      active: 1,
    },
    {
      description: 'ASTM F1319',
      active: 1,
    },
    {
      description: 'ASTM F2100-11',
      active: 1,
    },
    {
      description: 'ASTM F904-98',
      active: 1,
    },
    {
      description: 'ASTMD 374',
      active: 1,
    },
    {
      description: 'ASTMD 4321',
      active: 1,
    },
    {
      description: 'BALANZA HALOGENA',
      active: 1,
    },
    {
      description: 'BAM FDA',
      active: 1,
    },
    {
      description: 'CALCULO',
      active: 1,
    },
    {
      description: 'CENTRIFUGA',
      active: 1,
    },
    {
      description: 'CLOROX COLOMBIA - 132734',
      active: 1,
    },
    {
      description: 'CLOROX COLOMBIA - 132735',
      active: 1,
    },
    {
      description: 'CLOROX COLOMBIA - 42001.003-3',
      active: 1,
    },
    {
      description: 'CLOROX COLOMBIA - 42001.020-1',
      active: 1,
    },
    {
      description: 'CLOROX COLOMBIA - 42406.015-4',
      active: 1,
    },
    {
      description: 'CLOROX COLOMBIA - 42407.003-9',
      active: 1,
    },
    {
      description: 'CLOROX COLOMBIA - T-SGC-001-4',
      active: 1,
    },
    {
      description: 'CLOROX COLOMBIA - T-TSO-006-1',
      active: 1,
    },
    {
      description: 'CMMEF 5th ed ch. 23',
      active: 1,
    },
    {
      description: 'COA PRODUCTOS TERCEROS',
      active: 1,
    },
    {
      description: 'COA PROVEEDOR',
      active: 1,
    },
    {
      description: 'COI/T.15/NC NO 3',
      active: 1,
    },
    {
      description: 'COI/T.20/Doc. No 19/Rev. 5 2019',
      active: 1,
    },
    {
      description: 'COLORIMETRIA',
      active: 1,
    },
    {
      description: 'CONSISTOMETRO BOSTWICK',
      active: 1,
    },
    {
      description: 'CONTEO',
      active: 1,
    },
    {
      description: 'COVENIN 790:2000',
      active: 1,
    },
    {
      description: 'CROMATOGRAFICO',
      active: 1,
    },
    {
      description: 'CUBAN TESTER',
      active: 1,
    },
    {
      description: 'DANISCO',
      active: 1,
    },
    {
      description: 'DEFAULT. ISCC 205 Sec. 3.1',
      active: 1,
    },
    {
      description: 'DENSIMETRO',
      active: 1,
    },
    {
      description: 'DESTILACION',
      active: 1,
    },
    {
      description: 'DIR 220',
      active: 1,
    },
    {
      description: 'DIR-220',
      active: 1,
    },
    {
      description: 'E376.2 A.4500-S2-D I 10530 DIN 38405',
      active: 1,
    },
    {
      description: 'EN 14110',
      active: 1,
    },
    {
      description: 'EN 14112',
      active: 1,
    },
    {
      description: 'EN 14538 UOP-389',
      active: 1,
    },
    {
      description: 'EN 14538 UOP-391',
      active: 1,
    },
    {
      description: 'ESPECTROFOTOMETRIA',
      active: 1,
    },
    {
      description: 'ESTANDAR METODOS 9215D',
      active: 1,
    },
    {
      description: 'FARMEN - MCQ00120',
      active: 1,
    },
    {
      description: 'FTIR',
      active: 1,
    },
    {
      description: 'GC - ECD  MI-078',
      active: 1,
    },
    {
      description: 'GC-FID',
      active: 1,
    },
    {
      description: 'GRAVIMETRIA',
      active: 1,
    },
    {
      description: 'GRINDOMETRO / MICROMETRO',
      active: 1,
    },
    {
      description: 'HIDROMETRO',
      active: 1,
    },
    {
      description: 'HPLC',
      active: 1,
    },
    {
      description: 'HUNTER LAB',
      active: 1,
    },
    {
      description: 'INEN 1397',
      active: 1,
    },
    {
      description: 'INEN 1398',
      active: 1,
    },
    {
      description: 'INEN 164',
      active: 1,
    },
    {
      description: 'INEN 389',
      active: 1,
    },
    {
      description: 'INEN 448:1984-04',
      active: 1,
    },
    {
      description: 'INEN 448:1984-05',
      active: 1,
    },
    {
      description: 'INEN ISO 8851-1',
      active: 1,
    },
    {
      description: 'INEN ISO 8851-3',
      active: 1,
    },
    {
      description: 'INEN NTE ISO 2173 (BrixOmetro)',
      active: 1,
    },
    {
      description: 'INEN NTE ISO750',
      active: 1,
    },
    {
      description: 'INS-CCPQ-01',
      active: 1,
    },
    {
      description: 'IN-TOCA-010',
      active: 1,
    },
    {
      description: 'IO-MI-090',
      active: 1,
    },
    {
      description: 'ISO 17190-4-2001',
      active: 1,
    },
    {
      description: 'ISO 21527-1',
      active: 1,
    },
    {
      description: 'ISO 3960',
      active: 1,
    },
    {
      description: 'ISO 659-1',
      active: 1,
    },
    {
      description: 'ISO 7932',
      active: 1,
    },
    {
      description: 'IT.CCA.13',
      active: 1,
    },
    {
      description: 'IT05-015',
      active: 1,
    },
    {
      description: 'IUPAC III.A.4',
      active: 1,
    },
    {
      description: 'IUPAC III.A.6',
      active: 1,
    },
    {
      description: 'JAOCS Vol.59',
      active: 1,
    },
    {
      description: 'KARL FISHER',
      active: 1,
    },
    {
      description: 'LAB. EXTERNO',
      active: 1,
    },
    {
      description: 'LAB. EXTERNO ACRED',
      active: 1,
    },
    {
      description: 'LOVIBOND COMPARADOR 2000',
      active: 1,
    },
    {
      description: 'MA 138',
      active: 1,
    },
    {
      description: 'MA 231',
      active: 1,
    },
    {
      description: 'MA-081',
      active: 1,
    },
    {
      description: 'MA-139',
      active: 1,
    },
    {
      description: 'MA-141',
      active: 1,
    },
    {
      description: 'MA-147',
      active: 1,
    },
    {
      description: 'MA-151',
      active: 1,
    },
    {
      description: 'MA-152',
      active: 1,
    },
    {
      description: 'MA-157',
      active: 1,
    },
    {
      description: 'MA-158',
      active: 1,
    },
    {
      description: 'MA-208',
      active: 1,
    },
    {
      description: 'MA-219',
      active: 1,
    },
    {
      description: 'MA-229',
      active: 1,
    },
    {
      description: 'MA-230',
      active: 1,
    },
    {
      description: 'MA-407',
      active: 1,
    },
    {
      description: 'MA-409',
      active: 1,
    },
    {
      description: 'MA-423',
      active: 1,
    },
    {
      description: 'MA-439',
      active: 1,
    },
    {
      description: 'MA-801',
      active: 1,
    },
    {
      description: 'MA-802',
      active: 1,
    },
    {
      description: 'MA-901',
      active: 1,
    },
    {
      description: 'MAI-035',
      active: 1,
    },
    {
      description: 'MAI-036',
      active: 1,
    },
    {
      description: 'MAI-037',
      active: 1,
    },
    {
      description: 'MAI-038',
      active: 1,
    },
    {
      description: 'MAI-039',
      active: 1,
    },
    {
      description: 'MAI-040',
      active: 1,
    },
    {
      description: 'MAI-041',
      active: 1,
    },
    {
      description: 'MAI-043',
      active: 1,
    },
    {
      description: 'MAI-044',
      active: 1,
    },
    {
      description: 'MAI-046',
      active: 1,
    },
    {
      description: 'MAI-051',
      active: 1,
    },
    {
      description: 'MAI-052',
      active: 1,
    },
    {
      description: 'MAI-058',
      active: 1,
    },
    {
      description: 'MAI-059',
      active: 1,
    },
    {
      description: 'MAI-060',
      active: 1,
    },
    {
      description: 'MAI-061',
      active: 1,
    },
    {
      description: 'MAI-065',
      active: 1,
    },
    {
      description: 'MAI-066',
      active: 1,
    },
    {
      description: 'MAI-071',
      active: 1,
    },
    {
      description: 'MAI-072',
      active: 1,
    },
    {
      description: 'MAI-073',
      active: 1,
    },
    {
      description: 'MAI-074',
      active: 1,
    },
    {
      description: 'MAI-075',
      active: 1,
    },
    {
      description: 'MAI-076',
      active: 1,
    },
    {
      description: 'MAI-077',
      active: 1,
    },
    {
      description: 'MAI-078',
      active: 1,
    },
    {
      description: 'MAI-079',
      active: 1,
    },
    {
      description: 'MECCAB-001',
      active: 1,
    },
    {
      description: 'MECCAB-002',
      active: 1,
    },
    {
      description: 'MECCAB-005',
      active: 1,
    },
    {
      description: 'MECCAB-007',
      active: 1,
    },
    {
      description: 'MECCAB-008',
      active: 1,
    },
    {
      description: 'MECCAB-011',
      active: 1,
    },
    {
      description: 'MECCAB-013',
      active: 1,
    },
    {
      description: 'MECCAB-016',
      active: 1,
    },
    {
      description: 'MECCAB-017',
      active: 1,
    },
    {
      description: 'ME-CCGE-01',
      active: 1,
    },
    {
      description: 'ME-CCGE-02',
      active: 1,
    },
    {
      description: 'ME-CCPQ-01',
      active: 1,
    },
    {
      description: 'ME-CCPQ02',
      active: 1,
    },
    {
      description: 'ME-CCPQ-02',
      active: 1,
    },
    {
      description: 'ME-CCPT-01',
      active: 1,
    },
    {
      description: 'MEDIANTE EQUPIO ULTRAMETER II',
      active: 1,
    },
    {
      description: 'MEDICION ELECTRICA',
      active: 1,
    },
    {
      description: 'ME-PRUBA',
      active: 1,
    },
    {
      description: 'ME-PRUBA-2',
      active: 1,
    },
    {
      description: 'ME-PRUBA-52',
      active: 1,
    },
    {
      description: 'METODO INTERNO',
      active: 1,
    },
    {
      description: 'METODO TRITRIMETRICO FENOLICO',
      active: 1,
    },
    {
      description: 'MI-025',
      active: 1,
    },
    {
      description: 'MICROMETRO',
      active: 1,
    },
    {
      description: 'NFPA',
      active: 1,
    },
    {
      description: 'NIR',
      active: 1,
    },
    {
      description: 'NOM-060.88',
      active: 1,
    },
    {
      description: 'NTC 1155',
      active: 1,
    },
    {
      description: 'NTC 1773:1998',
      active: 1,
    },
    {
      description: 'NTC 1869',
      active: 1,
    },
    {
      description: 'NTC 2533',
      active: 1,
    },
    {
      description: 'NTC 4833',
      active: 1,
    },
    {
      description: 'NTC 5511:2007',
      active: 1,
    },
    {
      description: 'NTE INEN - ISO 3167',
      active: 1,
    },
    {
      description: 'NTE INEN 1160',
      active: 1,
    },
    {
      description: 'NTE INEN 1403:2013',
      active: 1,
    },
    {
      description: 'NTE INEN 1494',
      active: 1,
    },
    {
      description: 'NTE INEN 1529',
      active: 1,
    },
    {
      description: 'NTE INEN 1529-10',
      active: 1,
    },
    {
      description: 'NTE INEN 190 ',
      active: 1,
    },
    {
      description: 'NTE INEN 1947',
      active: 1,
    },
    {
      description: 'NTE INEN 2037',
      active: 1,
    },
    {
      description: 'NTE INEN 2041',
      active: 1,
    },
    {
      description: 'NTE INEN 2237',
      active: 1,
    },
    {
      description: 'NTE INEN 2238',
      active: 1,
    },
    {
      description: 'NTE INEN 2352',
      active: 1,
    },
    {
      description: 'NTE INEN 2353',
      active: 1,
    },
    {
      description: 'NTE INEN 244',
      active: 1,
    },
    {
      description: 'NTE INEN 254',
      active: 1,
    },
    {
      description: 'NTE INEN 3167',
      active: 1,
    },
    {
      description: 'NTE INEN 340',
      active: 1,
    },
    {
      description: 'NTE INEN 49',
      active: 1,
    },
    {
      description: 'NTE INEN 51',
      active: 1,
    },
    {
      description: 'NTE INEN 816',
      active: 1,
    },
    {
      description: 'NTE INEN 817',
      active: 1,
    },
    {
      description: 'NTE INEN 818',
      active: 1,
    },
    {
      description: 'NTE INEN 821',
      active: 1,
    },
    {
      description: 'NTE INEN 822',
      active: 1,
    },
    {
      description: 'NTE INEN 823',
      active: 1,
    },
    {
      description: 'NTE INEN 830',
      active: 1,
    },
    {
      description: 'NTE INEN 833',
      active: 1,
    },
    {
      description: 'NTE INEN 974',
      active: 1,
    },
    {
      description: 'NTE INEN 977',
      active: 1,
    },
    {
      description: 'NTE INEN ISO / IEC15423',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 12625-6',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 16212',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 16266',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 18416',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 21149',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 21150',
      active: 1,
    },
    {
      description: 'NTE INEN -ISO 21528-2',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 22717',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 22718',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 4593',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 4833',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 604',
      active: 1,
    },
    {
      description: 'NTE INEN -ISO 6579',
      active: 1,
    },
    {
      description: 'NTE INEN ISO 7027',
      active: 1,
    },
    {
      description: 'NTE INEN-ISO 10523',
      active: 1,
    },
    {
      description: 'NTE INEN-ISO 11294',
      active: 1,
    },
    {
      description: 'OXIDOGRAFO',
      active: 1,
    },
    {
      description: 'PANTONE',
      active: 1,
    },
    {
      description: 'PERDIDA PESO',
      active: 1,
    },
    {
      description: 'PH-METRO',
      active: 1,
    },
    {
      description: 'PICNOMETRO',
      active: 1,
    },
    {
      description: 'PORIM p 2.6',
      active: 1,
    },
    {
      description: 'PORIM P2.15',
      active: 1,
    },
    {
      description: 'PORIM P2.9',
      active: 1,
    },
    {
      description: 'PRD.CCA.19',
      active: 1,
    },
    {
      description: 'PRD.CCA.92',
      active: 1,
    },
    {
      description: 'PRD.CCA.94',
      active: 1,
    },
    {
      description: 'PRD.CCA.95',
      active: 1,
    },
    {
      description: 'PRUEBA2',
      active: 1,
    },
    {
      description: 'QWI-QC-EU-50-3102',
      active: 1,
    },
    {
      description: 'Reglamento CEE No:2568/ 91',
      active: 1,
    },
    {
      description: 'RTE INEN 284',
      active: 1,
    },
    {
      description: 'SENSORIAL',
      active: 1,
    },
    {
      description: 'STANDARD METHODS',
      active: 1,
    },
    {
      description: 'STANDARD METHODS 2120 C.',
      active: 1,
    },
    {
      description: 'STANDARD METHODS 2130 B.',
      active: 1,
    },
    {
      description: 'STANDARD METHODS 2340-C-EDTA',
      active: 1,
    },
    {
      description: 'STANDARD METHODS 4500-Cl',
      active: 1,
    },
    {
      description: 'STANDARD METHODS 4500-H-B',
      active: 1,
    },
    {
      description: 'STANDARD METHODS 5520 D',
      active: 1,
    },
    {
      description: 'STANDART METHODS 4500-SO32- B.',
      active: 1,
    },
    {
      description: 'STANDART METHODS 5210-D',
      active: 1,
    },
    {
      description: 'STANDART METHODS 5220-D',
      active: 1,
    },
    {
      description: 'TAPPI T 410',
      active: 1,
    },
    {
      description: 'TAPPI T412',
      active: 1,
    },
    {
      description: 'TESTO',
      active: 1,
    },
    {
      description: 'TIRILLAS PH',
      active: 1,
    },
    {
      description: 'TITRIMETRICO',
      active: 1,
    },
    {
      description: 'TITULACION/UMA 0112',
      active: 1,
    },
    {
      description: 'UNE-EN ISO 9308-1',
      active: 1,
    },
    {
      description: 'USP 616',
      active: 1,
    },
    {
      description: 'USP 813',
      active: 1,
    },
    {
      description: 'USP 831',
      active: 1,
    },
    {
      description: 'USP 841',
      active: 1,
    },
    {
      description: 'USP 854',
      active: 1,
    },
    {
      description: 'USP 912',
      active: 1,
    },
    {
      description: 'VISCOSIMETRO',
      active: 1,
    },
    {
      description: 'VISUAL',
      active: 1,
    },
    {
      description: 'VOLUMETRIA',
      active: 1,
    },
    {
      description: 'VOLUMETRICO (INEN AGUA)',
      active: 1,
    },
    {
      description: 'WHO-PCDD/F-TEQ/G FAT',
      active: 1,
    },
    {
      description: 'WPS: IM-QC34-43',
      active: 1,
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('processes', null, {});
  }
};
