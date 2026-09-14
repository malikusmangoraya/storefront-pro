import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Layers, RefreshCw, CreditCard } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }} />
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="section-eyebrow">ECOMMERCE ENGINE</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6" style={{ color: '#431407' }}>
                Headless E-Commerce Engine
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                API-first headless commerce with inventory sync, checkout optimization, and analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Get Started <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/services" className="btn-outline">View Services</Link>
              </div>
              <ul className="mt-8 space-y-3 max-w-sm">
                <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white" style={{ background: 'linear-gradient(135deg, #ea580c, #6366f1)' }}><ShoppingCart className="h-4 w-4" /></span>
                <span className="text-sm font-medium text-slate-700">Enterprise-grade security and compliance</span>
              </li>
                <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white" style={{ background: 'linear-gradient(135deg, #ea580c, #6366f1)' }}><Layers className="h-4 w-4" /></span>
                <span className="text-sm font-medium text-slate-700">Global support across time zones, 24/7</span>
              </li>
                <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white" style={{ background: 'linear-gradient(135deg, #ea580c, #6366f1)' }}><RefreshCw className="h-4 w-4" /></span>
                <span className="text-sm font-medium text-slate-700">Seamless integrations with your stack</span>
              </li>
              </ul>
            </div>
            <div className="hidden lg:block relative hero-3d-scene">
            <div className="hero-3d-card">
            <img src="assets/store/hero.jpg" alt="Storefront Pro product overview" className="w-full h-96 lg:h-105 rounded-2xl object-cover shadow-2xl" loading="eager" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl border border-slate-100 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700">Trusted by 50,000+ businesses worldwide</span>
            </div>
          </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-eyebrow">What We Offer</span>
              <h2 className="section-heading">Why Choose Storefront Pro?</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-xl border border-slate-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #ea580c, #6366f1)' }}>
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#431407' }}>Headless API</h3>
                <p className="text-sm text-slate-500 leading-relaxed">RESTful and GraphQL APIs for any frontend</p>
              </div>
              <div className="relative mt-5 overflow-hidden rounded-lg" style={{ height: 120 }}>
                <img src="assets/store/storefront.jpg" alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(2,6,23,.4), transparent)" }} />
              </div>
            </div>
              <div className="group rounded-xl border border-slate-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #ea580c, #6366f1)' }}>
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#431407' }}>Inventory Sync</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Real-time stock sync across channels and warehouses</p>
              </div>
              <div className="relative mt-5 overflow-hidden rounded-lg" style={{ height: 120 }}>
                <img src="assets/store/shopping.jpg" alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(2,6,23,.4), transparent)" }} />
              </div>
            </div>
              <div className="group rounded-xl border border-slate-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #ea580c, #6366f1)' }}>
                  <RefreshCw className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#431407' }}>Smart Checkout</h3>
                <p className="text-sm text-slate-500 leading-relaxed">One-click checkout with payment routing</p>
              </div>
              <div className="relative mt-5 overflow-hidden rounded-lg" style={{ height: 120 }}>
                <img src="assets/store/shopping.jpg" alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(2,6,23,.4), transparent)" }} />
              </div>
            </div>
              <div className="group rounded-xl border border-slate-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #ea580c, #6366f1)' }}>
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#431407' }}>Conversion Analytics</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Funnel tracking and cart abandonment alerts</p>
              </div>
              <div className="relative mt-5 overflow-hidden rounded-lg" style={{ height: 120 }}>
                <img src="assets/store/hero.jpg" alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(2,6,23,.4), transparent)" }} />
              </div>
            </div>
            </div>
            <img src="assets/store/storefront.jpg" alt="Storefront Pro features" className="w-full h-52 object-cover rounded-xl" loading="lazy" />
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: '#f8fafc' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1" style={{ color: '#ea580c' }}>{'8K+'}</div>
              <div className="text-sm text-slate-500">Stores</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1" style={{ color: '#ea580c' }}>{'2M+'}</div>
              <div className="text-sm text-slate-500">Orders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1" style={{ color: '#ea580c' }}>{'$320M'}</div>
              <div className="text-sm text-slate-500">Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1" style={{ color: '#ea580c' }}>{'<800ms'}</div>
              <div className="text-sm text-slate-500">Checkout</div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div><img src="assets/store/storefront.jpg" alt="Storefront Pro platform showcase" className="w-full rounded-2xl object-cover shadow-xl" style={{ maxHeight: 420 }} loading="lazy" /></div>
            <div>
              <span className="section-eyebrow">Platform Preview</span>
              <h2 className="section-heading mb-4">Built for the modern Engine</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Every detail is engineered for performance, scalability, and a flawless user experience â€” from first click to everyday operations.
              </p>
              <Link to="/about" className="btn-primary">Learn More <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center rounded-2xl p-12" style={{ background: 'linear-gradient(135deg, #431407, #ea580c)' }}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/70 mb-8">
              Join thousands of professionals choosing Storefront Pro as their growth platform.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold transition-all hover:shadow-xl" style={{ color: '#ea580c' }}>
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
