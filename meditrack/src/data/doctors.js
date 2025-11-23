export const doctors = [
  {
    id: "doc-001",
    firstName: "Priya",
    lastName: "Desai",
    displayName: "Priya Desai, MD",
    role: "General Surgeon",
    specialty: "General Surgery",
    specialtyCode: "SUR",
    department: "Surgery",
    facility: "St. Gabriel Medical Center",
    photoUrl: null,
    email: "priya.desai@sgmc.org",
    phone: "555-301-7450",
    credentials: [
      {
        id: "d001-c001",
        credentialId: "SUR-000",
        status: "Active",
        issueDate: "2016-03-01",
        expiryDate: "2026-03-01",
        licenseNumber: "GS-22101",
        primary: true
      },
      {
        id: "d001-c002",
        credentialId: "SUR-001",
        status: "Active",
        issueDate: "2020-07-15",
        expiryDate: "2024-07-15",
        licenseNumber: "TS-22015",
        primary: false
      },
      {
        id: "d001-c003",
        credentialId: "SUR-003",
        status: "Active",
        issueDate: "2021-09-01",
        expiryDate: "2026-09-01",
        licenseNumber: "RS-99110",
        primary: false
      }
    ]
  },

  {
    id: "doc-002",
    firstName: "Jonathan",
    lastName: "Kim",
    displayName: "Jonathan Kim, MD",
    role: "Diagnostic Radiologist",
    specialty: "Radiology",
    specialtyCode: "RAD",
    department: "Imaging",
    facility: "Eastview Hospital",
    photoUrl: null,
    email: "jkim@eastview.org",
    phone: "555-292-1144",
    credentials: [
      {
        id: "d002-c001",
        credentialId: "RAD-000",
        status: "Active",
        issueDate: "2018-02-01",
        expiryDate: "2028-02-01",
        licenseNumber: "DR-88412",
        primary: true
      },
      {
        id: "d002-c002",
        credentialId: "RAD-003",
        status: "Active",
        issueDate: "2023-01-10",
        expiryDate: "2025-01-10",
        licenseNumber: "MQSA-49311",
        primary: false
      },
      {
        id: "d002-c003",
        credentialId: "RAD-004",
        status: "Active",
        issueDate: "2020-06-01",
        expiryDate: "2030-06-01",
        licenseNumber: "CT-88314",
        primary: false
      }
    ]
  },

  {
    id: "doc-003",
    firstName: "Elena",
    lastName: "Morales",
    displayName: "Elena Morales, MD",
    role: "Cardiologist",
    specialty: "Cardiology",
    specialtyCode: "CAR",
    department: "Cardiology",
    facility: "St. Helena Heart Institute",
    photoUrl: null,
    email: "emorales@sthelena.org",
    phone: "555-310-8820",
    credentials: [
      {
        id: "d003-c001",
        credentialId: "CAR-000",
        status: "Active",
        issueDate: "2017-04-01",
        expiryDate: "2027-04-01",
        licenseNumber: "CD-44122",
        primary: true
      },
      {
        id: "d003-c002",
        credentialId: "CAR-001",
        status: "Active",
        issueDate: "2019-06-01",
        expiryDate: "2029-06-01",
        licenseNumber: "IC-91773",
        primary: false
      },
      {
        id: "d003-c003",
        credentialId: "CAR-003",
        status: "Active",
        issueDate: "2020-03-01",
        expiryDate: "2030-03-01",
        licenseNumber: "ECHO-66314",
        primary: false
      }
    ]
  },

  {
    id: "doc-004",
    firstName: "Marcus",
    lastName: "Holloway",
    displayName: "Marcus Holloway, DO",
    role: "Emergency Physician",
    specialty: "Emergency Medicine",
    specialtyCode: "EMD",
    department: "Emergency",
    facility: "Metro Regional ER",
    photoUrl: null,
    email: "mholloway@metroer.org",
    phone: "555-400-1188",
    credentials: [
      {
        id: "d004-c001",
        credentialId: "EMD-000",
        status: "Active",
        issueDate: "2015-01-01",
        expiryDate: "2025-01-01",
        licenseNumber: "ER-11317",
        primary: true
      },
      {
        id: "d004-c002",
        credentialId: "EMD-001",
        status: "Active",
        issueDate: "2022-05-01",
        expiryDate: "2026-05-01",
        licenseNumber: "ATLS-77192",
        primary: false
      },
      {
        id: "d004-c003",
        credentialId: "EMD-002",
        status: "Active",
        issueDate: "2023-07-01",
        expiryDate: "2025-07-01",
        licenseNumber: "ACLS-29174",
        primary: false
      }
    ]
  },

  {
    id: "doc-005",
    firstName: "Aisha",
    lastName: "Rahman",
    displayName: "Aisha Rahman, MD",
    role: "Neurologist",
    specialty: "Neurology",
    specialtyCode: "NLG",
    department: "Neurology",
    facility: "Riverside Medical Group",
    photoUrl: null,
    email: "arahman@riverside.org",
    phone: "555-223-9901",
    credentials: [
      {
        id: "d005-c001",
        credentialId: "NLG-000",
        status: "Active",
        issueDate: "2018-01-20",
        expiryDate: "2028-01-20",
        licenseNumber: "NEU-44128",
        primary: true
      },
      {
        id: "d005-c002",
        credentialId: "NLG-001",
        status: "Active",
        issueDate: "2021-05-01",
        expiryDate: "2031-05-01",
        licenseNumber: "EPI-77413",
        primary: false
      }
    ]
  },

  {
    id: "doc-006",
    firstName: "Samuel",
    lastName: "Grant",
    displayName: "Samuel Grant, MD",
    role: "Orthopedic Surgeon",
    specialty: "Orthopedics",
    specialtyCode: "ORT",
    department: "Surgery",
    facility: "Mountain View Trauma Center",
    photoUrl: null,
    email: "sgrant@mvtc.org",
    phone: "555-993-2210",
    credentials: [
      {
        id: "d006-c001",
        credentialId: "ORT-000",
        status: "Active",
        issueDate: "2014-02-01",
        expiryDate: "2024-02-01",
        licenseNumber: "OR-11283",
        primary: true
      },
      {
        id: "d006-c002",
        credentialId: "ORT-001",
        status: "Active",
        issueDate: "2019-06-11",
        expiryDate: "2029-06-11",
        licenseNumber: "SPORT-62183",
        primary: false
      }
    ]
  },

  {
    id: "doc-007",
    firstName: "Linda",
    lastName: "Nguyen",
    displayName: "Linda Nguyen, MD",
    role: "Pathologist",
    specialty: "Pathology",
    specialtyCode: "PAT",
    department: "Laboratory",
    facility: "Green Valley Hospital",
    photoUrl: null,
    email: "lnguyen@gvh.org",
    phone: "555-881-3382",
    credentials: [
      {
        id: "d007-c001",
        credentialId: "PAT-000",
        status: "Active",
        issueDate: "2016-09-01",
        expiryDate: "2026-09-01",
        licenseNumber: "PATH-33190",
        primary: true
      },
      {
        id: "d007-c002",
        credentialId: "PAT-001",
        status: "Active",
        issueDate: "2020-04-01",
        expiryDate: "2030-04-01",
        licenseNumber: "CYTO-66110",
        primary: false
      }
    ]
  },

  {
    id: "doc-008",
    firstName: "Robert",
    lastName: "Daniels",
    displayName: "Robert Daniels, MD",
    role: "Pulmonary & Critical Care Specialist",
    specialty: "Pulmonary & Critical Care",
    specialtyCode: "PCC",
    department: "Critical Care",
    facility: "Unity General Hospital",
    photoUrl: null,
    email: "rdaniels@unity.org",
    phone: "555-662-1900",
    credentials: [
      {
        id: "d008-c001",
        credentialId: "PCC-000",
        status: "Active",
        issueDate: "2015-01-01",
        expiryDate: "2025-01-01",
        licenseNumber: "PCC-22101",
        primary: true
      },
      {
        id: "d008-c002",
        credentialId: "PCC-003",
        status: "Active",
        issueDate: "2021-03-01",
        expiryDate: "2031-03-01",
        licenseNumber: "CCUS-88314",
        primary: false
      }
    ]
  },

  {
    id: "doc-009",
    firstName: "Sofia",
    lastName: "Martinez",
    displayName: "Sofia Martinez, MD",
    role: "Infectious Disease Specialist",
    specialty: "Infectious Disease",
    specialtyCode: "IDN",
    department: "Internal Medicine",
    facility: "Central Medical Clinic",
    photoUrl: null,
    email: "smartinez@cmc.org",
    phone: "555-228-9920",
    credentials: [
      {
        id: "d009-c001",
        credentialId: "IDN-000",
        status: "Active",
        issueDate: "2019-07-01",
        expiryDate: "2029-07-01",
        licenseNumber: "ID-55211",
        primary: true
      },
      {
        id: "d009-c002",
        credentialId: "IDN-001",
        status: "Active",
        issueDate: "2020-08-01",
        expiryDate: "2030-08-01",
        licenseNumber: "HIV-77492",
        primary: false
      }
    ]
  },

  {
    id: "doc-010",
    firstName: "Michael",
    lastName: "Reed",
    displayName: "Michael Reed, MD",
    role: "Oncologist",
    specialty: "Medical Oncology",
    specialtyCode: "ONC",
    department: "Oncology",
    facility: "Northfield Cancer Center",
    photoUrl: null,
    email: "mreed@ncc.org",
    phone: "555-339-5521",
    credentials: [
      {
        id: "d010-c001",
        credentialId: "ONC-000",
        status: "Active",
        issueDate: "2014-02-01",
        expiryDate: "2024-02-01",
        licenseNumber: "ONC-22812",
        primary: true
      },
      {
        id: "d010-c002",
        credentialId: "ONC-003",
        status: "Active",
        issueDate: "2020-05-01",
        expiryDate: "2030-05-01",
        licenseNumber: "BMT-77429",
        primary: false
      }
    ]
  },

  {
    id: "doc-011",
    firstName: "Hannah",
    lastName: "Cole",
    displayName: "Hannah Cole, MD",
    role: "Dermatologist",
    specialty: "Dermatology",
    specialtyCode: "DER",
    department: "Dermatology",
    facility: "Coastal Skin Institute",
    photoUrl: null,
    email: "hcole@csi.org",
    phone: "555-772-8801",
    credentials: [
      {
        id: "d011-c001",
        credentialId: "DER-000",
        status: "Active",
        issueDate: "2016-04-01",
        expiryDate: "2026-04-01",
        licenseNumber: "DER-44319",
        primary: true
      },
      {
        id: "d011-c002",
        credentialId: "DER-002",
        status: "Active",
        issueDate: "2020-01-01",
        expiryDate: "2030-01-01",
        licenseNumber: "MOHS-91172",
        primary: false
      }
    ]
  },

  {
    id: "doc-012",
    firstName: "Jacob",
    lastName: "Patterson",
    displayName: "Jacob Patterson, MD",
    role: "Pediatrician",
    specialty: "Pediatrics",
    specialtyCode: "PED",
    department: "Pediatrics",
    facility: "Bright Horizons Children's Hospital",
    photoUrl: null,
    email: "jpatterson@bhch.org",
    phone: "555-611-2190",
    credentials: [
      {
        id: "d012-c001",
        credentialId: "PED-000",
        status: "Active",
        issueDate: "2018-02-01",
        expiryDate: "2028-02-01",
        licenseNumber: "PED-88291",
        primary: true
      },
      {
        id: "d012-c002",
        credentialId: "PED-003",
        status: "Active",
        issueDate: "2020-09-01",
        expiryDate: "2030-09-01",
        licenseNumber: "PCARD-66219",
        primary: false
      }
    ]
  }
];
