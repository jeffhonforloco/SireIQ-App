import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, BrainCircuit, Lightbulb, UserCircle } from 'lucide-react';
import { ROUTES } from '../../utils/constants';

const navItems = [
  { to: ROUTES.DASHBOARD, icon: LayoutDashboard, label: 'Dashboard' },
  { to: ROUTES.STRATEGY, icon: BrainCircuit, label: 'Strategy' },
  { to: ROUTES.TRAINING, icon: Lightbulb, label: 'Training' },
  { to: ROUTES.PROFILE, icon: UserCircle, label: 'Profile' },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="grid grid-cols-4">
        {navItems.map(({ to, icon: Icon, label }) => (
          <button
            key={to}
            onClick={() => navigate(to)}
            className={`flex flex-col items-center justify-center py-2 ${
              location.pathname === to
                ? 'text-indigo-600'
                : 'text-gray-600'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}