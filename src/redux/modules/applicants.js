const mockApplicants = [
  {
    "id": 1,
    "gender": "female",
    "name": {
      "title": "ms",
      "first": "manuela",
      "last": "velasco"
    },
    "location": {
      "street": "1969 calle de alberto aguilera",
      "city": "la coruña",
      "state": "asturias",
      "zip": "56298"
    },
    "email": "manuela.velasco50@example.com",
    "phone": "994-131-106",
    "cell": "626-695-164",
    "image": "http://api.randomuser.me/portraits/women/39.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Hired"
      },
      {
        "id": 2,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 3
      },
      {
        "label": "PHP",
        "value": 4
      },
      {
        "label": "Java",
        "value": 5
      },
      {
        "label": "HTML",
        "value": 3
      },
      {
        "label": "CSS",
        "value": 2
      }
    ],
    "history": [
      {
        "company": "Yahoo",
        "position": "Database Admin",
        "duration": 3
      },
      {
        "company": "Sony",
        "position": "Software Engineer",
        "duration": 47
      },
      {
        "company": "Amazon",
        "position": "Software Developer",
        "duration": 43
      }
    ]
  },
  {
    "id": 2,
    "gender": "female",
    "name": {
      "title": "mrs",
      "first": "pippa",
      "last": "lee"
    },
    "location": {
      "street": "2963 caversham valley road",
      "city": "timaru",
      "state": "west coast",
      "zip": "87725"
    },
    "email": "pippa.lee@example.com",
    "phone": "036-055-7289",
    "cell": "993-526-0363",
    "image": "https://randomuser.me/api/portraits/med/women/7.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Hired"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 5
      },
      {
        "label": "PHP",
        "value": 4
      },
      {
        "label": "Java",
        "value": 5
      },
      {
        "label": "HTML",
        "value": 3
      },
      {
        "label": "CSS",
        "value": 5
      }
    ],
    "history": [
      {
        "company": "Mastercard",
        "position": "System Architect",
        "duration": 60
      },
      {
        "company": "Sony",
        "position": "System Architect",
        "duration": 7
      },
      {
        "company": "Expedia",
        "position": "Database Admin",
        "duration": 22
      }
    ]
  },
  {
    "id": 3,
    "gender": "male",
    "name": {
      "title": "monsieur",
      "first": "ethan",
      "last": "mathieu"
    },
    "location": {
      "street": "2606 place de l'abbé-basset",
      "city": "bussigny",
      "state": "bern",
      "zip": 9748
    },
    "email": "ethan.mathieu@example.com",
    "phone": "750-112-0519",
    "cell": "498-130-4846",
    "image": "https://randomuser.me/api/portraits/med/men/31.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Round 2"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 6
      },
      {
        "label": "PHP",
        "value": 4
      },
      {
        "label": "Java",
        "value": 4
      },
      {
        "label": "HTML",
        "value": 3
      },
      {
        "label": "CSS",
        "value": 2
      }
    ],
    "history": [
      {
        "company": "Expedia",
        "position": "System Admin",
        "duration": 19
      },
      {
        "company": "Sony",
        "position": "Database Admin",
        "duration": 45
      },
      {
        "company": "Amazon",
        "position": "Database Admin",
        "duration": 36
      }
    ]
  },
  {
    "id": 4,
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "florence",
      "last": "brown"
    },
    "location": {
      "street": "6299 karangahape road",
      "city": "dunedin",
      "state": "tasman",
      "zip": "96249"
    },
    "email": "florence.brown@example.com",
    "phone": "680-956-0698",
    "cell": "605-081-2825",
    "image": "https://randomuser.me/api/portraits/med/women/60.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Round 2"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 5
      },
      {
        "label": "PHP",
        "value": 6
      },
      {
        "label": "Java",
        "value": 3
      },
      {
        "label": "HTML",
        "value": 3
      },
      {
        "label": "CSS",
        "value": 3
      }
    ],
    "history": [
      {
        "company": "Netflix",
        "position": "Software Developer",
        "duration": 51
      },
      {
        "company": "Sony",
        "position": "Database Admin",
        "duration": 42
      },
      {
        "company": "Mastercard",
        "position": "System Admin",
        "duration": 11
      }
    ]
  },
  {
    "id": 5,
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "oskari",
      "last": "leino"
    },
    "location": {
      "street": "9009 reijolankatu",
      "city": "orivesi",
      "state": "southern savonia",
      "zip": "48201"
    },
    "email": "oskari.leino@example.com",
    "phone": "03-654-613",
    "cell": "046-558-37-23",
    "image": "https://randomuser.me/api/portraits/med/men/15.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 5
      },
      {
        "label": "PHP",
        "value": 6
      },
      {
        "label": "Java",
        "value": 6
      },
      {
        "label": "HTML",
        "value": 3
      },
      {
        "label": "CSS",
        "value": 5
      }
    ],
    "history": [
      {
        "company": "Yahoo",
        "position": "System Architect",
        "duration": 7
      },
      {
        "company": "Tesla",
        "position": "Software Developer",
        "duration": 18
      },
      {
        "company": "Amazon",
        "position": "System Admin",
        "duration": 35
      }
    ]
  },
  {
    "id": 6,
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "zachary",
      "last": "denys"
    },
    "location": {
      "street": "6866 main st",
      "city": "delisle",
      "state": "new brunswick",
      "zip": "44756"
    },
    "email": "zachary.denys@example.com",
    "phone": "407-814-6132",
    "cell": "235-921-6616",
    "image": "https://randomuser.me/api/portraits/med/men/14.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 7
      },
      {
        "label": "PHP",
        "value": 2
      },
      {
        "label": "Java",
        "value": 2
      },
      {
        "label": "HTML",
        "value": 3
      },
      {
        "label": "CSS",
        "value": 4
      }
    ],
    "history": [
      {
        "company": "Tesla",
        "position": "System Admin",
        "duration": 56
      },
      {
        "company": "Mastercard",
        "position": "System Admin",
        "duration": 34
      },
      {
        "company": "Amazon",
        "position": "Software Engineer",
        "duration": 51
      }
    ]
  },
  {
    "id": 7,
    "gender": "female",
    "name": {
      "title": "mrs",
      "first": "neea",
      "last": "kurti"
    },
    "location": {
      "street": "1231 mechelininkatu",
      "city": "kihniö",
      "state": "north karelia",
      "zip": "122774"
    },
    "email": "neea.kurtti@example.com",
    "phone": "06-951-086",
    "cell": "048-839-95-35",
    "image": "https://randomuser.me/api/portraits/med/women/11.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 5
      },
      {
        "label": "PHP",
        "value": 6
      },
      {
        "label": "Java",
        "value": 2
      },
      {
        "label": "HTML",
        "value": 3
      },
      {
        "label": "CSS",
        "value": 5
      }
    ],
    "history": [
      {
        "company": "Expedia",
        "position": "System Architect",
        "duration": 18
      },
      {
        "company": "Google",
        "position": "System Architect",
        "duration": 28
      },
      {
        "company": "Tesla",
        "position": "System Admin",
        "duration": 48
      }
    ]
  },
  {
    "id": 8,
    "gender": "male",
    "name": {
      "title": "monsieur",
      "first": "jules",
      "last": "simon"
    },
    "location": {
      "street": "7465 rue des jardins",
      "city": "romanel-sur-morges",
      "state": "valais",
      "zip": "6029"
    },
    "email": "jules.simon@example.com",
    "phone": "390-214-7314",
    "cell": "896-529-0249",
    "image": "https://randomuser.me/api/portraits/med/men/98.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 5
      },
      {
        "label": "PHP",
        "value": 4
      },
      {
        "label": "Java",
        "value": 3
      },
      {
        "label": "HTML",
        "value": 4
      },
      {
        "label": "CSS",
        "value": 5
      }
    ],
    "history": [
      {
        "company": "Google",
        "position": "System Admin",
        "duration": 51
      },
      {
        "company": "Mastercard",
        "position": "System Admin",
        "duration": 47
      },
      {
        "company": "Sony",
        "position": "Software Developer",
        "duration": 17
      }
    ]
  },
  {
    "id": 9,
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "wayne",
      "last": "cox"
    },
    "location": {
      "street": "5075 george street",
      "city": "nottingham",
      "state": "borders",
      "zip": "PD40 3XW"
    },
    "email": "wayne.cox@example.com",
    "phone": "015-394-8050",
    "cell": "078-411-5919",
    "image": "https://randomuser.me/api/portraits/med/men/13.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 3
      },
      {
        "label": "PHP",
        "value": 5
      },
      {
        "label": "Java",
        "value": 7
      },
      {
        "label": "HTML",
        "value": 2
      },
      {
        "label": "CSS",
        "value": 3
      }
    ],
    "history": [
      {
        "company": "Amazon",
        "position": "System Architect",
        "duration": 8
      },
      {
        "company": "Yahoo",
        "position": "Software Developer",
        "duration": 29
      },
      {
        "company": "VMWare",
        "position": "Database Admin",
        "duration": 43
      }
    ]
  },
  {
    "id": 10,
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "lucas",
      "last": "turner"
    },
    "location": {
      "street": "5205 opawa road",
      "city": "porirua",
      "state": "gisborne",
      "zip": "59505"
    },
    "email": "lucas.turner@example.com",
    "phone": "760-462-3049",
    "cell": "996-809-8615",
    "image": "https://randomuser.me/api/portraits/med/men/32.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 5
      },
      {
        "label": "PHP",
        "value": 4
      },
      {
        "label": "Java",
        "value": 6
      },
      {
        "label": "HTML",
        "value": 3
      },
      {
        "label": "CSS",
        "value": 2
      }
    ],
    "history": [
      {
        "company": "IBM",
        "position": "Database Admin",
        "duration": 32
      },
      {
        "company": "Google",
        "position": "Software Developer",
        "duration": 49
      },
      {
        "company": "VMWare",
        "position": "Software Engineer",
        "duration": 16
      }
    ]
  },
  {
    "id": 11,
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "arttu",
      "last": "laitinen"
    },
    "location": {
      "street": "2174 rautatienkatu",
      "city": "kihniö",
      "state": "uusimaa",
      "zip": "99380"
    },
    "email": "arttu.laitinen@example.com",
    "phone": "06-285-631",
    "cell": "046-472-66-61",
    "image": "https://randomuser.me/api/portraits/med/men/92.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 6
      },
      {
        "label": "PHP",
        "value": 4
      },
      {
        "label": "Java",
        "value": 3
      },
      {
        "label": "HTML",
        "value": 3
      },
      {
        "label": "CSS",
        "value": 2
      }
    ],
    "history": [
      {
        "company": "Tesla",
        "position": "Database Admin",
        "duration": 8
      },
      {
        "company": "Expedia",
        "position": "Database Admin",
        "duration": 50
      },
      {
        "company": "Netflix",
        "position": "System Architect",
        "duration": 11
      }
    ]
  },
  {
    "id": 12,
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "capucine",
      "last": "lecomte"
    },
    "location": {
      "street": "3601 rue des jardins",
      "city": "colombes",
      "state": "indre-et-loire",
      "zip": "11649"
    },
    "email": "capucine.lecomte@example.com",
    "phone": "04-46-21-44-72",
    "cell": "06-41-57-23-38",
    "image": "https://randomuser.me/api/portraits/med/women/59.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 3
      },
      {
        "label": "PHP",
        "value": 4
      },
      {
        "label": "Java",
        "value": 6
      },
      {
        "label": "HTML",
        "value": 3
      },
      {
        "label": "CSS",
        "value": 2
      }
    ],
    "history": [
      {
        "company": "Tesla",
        "position": "Database Admin",
        "duration": 35
      },
      {
        "company": "VMWare",
        "position": "System Architect",
        "duration": 58
      },
      {
        "company": "Google",
        "position": "System Architect",
        "duration": 3
      }
    ]
  },
  {
    "id": 13,
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "ethel",
      "last": "russell"
    },
    "location": {
      "street": "2287 mockingbird hill",
      "city": "newport news",
      "state": "tennessee",
      "zip": "49891"
    },
    "email": "ethel.russell@example.com",
    "phone": "835-785-0076",
    "cell": "090-842-9179",
    "image": "https://randomuser.me/api/portraits/med/women/26.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 6
      },
      {
        "label": "PHP",
        "value": 6
      },
      {
        "label": "Java",
        "value": 2
      },
      {
        "label": "HTML",
        "value": 5
      },
      {
        "label": "CSS",
        "value": 5
      }
    ],
    "history": [
      {
        "company": "Mastercard",
        "position": "System Admin",
        "duration": 14
      },
      {
        "company": "Yahoo",
        "position": "Software Developer",
        "duration": 31
      },
      {
        "company": "Amazon",
        "position": "System Admin",
        "duration": 51
      }
    ]
  },
  {
    "id": 16,
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "milan",
      "last": "fabre"
    },
    "location": {
      "street": "5746 rue bony",
      "city": "aulnay-sous-bois",
      "state": "pas-de-calais",
      "zip": "89260"
    },
    "email": "milan.fabre@example.com",
    "phone": "03-59-06-44-45",
    "cell": "06-47-64-25-63",
    "image": "https://randomuser.me/api/portraits/med/men/16.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 3
      },
      {
        "label": "PHP",
        "value": 6
      },
      {
        "label": "Java",
        "value": 3
      },
      {
        "label": "HTML",
        "value": 5
      },
      {
        "label": "CSS",
        "value": 6
      }
    ],
    "history": [
      {
        "company": "IBM",
        "position": "Database Admin",
        "duration": 50
      },
      {
        "company": "Yahoo",
        "position": "Software Developer",
        "duration": 17
      },
      {
        "company": "VMWare",
        "position": "System Architect",
        "duration": 9
      }
    ]
  },
  {
    "id": 19,
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "matias",
      "last": "niska"
    },
    "location": {
      "street": "9081 tehtaankatu",
      "city": "iitti",
      "state": "northern ostrobothnia",
      "zip": "98643"
    },
    "email": "matias.niska@example.com",
    "phone": "02-362-270",
    "cell": "049-297-73-07",
    "image": "https://randomuser.me/api/portraits/med/men/90.jpg",
    "positions": [
      {
        "id": 1,
        "status": "Shortlisted"
      }
    ],
    "skillDistribution": [
      {
        "label": "Javascript",
        "value": 5
      },
      {
        "label": "PHP",
        "value": 4
      },
      {
        "label": "Java",
        "value": 6
      },
      {
        "label": "HTML",
        "value": 3
      },
      {
        "label": "CSS",
        "value": 2
      }
    ],
    "history": [
      {
        "company": "Tesla",
        "position": "Software Engineer",
        "duration": 22
      },
      {
        "company": "Google",
        "position": "System Architect",
        "duration": 44
      },
      {
        "company": "Expedia",
        "position": "Software Engineer",
        "duration": 49
      }
    ]
  }
]

// ------------------------------------
// Actions
// ------------------------------------

export function populateApplicants() {
  return {
    type: 'POPULATE_APPLICANTS'
  }
}

export const actions = {
  populateApplicants
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  'POPULATE_APPLICANTS': (state) => state
}

// ------------------------------------
// Reducer
// ------------------------------------
// const initialState = []
const initialState = mockApplicants
export default function applicantsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
