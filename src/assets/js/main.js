const ramais = [
  {
    departamento: 'ASSUNTOS ESPECIAIS',
    nome: 'Adelaide',
    ramal: 8417,
  },
  {
    departamento: 'VENDAS EXTERNAS',
    nome: 'Adriana',
    ramal: 8405,
  },
  {
    departamento: 'VENDAS EXTERNAS',
    nome: 'Alana',
    ramal: 8546,
  },
  {
    departamento: 'FISCAL',
    nome: 'Alessandra Franchi',
    ramal: 8402,
  },
  {
    departamento: 'RH',
    nome: 'Alex Lemes',
    ramal: 8447,
  },
  {
    departamento: 'TI',
    nome: 'Alex Nascimento',
    ramal: 8500,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Alexandre Vilas Boas',
    ramal: 8433,
  },
  {
    departamento: 'VENDAS',
    nome: 'Aliandro',
    ramal: 8438,
  },
  {
    departamento: 'JURIDICO',
    nome: 'Alice',
    ramal: 8453,
  },
  {
    departamento: 'TI',
    nome: 'Aloizio',
    ramal: 8430,
  },
  {
    departamento: 'DP',
    nome: 'Amanda',
    ramal: 8446,
  },
  {
    departamento: 'VENDAS ADM',
    nome: 'Amanda',
    ramal: 8462,
  },
  {
    departamento: 'CONTABILIDADE',
    nome: 'Ana Ferreira',
    ramal: 8418,
  },
  {
    departamento: 'CONTABILIDADE',
    nome: 'Ana Flavia',
    ramal: 8587,
  },
  {
    departamento: 'FISCAL',
    nome: 'Ana Metidieri',
    ramal: 8585,
  },
  {
    departamento: 'TI',
    nome: 'André',
    ramal: 8498,
  },
  {
    departamento: 'FINANCEIRO',
    nome: 'Andressa',
    ramal: 8595,
  },
  {
    departamento: 'FINANCEIRO',
    nome: 'Andreza',
    ramal: 8494,
  },
  {
    departamento: 'DP',
    nome: 'Angela',
    ramal: 8445,
  },
  {
    departamento: 'LOGISTICA',
    nome: 'Benedito',
    ramal: 8476,
  },
  {
    departamento: 'CONTROLADORIA',
    nome: 'Bruna',
    ramal: 8436,
  },
  {
    departamento: 'FINANCEIRO',
    nome: 'Carla',
    ramal: 8594,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Caroline',
    ramal: 8531,
  },
  {
    departamento: 'SAM',
    nome: 'Cecilía',
    ramal: 8467,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Cesár Rossi',
    ramal: 8439,
  },
  {
    departamento: 'PROJETOS TI',
    nome: 'Cintia',
    ramal: 8499,
  },
  {
    departamento: 'VENDAS ADM',
    nome: 'Claudia',
    ramal: 8441,
  },
  {
    departamento: 'FINANCEIRO',
    nome: 'Claudia Lemes',
    ramal: 8510,
  },
  {
    departamento: 'LOGISTICA',
    nome: 'Clovis',
    ramal: 8477,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Cristiane',
    ramal: 8522,
  },
  {
    departamento: 'COMEX',
    nome: 'Daiana',
    ramal: 8463,
  },
  {
    departamento: 'LOGISTICA',
    nome: 'Daniel',
    ramal: 8423,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Daniel Radaeli',
    ramal: 8403,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Danielle',
    ramal: 8435,
  },
  {
    departamento: 'RECEPÇÂO',
    nome: 'Edna',
    ramal: 8399,
  },
  {
    departamento: 'CONTROLADORIA',
    nome: 'Diziane Cardosos',
    ramal: 8518,
  },
  {
    departamento: 'TRANSPORTE',
    nome: 'Douglas',
    ramal: 8497,
  },
  {
    departamento: 'FINANCEIRO',
    nome: 'Dulce',
    ramal: 8415,
  },
  {
    departamento: 'FISCAL',
    nome: 'Ebert',
    ramal: 8593,
  },
  {
    departamento: 'TRANSPORTE',
    nome: 'Edgar',
    ramal: 8484,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Elaine',
    ramal: 8528,
  },
  {
    departamento: 'FINANCEIRO',
    nome: 'Eliana Vasconcelos',
    ramal: 8416,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Evelyn',
    ramal: 8588,
  },
  {
    departamento: 'LOGISTICA',
    nome: 'Expedicao',
    ramal: 8478,
  },
  {
    departamento: 'E-COMMERCE',
    nome: 'Fabiana',
    ramal: 8485,
  },
  {
    departamento: 'FATURAMENTO',
    nome: 'Fabio Santos',
    ramal: 8460,
  },
  {
    departamento: 'TRANSPORTE',
    nome: 'Fernanda',
    ramal: 8599,
  },
  {
    departamento: 'DIRETORIA',
    nome: 'Fernando Villas Boas',
    ramal: 8422,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Francielle',
    ramal: 8544,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Francine',
    ramal: 8527,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Geisa',
    ramal: 8421,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Geizebel',
    ramal: 8542,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Geomara',
    ramal: 8526,
  },
  {
    departamento: 'CONTABILIDADE',
    nome: 'Gisele Miguel',
    ramal: 8419,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Giulia',
    ramal: 8524,
  },
  {
    departamento: 'VENDAS ADM',
    nome: 'Grace Kelly',
    ramal: 8426,
  },
  {
    departamento: 'SAM',
    nome: 'Grazielle',
    ramal: 8473,
  },
  {
    departamento: 'PROJETOS TI',
    nome: 'Helder',
    ramal: 8424,
  },
  {
    departamento: 'CREDITO',
    nome: 'Hyandra',
    ramal: 8469,
  },
  {
    departamento: 'COMEX',
    nome: 'Isabelle',
    ramal: 8596,
  },
  {
    departamento: 'PROJETOS TI',
    nome: 'Ivan',
    ramal: 8579,
  },
  {
    departamento: 'SAM',
    nome: 'Jamille',
    ramal: 8474,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Janaina',
    ramal: 8512,
  },
  {
    departamento: 'FATURAMENTO',
    nome: 'Jenifer Marques',
    ramal: 8529,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Joao Batista',
    ramal: 8443,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Joao Duarte',
    ramal: 8412,
  },
  {
    departamento: 'VENDAS ADM',
    nome: 'João Gabriel',
    ramal: 8425,
  },
  {
    departamento: 'FISCAL',
    nome: 'Jonas',
    ramal: 8507,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Josiane',
    ramal: 8547,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Joyce',
    ramal: 8543,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Juliana',
    ramal: 8523,
  },
  {
    departamento: 'TRANSPORTE',
    nome: 'Junior',
    ramal: 8598,
  },
  {
    departamento: '',
    nome: '',
    ramal: null,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Kamilla',
    ramal: 8589,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Karina',
    ramal: 8566,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Laynara',
    ramal: 8540,
  },
  {
    departamento: 'TRANSPORTE',
    nome: 'Leandro',
    ramal: 8549,
  },
  {
    departamento: 'DIRETORIA',
    nome: 'Leonardo Severini',
    ramal: 8407,
  },
  {
    departamento: 'TRADE',
    nome: 'Leticia',
    ramal: 8597,
  },
  {
    departamento: 'CONTABILIDADE',
    nome: 'Leticia Miranda',
    ramal: 8586,
  },
  {
    departamento: 'FATURAMENTO',
    nome: 'Liliane',
    ramal: 8535,
  },
  {
    departamento: 'TRANSPORTE',
    nome: 'Liliane',
    ramal: 8480,
  },
  {
    departamento: 'TI',
    nome: 'Luan',
    ramal: 8429,
  },
  {
    departamento: 'VENDAS BALCAO',
    nome: 'Lucatelli',
    ramal: 8454,
  },
  {
    departamento: 'FINANCEIRO',
    nome: 'Lucia',
    ramal: 8456,
  },
  {
    departamento: 'LOGISTICA',
    nome: 'Luiz',
    ramal: 8434,
  },
  {
    departamento: 'JURIDICO',
    nome: 'Luiza',
    ramal: 8449,
  },
  {
    departamento: 'DIRETORIA',
    nome: 'Manoel Jr.',
    ramal: 8483,
  },
  {
    departamento: 'TI',
    nome: 'Marcelo',
    ramal: 8577,
  },
  {
    departamento: 'CONTROLADORIA',
    nome: 'Marcilayne Cassemiro',
    ramal: 8495,
  },
  {
    departamento: 'LOGISTICA',
    nome: 'Marcos',
    ramal: 8479,
  },
  {
    departamento: 'DIRETORIA',
    nome: 'Marcos Guidi',
    ramal: 8408,
  },
  {
    departamento: 'FINANCEIRO',
    nome: 'Maria Lucia',
    ramal: 8420,
  },
  {
    departamento: 'SAM',
    nome: 'Mariana',
    ramal: 8514,
  },
  {
    departamento: 'TRADE',
    nome: 'Mariana',
    ramal: 8431,
  },
  {
    departamento: 'DP',
    nome: 'Mariane',
    ramal: 8525,
  },
  {
    departamento: 'SAM',
    nome: 'Marilia',
    ramal: 8513,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Mayra',
    ramal: 8532,
  },
  {
    departamento: 'RH',
    nome: 'Michele',
    ramal: 8444,
  },
  {
    departamento: 'TRADE',
    nome: 'Michele',
    ramal: 8466,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Milena',
    ramal: 8592,
  },
  {
    departamento: 'FINANCEIRO',
    nome: 'Munique',
    ramal: 8413,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Nayara',
    ramal: 8530,
  },
  {
    departamento: 'SAM',
    nome: 'Nicole',
    ramal: 8516,
  },
  {
    departamento: 'TRANSPORTE',
    nome: 'Nilton',
    ramal: 8428,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Paloma',
    ramal: 8538,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Paula',
    ramal: 8550,
  },
  {
    departamento: 'FISCAL',
    nome: 'Poliana',
    ramal: 8584,
  },
  {
    departamento: 'PORTARIA',
    nome: 'Portaria',
    ramal: 8489,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Rafaella',
    ramal: 8442,
  },
  {
    departamento: '',
    nome: '',
    ramal: null,
  },
  {
    departamento: 'REFEITORIO',
    nome: 'Refeitório',
    ramal: 8487,
  },
  {
    departamento: 'TI',
    nome: 'Renan',
    ramal: 8578,
  },
  {
    departamento: 'CREDITO',
    nome: 'Roane',
    ramal: 8427,
  },
  {
    departamento: 'LOGISTICA',
    nome: 'Rogerio',
    ramal: 8459,
  },
  {
    departamento: 'CREDITO',
    nome: 'Rose',
    ramal: 8491,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Rose',
    ramal: 8521,
  },
  {
    departamento: 'FISCAL',
    nome: 'Rubiana',
    ramal: 8580,
  },
  {
    departamento: 'VENDAS ADM',
    nome: 'Samantha',
    ramal: 8465,
  },
  {
    departamento: 'CREDITO',
    nome: 'Sarah',
    ramal: 8461,
  },
  {
    departamento: 'VENDAS ADM',
    nome: 'Sebastião',
    ramal: 8468,
  },
  {
    departamento: 'PROJETOS TI',
    nome: 'Sidney',
    ramal: 8534,
  },
  {
    departamento: 'DIRETORIA',
    nome: 'Sr. Manoel',
    ramal: 8411,
  },
  {
    departamento: 'SAM',
    nome: 'Suane',
    ramal: 8450,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Suzana',
    ramal: 8548,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Taismilaine',
    ramal: 8437,
  },
  {
    departamento: 'SAM',
    nome: 'Talisson',
    ramal: 8471,
  },
  {
    departamento: 'COMPRAS',
    nome: 'Tatiane',
    ramal: 8404,
  },
  {
    departamento: 'RH',
    nome: 'Técnico Segurança',
    ramal: 8486,
  },
  {
    departamento: 'E-COMMERCE',
    nome: 'Thais',
    ramal: 8488,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Tiago',
    ramal: 8545,
  },
  {
    departamento: 'FATURAMENTO',
    nome: 'Tiago Marques',
    ramal: 8455,
  },
  {
    departamento: 'TESOURARIA',
    nome: 'Ully',
    ramal: 8406,
  },
  {
    departamento: 'VENDAS BALCAO',
    nome: 'Valdemar',
    ramal: 8451,
  },
  {
    departamento: 'VENDAS EXTENAS',
    nome: 'Vanessa',
    ramal: 8560,
  },
  {
    departamento: 'DIRETORIA',
    nome: 'Vitor Severini',
    ramal: 8536,
  },
  {
    departamento: 'TRANSPORTE',
    nome: 'Wagner',
    ramal: 8481,
  },
  {
    departamento: 'FISCAL',
    nome: 'Wesley',
    ramal: 8448,
  },
];
