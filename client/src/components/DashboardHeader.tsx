import { Home, AlertCircle } from 'lucide-react';
import PublishButton from './PublishButton';

export default function DashboardHeader() {
  return (
    <header className="bg-card border-b border-card-border sticky top-0 z-50" data-testid="header-dashboard">
      <div className="px-4 py-3 flex items-center gap-2 flex-wrap">
        <Home className="text-primary w-5 h-5" data-testid="icon-home" />
        <div className="flex-1 min-w-0">
          <h1 className="font-bold text-card-foreground text-base" data-testid="text-title">
            BiriGashi Tracker
          </h1>
          <p className="text-xs text-muted-foreground" data-testid="text-subtitle">
            Compact investment dashboard
          </p>
        </div>
        <PublishButton />
        <AlertCircle className="text-payment-pending w-5 h-5" data-testid="icon-alert" />
      </div>
    </header>
  );
}
