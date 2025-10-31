import { Property } from './types';

export const properties: Property[] = [
  {
    id: 'kindaruma',
    name: 'Kindaruma Homes',
    unit: 'One-Bed+StudyRoom (B301)',
    totalUSD: 66747,
    investors: ['AA', 'HH', 'MY'],
    payments: [
      { type: '1 Bed + Study Apt', amount: 55641, dueDate: null, status: 'Fully Paid', paidBy: { AA: true, HH: true, MY: true } },
      { type: 'Developer Legal', amount: 3625, dueDate: null, status: 'Fully Paid', paidBy: { AA: true, HH: true, MY: true } },
      { type: 'JWG Legal', amount: 2309, dueDate: null, status: 'Fully Paid', paidBy: { AA: true, HH: true, MY: true } },
      { type: 'Furnishing', amount: 5172, dueDate: null, status: 'Fully Paid', paidBy: { AA: true, HH: true, MY: true } }
    ]
  },
  {
    id: 'alina',
    name: 'Alina Ridge',
    unit: 'Two-Bed (E703)',
    totalUSD: 91963,
    investors: ['AA', 'HH', 'OG'],
    payments: [
      { type: 'Deposit 40%', month: 'May 2025', amount: 36785, dueDate: new Date(2025, 4, 1), status: 'Fully Paid to Developer', paidBy: { AA: true, HH: true, OG: false } },
      { type: '2nd Payment', month: 'Jun 2025', amount: 9196, dueDate: new Date(2025, 5, 1), status: 'Fully Paid to Developer', paidBy: { AA: true, HH: true, OG: true } },
      { type: '3rd Payment', month: 'Jul 2025', amount: 9196, dueDate: new Date(2025, 6, 1), status: 'Fully Paid to Developer', paidBy: { AA: true, HH: true, OG: true } },
      { type: '4th Payment', month: 'Aug 2025', amount: 9196, dueDate: new Date(2025, 7, 1), status: 'Fully Paid to Developer', paidBy: { AA: true, HH: true, OG: true } },
      { type: '5th Payment', month: 'Sep 2025', amount: 9196, dueDate: new Date(2025, 8, 1), status: 'Pending', paidBy: { AA: true, HH: true, OG: true } },
      { type: '6th Payment', month: 'Oct 2025', amount: 9196, dueDate: new Date(2025, 9, 1), status: 'Pending', paidBy: { AA: false, HH: false, OG: false } },
      { type: '7th Payment', month: 'Nov 2025', amount: 9196, dueDate: new Date(2025, 10, 1), status: 'Pending', paidBy: { AA: false, HH: false, OG: false } }
    ]
  },
  {
    id: 'finsbury',
    name: 'Finsbury Heights',
    unit: 'Two-Bed (12xx)',
    totalUSD: 65000,
    investors: ['AA', 'HH', 'MY', 'OG'],
    payments: [
      { type: 'Deposit 50%', month: 'May 2025', amount: 30000, dueDate: new Date(2025, 4, 1), status: 'Paid', paidBy: { AA: true, HH: true, MY: true, OG: true } },
      { type: '2nd Payment', month: 'Jun 2025', amount: 7000, dueDate: new Date(2025, 5, 1), status: 'Paid', paidBy: { AA: 2300, HH: 2300, MY: 2400, OG: 0 } },
      { type: '3rd Payment', month: 'Jul 2025', amount: 7000, dueDate: new Date(2025, 6, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } },
      { type: '4th Payment', month: 'Aug 2025', amount: 7000, dueDate: new Date(2025, 7, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } },
      { type: '5th Payment', month: 'Sep 2025', amount: 7000, dueDate: new Date(2025, 8, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } },
      { type: '6th Payment', month: 'Oct 2025', amount: 7000, dueDate: new Date(2025, 9, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } }
    ]
  },
  {
    id: 'superwestbury',
    name: 'Super-Westbury',
    unit: 'One-Bed+Balcony (1704)',
    totalUSD: 55642,
    investors: ['AA', 'HH', 'MY', 'OG'],
    payments: [
      { type: 'Deposit 1.4%', month: 'Apr 2025', amount: 773, dueDate: new Date(2025, 3, 1), status: 'Fully Paid to Developer', paidBy: { AA: true, HH: true, MY: false, OG: false } },
      { type: '2nd Payment', month: 'May 2025', amount: 10356, dueDate: new Date(2025, 4, 1), status: 'Fully Paid to Developer', paidBy: { AA: true, HH: true, MY: true, OG: true } },
      { type: '3rd Payment', month: 'Sep 2025', amount: 11128, dueDate: new Date(2025, 8, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } },
      { type: '4th Payment', month: 'Mar 2026', amount: 11128, dueDate: new Date(2026, 2, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } },
      { type: '5th Payment', month: 'Sep 2026', amount: 11128, dueDate: new Date(2026, 8, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } },
      { type: '6th Payment', month: 'Dec 2026', amount: 11128, dueDate: new Date(2026, 11, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } }
    ]
  },
  {
    id: 'tsavorite',
    name: 'TSavorite Gardens',
    unit: 'Two-Bed (C1502)',
    totalUSD: 74200,
    investors: ['AA', 'HH', 'MY', 'OG'],
    payments: [
      { type: 'Deposit 2.1%', month: 'May 2025', amount: 1547, dueDate: new Date(2025, 4, 1), status: 'Fully Paid to Developer', paidBy: { AA: true, HH: true, MY: false, OG: false } },
      { type: '2nd Payment', month: 'Dec 2025', amount: 5874, dueDate: new Date(2025, 11, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } },
      { type: '3rd Payment', month: 'Mar 2026', amount: 16695, dueDate: new Date(2026, 2, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } },
      { type: '4th Payment', month: 'Jun 2026', amount: 16695, dueDate: new Date(2026, 5, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } },
      { type: '5th Payment', month: 'Sep 2026', amount: 16695, dueDate: new Date(2026, 8, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } },
      { type: '6th Payment', month: 'Dec 2026', amount: 16695, dueDate: new Date(2026, 11, 1), status: 'Pending', paidBy: { AA: false, HH: false, MY: false, OG: false } }
    ]
  }
];

export const allInvestors = ['AA', 'HH', 'MY', 'OG'];
