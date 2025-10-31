import { User } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface InvestorCardProps {
  investor: string;
  amount: number;
  properties: string[];
}

export default function InvestorCard({ investor, amount, properties }: InvestorCardProps) {
  const propertyShortNames = properties.map(p => p.split(' ')[0]).join(', ');
  
  return (
    <Card 
      className="p-3 min-w-[120px] border-payment-pending/20 bg-card"
      data-testid={`card-investor-${investor}`}
    >
      <div className="flex justify-between items-start gap-2">
        <div className="flex items-center gap-1">
          <User className="text-primary w-3.5 h-3.5" data-testid={`icon-user-${investor}`} />
          <span className="font-medium text-card-foreground text-sm" data-testid={`text-investor-${investor}`}>
            {investor}
          </span>
        </div>
        <span className="font-mono font-bold text-payment-pending text-sm" data-testid={`text-amount-${investor}`}>
          ${Math.round(amount).toLocaleString()}
        </span>
      </div>
      {propertyShortNames && (
        <div className="mt-2">
          <p className="text-[10px] text-muted-foreground mb-1">For:</p>
          <p className="text-[10px] text-primary font-medium" data-testid={`text-properties-${investor}`}>
            {propertyShortNames}
          </p>
        </div>
      )}
    </Card>
  );
}
