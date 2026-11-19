// Starting data copied from the "Bank Balance Report" Google Sheet.
// Only names and banks are here - no amounts. Balances start at 0
// and we'll bring in the real opening balances in a later step.
//
// This file is used ONCE by the "Load starting data" button.

// From the "List" tab
export const lists = {
  // Column A - who can enter transactions
  employees: ['Easwar', 'Santhosh', 'Sajitha', 'jegan', 'Uma', 'Jasmeen'],

  // Column B - banks used when the person has no accounts in Balance Summary
  banks: ['Axis', 'HDFC', 'Kotak', 'Axis Escrow', 'RBL', 'KVB', 'Dena', 'Others', 'ICICI Bank', 'ICICI'],

  // Column C - "To Name" choices for type "Others"
  toNames: [
    'SFHL', 'Percetion', 'Others', 'Pravin', 'Neeta', 'Praneeth', 'Badami Bai', 'Pravin HUF',
    'Praneeth HUF', 'PMC', 'Ruchita', 'Shivani', 'May Flower', 'SN Construction',
    'SRG Construction', 'Sanghvi Finance', 'Joint Property', 'Home Loan -Pravin', 'Customer',
    'Vestas Wind Tech India Pvt Ltd', 'Jaze Networks Pvt Ltd', 'Air Liqude Medical Pvt Ltd',
    'Uxmint', 'Grace World', 'Richinn', 'Oxford', 'Namasvi Enterprises', 'Chennai Paint Factory',
    'Sri Ganapathi Enterprises', 'Metal Fab Corporation', 'Apex Doors N Floors',
    'H M Industrial Suppliers', 'Pransh Rathod', 'R K S Engineering Industries',
    'R Gate Technologies', 'Windowstein', 'United Facilitas', 'Prabhu Electrical',
    'Lakshmi Sanitations',
  ],

  // Column D - "From Name" choices for type "Others"
  fromNames: [
    'SFHL', 'Percetion', 'Oxford', 'Pravin', 'Neeta', 'Praneeth', 'Badami Bai', 'Pravin HUF',
    'Praneeth HUF', 'PMC', 'Ruchita', 'Shivani', 'May Flower', 'SN Construction',
    'SRG Construction', 'Sanghvi Finance', 'Smart Estate', 'Joint Property', 'Home Loan -Pravin',
    'Customer', 'Vestas Wind Tech India Pvt Ltd', 'Jaze Networks Pvt Ltd', 'BSH Holdings',
    'Uxmint', 'Others', 'Grace World', 'Richinn', 'HP Complex', 'Ayanavaram',
    'Shree Mahalaxmi Enterprises', 'Pransh Rathod', 'Jiaana',
  ],

  // Column E - company departments
  departments: [
    'Finance', 'Engineering', 'Purchase', 'Crm', 'Hr', 'Admin', 'Liasoning', 'Legal',
    'Accounts', 'Marketing', 'Sales', 'CP',
  ],

  // Hard-coded in getFname() for type "Budgeted"
  budgetOwners: ['SFHL', 'Pravin', 'Neeta', 'Praneeth'],
}

// From the "Balance Summary" tab - each owner and their bank accounts
export const accounts = {
  'SFHL': [
    'Axis', 'HDFC', 'Kotak', 'ICICI', 'ICICI-CA', 'ICICI ESCROW', 'ICICI - STP A/c', 'BOI',
    'Happy Card', 'Indian Bank CA', 'Crown-Master Collection Escrow',
    "Crown- Landowner's Escrow", 'Crown- Rera Rentention Escrow', 'Crown Lenders Escrow',
    'Greenwood-ICICI Rera Collection', 'Greenwood-ICICI Rera Retention',
    'Sidharth Square collection account', 'SFHL - Square Retention',
    'Sfhl Sidharth Solitaire Current A/c', 'Sfhl Sidharth Solitaire Mc Escrow A/c',
    'Sfhl Sidharth Solitaire Rera Escrow A/c', 'Sfhl Sidharth Solitaire Escrow A/c',
    'ICICI SIDHARTH BLISS RERA COLLECTION A/C', 'ICICI SIDHARTH BLISS RERA DESIGNATED A/C',
    'ICICI SIDHARTH BLISS CURRENT A/C',
  ],
  'BSH Holdings': ['HDFC', 'ICICI'],
  'Percetion': ['RBL'],
  'Oxford': ['KVB'],
  'Pravin': ['Kotak', 'HDFC', 'Axis', 'RBL', 'KVB', 'South Indian', 'ICICI Bank'],
  'Neeta': ['Kotak', 'HDFC'],
  'Praneeth': ['Kotak', 'HDFC', 'ICICI'],
  'Badami Bai': ['Kotak', 'HDFC'],
  'Pravin HUF': ['Kotak', 'HDFC'],
  'Praneeth HUF': ['HDFC'],
  'Ruchita': ['Kotak', 'HDFC'],
  'Jiaana': ['HDFC'],
  'Jianna Abhay Rathod Beneficiary Trust': ['Kotak'],
  'Shivani': ['Kotak', 'HDFC'],
  'Pransh Rathod': ['HDFC', 'ICICI Bank'],
  'Pransh Rathod Beneficiary Trust': ['Kotak'],
  'May Flower': ['Axis', 'Kotak'],
  'SN Construction': ['HDFC', 'Kotak'],
  'SRG Construction': ['Kotak'],
  'Sanghvi Finance': ['Kotak', 'Dena'],
  'Sanghvi Enterprises': ['ICICI'],
  'Joint Property': ['HDFC'],
  'Home Loan -Pravin': ['HDFC'],
  'PMC': ['HDFC', 'RBL'],
  'Smart Estate': ['Kotak'],
}

