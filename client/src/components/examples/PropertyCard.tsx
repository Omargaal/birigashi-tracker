import PropertyCard from '../PropertyCard';

export default function PropertyCardExample() {
  const exampleProperty = {
    id: 'alina',
    name: 'Alina Ridge',
    unit: 'Two-Bed (E703)',
    totalUSD: 91963,
    investors: ['AA', 'HH', 'OG'],
    payments: [
      { type: 'Deposit 40%', month: 'May 2025', amount: 36785, dueDate: new Date(2025, 4, 1), status: 'Fully Paid to Developer', paidBy: { AA: true, HH: true, OG: false } },
      { type: '2nd Payment', month: 'Jun 2025', amount: 9196, dueDate: new Date(2025, 5, 1), status: 'Fully Paid to Developer', paidBy: { AA: true, HH: true, OG: true } },
      { type: '3rd Payment', month: 'Jul 2025', amount: 9196, dueDate: new Date(2025, 6, 1), status: 'Pending', paidBy: { AA: true, HH: true, OG: true } },
    ]
  };

  return <PropertyCard property={exampleProperty} />;
}
