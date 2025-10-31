import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, AlertCircle, Clock, X } from 'lucide-react';
import { Property } from '@shared/types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const today = new Date();
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(today.getDate() + 30);

  const getPaymentStatusIcon = (status: string, isDueSoon: boolean) => {
    if (status.includes('Paid')) {
      return <Check className="w-4 h-4 text-payment-paid" />;
    }
    if (isDueSoon) {
      return <AlertCircle className="w-4 h-4 text-payment-pending" />;
    }
    return <Clock className="w-4 h-4 text-muted-foreground" />;
  };

  const getInvestorPaymentCell = (paidBy: boolean | number) => {
    if (typeof paidBy === 'boolean') {
      return paidBy ? (
        <Check className="w-4 h-4 text-payment-paid mx-auto" />
      ) : (
        <X className="w-4 h-4 text-payment-overdue mx-auto" />
      );
    } else if (typeof paidBy === 'number') {
      return <span className="text-payment-paid font-mono text-xs">${paidBy.toLocaleString()}</span>;
    }
    return <span className="text-muted-foreground">—</span>;
  };

  return (
    <Card className="overflow-hidden" data-testid={`card-property-${property.id}`}>
      <div 
        className="p-3 cursor-pointer hover-elevate"
        onClick={() => setIsExpanded(!isExpanded)}
        data-testid={`button-toggle-${property.id}`}
      >
        <div className="flex justify-between items-start gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-card-foreground text-sm truncate" data-testid={`text-name-${property.id}`}>
              {property.name}
            </h3>
            <p className="text-xs text-muted-foreground truncate" data-testid={`text-unit-${property.id}`}>
              {property.unit}
            </p>
          </div>
          <Badge variant="secondary" className="text-xs shrink-0" data-testid={`badge-investors-${property.id}`}>
            {property.investors.length} inv
          </Badge>
        </div>
      </div>
      
      {isExpanded && (
        <div className="border-t border-card-border p-3" data-testid={`table-container-${property.id}`}>
          <div className="overflow-x-auto -mx-3 px-3">
            <table className="w-full min-w-[550px] text-xs">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="py-2 px-2 font-medium">Payment</th>
                  <th className="py-2 px-2 font-medium">Due Date</th>
                  <th className="py-2 px-2 font-medium">Amount</th>
                  <th className="py-2 px-2 font-medium">Status</th>
                  {property.investors.map(inv => (
                    <th key={inv} className="py-2 px-2 font-medium text-center">{inv}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {property.payments.map((pmt, idx) => {
                  const isDueSoon = pmt.dueDate && pmt.dueDate >= today && pmt.dueDate <= thirtyDaysFromNow;
                  const rowClass = isDueSoon ? 'bg-payment-pending/10' : 'border-b border-card-border';
                  const dueStr = pmt.month || (pmt.dueDate?.toLocaleDateString() || 'N/A');
                  
                  return (
                    <tr key={idx} className={rowClass} data-testid={`row-payment-${property.id}-${idx}`}>
                      <td className="py-2 px-2 font-medium text-card-foreground">{pmt.type}</td>
                      <td className="py-2 px-2 text-muted-foreground">{dueStr}</td>
                      <td className="py-2 px-2 font-medium font-mono">${pmt.amount.toLocaleString()}</td>
                      <td className="py-2 px-2">
                        <div className="flex items-center gap-1">
                          {getPaymentStatusIcon(pmt.status, !!isDueSoon)}
                          <span className={pmt.status.includes('Paid') ? 'text-payment-paid' : (isDueSoon ? 'text-payment-pending' : 'text-muted-foreground')}>
                            {pmt.status}
                          </span>
                        </div>
                      </td>
                      {property.investors.map(inv => (
                        <td key={inv} className="py-2 px-2 text-center">
                          {getInvestorPaymentCell(pmt.paidBy[inv])}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Card>
  );
}
