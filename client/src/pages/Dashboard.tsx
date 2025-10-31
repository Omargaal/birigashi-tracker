import { useMemo } from 'react';
import { AlertCircle } from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';
import InvestorCard from '@/components/InvestorCard';
import PaymentStatusChart from '@/components/PaymentStatusChart';
import PropertyCard from '@/components/PropertyCard';
import { properties, allInvestors } from '@shared/investmentData';
import { UpcomingPayment } from '@shared/types';

export default function Dashboard() {
  const { upcomingPayments, totalPaid, totalRemaining } = useMemo(() => {
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);

    const upcoming: Record<string, UpcomingPayment> = {};
    allInvestors.forEach(inv => {
      upcoming[inv] = { total: 0, properties: [] };
    });

    let paid = 0;
    let remaining = 0;

    properties.forEach(prop => {
      prop.payments.forEach(pmt => {
        const share = pmt.amount / prop.investors.length;
        
        prop.investors.forEach(inv => {
          if (typeof pmt.paidBy[inv] === 'boolean' && pmt.paidBy[inv]) {
            paid += share;
          } else if (typeof pmt.paidBy[inv] === 'number') {
            paid += pmt.paidBy[inv];
            remaining += (share - pmt.paidBy[inv]);
          } else if (!pmt.paidBy[inv] || pmt.paidBy[inv] === false) {
            remaining += share;
          }
        });

        if (pmt.dueDate && pmt.dueDate >= today && pmt.dueDate <= thirtyDaysFromNow) {
          prop.investors.forEach(inv => {
            const payment = pmt.paidBy[inv];
            const isUnpaid = payment === false || !payment || (typeof payment === 'number' && payment === 0);
            if (isUnpaid) {
              upcoming[inv].total += share;
              if (!upcoming[inv].properties.includes(prop.name)) {
                upcoming[inv].properties.push(prop.name);
              }
            }
          });
        }
      });
    });

    return { upcomingPayments: upcoming, totalPaid: paid, totalRemaining: remaining };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="px-4 py-4 space-y-6 max-w-7xl mx-auto">
        <section>
          <h2 className="text-sm font-semibold text-card-foreground mb-3 flex items-center gap-1.5" data-testid="heading-upcoming">
            <AlertCircle className="text-payment-pending w-4 h-4" />
            Due within 30 days
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="overflow-x-auto pb-2 -mx-2 px-2 flex-shrink-0 md:w-2/3">
              <div className="flex gap-3 min-w-max" data-testid="container-investor-cards">
                {allInvestors.map(inv => (
                  <InvestorCard 
                    key={inv}
                    investor={inv}
                    amount={upcomingPayments[inv].total}
                    properties={upcomingPayments[inv].properties}
                  />
                ))}
              </div>
            </div>
            
            <PaymentStatusChart totalPaid={totalPaid} totalRemaining={totalRemaining} />
          </div>
        </section>

        <section className="space-y-3" data-testid="container-properties">
          {properties.map(prop => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </section>
      </main>
    </div>
  );
}
