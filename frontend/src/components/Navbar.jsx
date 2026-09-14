import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LumicorePro from './LumicorePro';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <LumicorePro />
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.path} to={l.path} className="text-sm font-medium hover:text-primary transition-colors" style={{ color: loc.pathname === l.path ? '#ea580c' : '#475569' }}>
              {l.label}
            </Link>
          ))}
          <span className="hidden lg:inline-block text-sm font-bold" style={{ color: '#ea580c' }}>Storefront Pro</span>
          <Link to="/contact" className="btn-primary text-sm">Storefront Pro Free Demo</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 pb-4 pt-2">
          {links.map(l => (
            <Link key={l.path} to={l.path} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-primary">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 text-sm text-center w-full">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