// From the "Debtors" tab - borrower (From Name) and their lenders/loans (To Name)
export const debtors = {
  'SFHL': [
    'HDFC Term Loan', 'ICICI Bank OD', 'ICICI Tata Harrier Car-Loan', 'ICICI Term Loan',
    'ICICI Term Loan- Top Up', 'ICICI Term Loan-3', 'Indian Bank Term Loan',
    'Aditya Brila Housing Finance Limited -Loan', 'ICICI Loan For Office Space',
    'Kia Seltos (ICICI Car Loan)', 'Kotak Prime Hundai I10Grand NIOS', 'MAHINDRA XEV 9E(Car-Loan)',
    'Micro labs Pvt Ltd 15%', 'Texin Exports', 'Neeta', 'Praneeth', 'Pravin',
    'SAMRAT HOUSEWARE PRIVATE LIMITED-Loan', 'Tata Capital Housing Finance Ltd',
    'Tata Tiago (ICICI Car Loan)',
  ],
  'Pravin': [
    'Aansh', 'Aashish Kumar Chord', 'Abhay Mahendra Rathod', 'Badami Bai', 'CANY MEHUL KUMAR',
    'Chanda(Nemichand Family)', 'DhanRAJ KOCHAR', 'DHANRAJ KOCHAR-HUF', 'Dhriya Beneficiary Trust',
    'Dixita Nikhil Kavediya', 'Girish Kumar (Naresh Kicha)', 'Goyal International(Prop : Ajay Goyal)',
    'Gulabchand Singhi', 'Harsha R Doshi', 'Hastimal & co-Partners', 'Inderchand Kochar-HUF',
    'Indira Jain', 'Jashar Beneficiary Trust', 'Jayanthilal', 'JAYNESH KUMAR A JAIN',
    'Jithendra K Jain', 'Jithendra Jain HUF', 'Kailash Kumar Chaganraj', 'Kantilal Huf(Jithu)',
    'Kantilal Sheshmal Kavediya HUF', 'Kavitha C Jain', 'Kishore Kumar Otmalji', 'Kishorekumar HUF',
    'Kritika Jain', 'Kusum L Jain', 'L.Senthil', 'MANAKCHAND H U F', 'Mayflower Properties (L)',
    'MENABAI', 'Mohanlal Punamchand HUF', 'Mr Inderchand Kochar', 'N Rajesh Jain HUF',
    'NARENDRA KUMAR O', 'Nemichand H', 'Nemichand Sons HUF', 'Nikhil K Kavediya HUF', 'Nilesh Jain',
    'Nischay R Doshi', 'Omkarmal T Jain', 'Piyush Rathod', 'Pratibha Rathod', 'PRIYANKA ABISHEK.',
    'Priyanka Jain', 'Purav kumar jain', 'Puru Beneficiary Trust', 'R Hema', 'R.RAJESH',
    'RAJESH BHANDARI.', 'Rajkumari Kochar', 'Rakesh Kumar K Jain', 'RAMESH KUMAR KOCHAR',
    'RAMESH KUMAR KOCHAR-HUF', 'Rasila Jain', 'Renu Gehlot', 'Rita Devi', 'Saanya R',
    'SANGEETHA BHANDARI', 'Santhosh Bafna', 'Sarala Kanwar', 'Seema V Jain',
    'SHA KUNAL KUMAR ASHOK KUMAR HUF', 'Shanti Bai', 'Sonal Jain', 'SREYANS KUMAR A. JAIN -HUF',
    'Suresh Rathod', 'SWITCH GEARS (INDIA)', 'SWETHA P KOTHARI', 'T.PANKAJ KOTHARI',
    'Tilokchand T.Jain', 'Trust Worth Finlease Ltd', 'Usha Jain(Kailash Group)', 'Vadami Devi N',
    'Veeral Jain', 'Vimala Kothari', 'Godavari Bai', 'Rohit Kumar Jain', 'Kanthabai',
    'Dileep Bhandari', 'Pamita Khicha', 'KAMAL KUMAR HUF', 'PAARSHV FINANCE AND INVESTMENTS',
    'NISHI KHICHA', 'Kishore Kumar & Sons', 'DHRUVI BAFNA', 'NAVIN KUMAR NAHAR HUF',
    'Praveen Kumar & Sons', 'UPDHYAN CHAND AND SONS', 'LML HOMES LLP', 'N.Saroj', 'Chanda',
    'Girish Kumar M Jain',
  ],
  'Praneeth': [
    'Dhara Arvind Mehta', 'Indira Jain', 'Janatha Metal Industies', 'Kamalabai',
    'Kantilal Sheshmal K HUF', 'Kavitha V Jain', 'Kishore Kumar HUF', 'Kishore Kumar Otmalji',
    'Nitin S Mehta', 'Nitin S Mehta(HUF)', 'Rajesh', 'Ranjana Mehta', 'Sangita S Jain',
    'SANJAY KUMAR C MEHT', 'SUN BRIGHT CHEMICALS', 'Multan Mal and Sons  ( Vipul  Sir )',
    'Vaishali', 'Champalal H Mehta', 'Aravind Jayantilal M', 'Rita Devi', 'Usha', 'Sachin Bafna',
    'Mangal Chand Bafana',
  ],
  'Neeta': [
    'ASHISH KANTILAL KAVEDIYA HUF', 'Champalal H Mehta Huf', 'Dixita Nikhil Kavediya',
    'Hastimal & Co (Lendor)', 'Himaira Rathod Benefit Trust', 'Indira Jain',
    'Kantilal Shesmal Kavediya Jain  HUF', 'Kishore Kumar HUF', 'KISHORE KUMAR OTMALJI',
    'Nikhil Kavediya HUF', 'Priyanka jain', 'Rishka Rathod Benefit Trust', 'Rohit Jain',
    'sanghvi Sales Agencies', 'Sangita S Jain', 'Sanjay kumar champalal Mehta HUF',
    'Santhosh Bafna', 'Satish Bhatia', 'SWITCHGEARS (INDIA)',
  ],
}

