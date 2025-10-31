import { Card } from '@/components/ui/card';
import { useEffect, useRef } from 'react';

interface PaymentStatusChartProps {
  totalPaid: number;
  totalRemaining: number;
}

export default function PaymentStatusChart({ totalPaid, totalRemaining }: PaymentStatusChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const total = totalPaid + totalRemaining;
    const paidPercent = totalPaid / total;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + (2 * Math.PI * paidPercent));
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgb(16, 185, 129)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2 + (2 * Math.PI * paidPercent), -Math.PI / 2 + 2 * Math.PI);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = 'rgb(239, 68, 68)';
    ctx.fill();
  }, [totalPaid, totalRemaining]);

  return (
    <Card className="p-3 flex-shrink-0 md:w-1/3 flex flex-col" data-testid="card-payment-status">
      <div className="text-xs font-medium text-card-foreground mb-1" data-testid="text-chart-title">
        Payment Status
      </div>
      <div className="flex-1 relative min-h-[120px]">
        <canvas 
          ref={canvasRef} 
          width={200} 
          height={120}
          className="w-full h-full"
          data-testid="canvas-pie-chart"
        />
      </div>
      <div className="text-xs text-muted-foreground mt-1 font-mono" data-testid="text-total">
        Total: ${(totalPaid + totalRemaining).toLocaleString()}
      </div>
      <div className="flex gap-4 mt-2 text-[10px]">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-payment-paid" />
          <span className="text-muted-foreground">Paid: ${totalPaid.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-payment-overdue" />
          <span className="text-muted-foreground">Remaining: ${totalRemaining.toLocaleString()}</span>
        </div>
      </div>
    </Card>
  );
}