// From the "Investment" tab - each investor (Name) and their instruments
export const investments = {
  'SFHL': [
    'Indian Bank Fixed Deposit', 'Indian Bank DSRA Deposit', 'TATA Capital-DSRA Deposit',
    'ICICI Liquid Fund', 'UTI Liquid Fund Collection Account', 'ICICI Pru Liquid Fund',
    'HDFC Liquid Fund', 'Aditya Birla Housing- DSRA Deposit', 'Aditya Birla Sun Life Insurance Co Ltd',
    'Indian Bank Term Deposit', 'FD',
  ],
  'BSH Holdings': [
    'QUANT MULTI ASSET FUND-Rent', 'QUANT MULTI ASSET FUND', 'ICICI PRUDENTIAL EQUITY & DEBT FUND-Rent',
    'ICICI PRUDENTIAL EQUITY & DEBT FUND', 'NIPPON INDIA MULTI  ASSET ALLOCATION FUND-Rent',
    'NIPPON INDIA MULTI  ASSET ALLOCATION FUND', 'HDFC BALANCED ADVANTAGE FUND-Rent',
    'HDFC BALANCED ADVANTAGE FUND', 'INVESCO INDIA EQUITY & BOND FUND-Rent',
    'INVESCO INDIA EQUITY & BOND FUND', 'Motilal oswal midcap fund-Rent', 'Kotak Liquid Fund',
    'Axis Liquid Fund', 'HDFC Liquid Fund', 'FIXED DEPOSIT',
  ],
  'Pravin': [
    'HDFC SMALL CAP FUND - DIRECT PLAN', 'SUNDARAM MID CAP FUND - DIRECT PLAN',
    'KOTAK FLEXICAP FUND - DIRECT PLAN', 'NIPPON INDIA SMALL CAP FUND - DIRECT PLAN',
    'CANARA ROBECO EMERGING EQUITIES - DIRECT PLAN', 'HDFC MID-CAP OPPORTUNITIES FUND - DIRECT PLAN',
    'KOTAK MULTICAP FUND - DIRECT PLAN', 'SBI BLUE CHIP FUND - DIRECT PLAN',
    'TATA DIGITAL INDIA FUND - DIRECT PLAN', 'PARAG PARIKH FLEXI CAP FUND - DIRECT PLAN',
    'QUANT SMALL CAP FUND - DIRECT PLAN', 'PPF',
  ],
  'Pravin HUF': [
    'Canara Robeco Emerging Equities', 'Mirae Asset India Equity Fund',
    'NIPPON INDIA PHARMA FUND - GROWTH', 'NIPPON INDIA SMALL CAP FUND - GROWTH', 'SUNDARAM MUTUAL FUND',
  ],
  'Neeta': [
    'SBI Small Cap Fund - Direct Plan', 'Tata Digital India Fund - Direct Plan',
    'Canara Robeco Emerging Equities - Direct Plan', 'SBI Magnum Midcap Fund - Direct Plan',
    'DSP Small Cap Fund - Direct Plan', 'DSP Equity Opportunities Fund - Direct Plan',
    'Invesco India Contra Fund - Direct Plan', 'Sundaram Mid Cap Fund - Direct Plan',
    'Mirae Asset Large Cap Fund - Direct Plan', 'Mirrae Asset Focused Fund - Direct Plan',
    'Mirae Asset Emerging Bluechip Fund', 'Canara Robeco Emerging Equities Fund', 'PPF',
  ],
  'Ruchita': [
    'IDFC Premier Equity Plan A', 'DSP Black Rock Micro Cap Fund',
    'Sundaram BNP Paribas Select Midcap - Growth', 'Canara Robeco Emerging Equities Fund -1',
    'Sundaram Midcap Fund', 'PPF',
  ],
  'Praneeth': [
    'Sundaram Mid Cap Fund - Direct Plan', 'Axis Flexi Cap Fund Direct Plan Growth',
    'Canara Robecco Emerging  Equities - Direct Plan', 'SBI Magnum Midcap Fund - Direct Plan',
    'Parag Parikh Flexi Cap Fund - Direct Plan Growth', 'PPF',
  ],
  'Shivani': [
    'Axis Flexi Cap Fund Direct Plan Growth', 'Mirae Asset Midcap Fund - Direct Plan - Growth',
    'NIPPON INDIA SMALL CAP FUND - DIRECT PLAN', 'Parag Parikh Flexi Cap Fund - Direct Plan Growth', 'PPF',
  ],
  'Pransh Rathod Beneficiary Trust': [
    'Hdfc Nifty500 Multicap 50:25:25 Index Fund', 'Mirae Asset Flexicap Fund', 'SBI Small Cap Fund',
  ],
  'Jianna Abhay Rathod Beneficiary Trust': [
    'SBI Small Cap Fund', 'Hdfc Nifty500 Multicap 50:25:25 Index Fund', 'Mirae Asset Flexicap Fund',
  ],
  'Jiaana': ['PPF'],
  'Badami Bai': ['PPF'],
  'Pransh Rathod': ['PPF'],
}

// From the "Source" tab - income: who receives it (name), who pays it (from), and why
export const sources = [
  { name: 'Pravin', from: 'SFHL', purpose: 'SALARY' },
  { name: 'Neeta', from: 'SFHL', purpose: 'SALARY' },
  { name: 'Ruchita', from: 'SFHL', purpose: 'SALARY' },
  { name: 'Praneeth', from: 'SFHL', purpose: 'SALARY' },
  { name: 'Praneeth', from: 'Shree Mahalaxmi Enterprises', purpose: 'SALARY' },
  { name: 'Shivani', from: 'SFHL', purpose: 'SALARY' },
  { name: 'SFHL', from: 'Vestas Wind Tech India Pvt Ltd', purpose: 'RENT' },
  { name: 'SFHL', from: 'QUANTZI INFOTECH PRIVATE LIMITED', purpose: 'RENT' },
  { name: 'SFHL', from: 'Uxmint', purpose: 'RENT & MAINTENANCE' },
  { name: 'SFHL', from: 'Grace World', purpose: 'RENT' },
  { name: 'SFHL', from: 'BLAZE ENSOLUTIONS PRIVATE LIMITED', purpose: 'RENT & MAINTENANCE' },
  { name: 'BSH Holdings', from: 'Shree Mahalakshmi Enterprises -BSH HOLDINGS RENT', purpose: 'RENT' },
  { name: 'Praneeth', from: 'Ramalakchmi', purpose: 'RENT' },
  { name: 'Ruchita', from: 'Ramesh Babu', purpose: 'RENT' },
  { name: 'Ruchita', from: 'Kumaran', purpose: 'RENT' },
  { name: 'Neeta', from: 'SFHL', purpose: 'RENT' },
  { name: 'Neeta', from: 'Flat White Capital Private Limited - Rent', purpose: 'RENT' },
  { name: 'BSH Holdings', from: 'APG city Gas Pvt Ltd', purpose: 'RENT' },
  { name: 'BSH Holdings', from: 'OAK Forex Pvt Ltd', purpose: 'RENT' },
]