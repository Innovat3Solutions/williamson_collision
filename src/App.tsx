import React from 'react';

function Navbar() {
  return (
    <nav className="bg-background sticky top-0 z-50 border-b-0 border-b border-outline-variant/20">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-none">
        <a className="text-xl font-black tracking-widest-custom text-on-background font-headline uppercase" href="#">
          WILLIAMSON CADILLAC
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-on-background hover:text-white transition-colors duration-300 hover:bg-surface-container-highest/50 transition-all duration-500 ease-in-out font-headline font-bold tracking-tighter uppercase px-3 py-2 cursor-pointer active:opacity-80" href="#">Dealership</a>
          <a className="text-on-background hover:text-white transition-colors duration-300 hover:bg-surface-container-highest/50 transition-all duration-500 ease-in-out font-headline font-bold tracking-tighter uppercase px-3 py-2 cursor-pointer active:opacity-80" href="#">Service</a>
          <a className="text-primary-container border-b border-primary-container pb-1 hover:bg-surface-container-highest/50 transition-all duration-500 ease-in-out font-headline font-bold tracking-tighter uppercase px-3 py-2 cursor-pointer active:opacity-80" href="#">Body Shop</a>
          <a className="text-on-background hover:text-white transition-colors duration-300 hover:bg-surface-container-highest/50 transition-all duration-500 ease-in-out font-headline font-bold tracking-tighter uppercase px-3 py-2 cursor-pointer active:opacity-80" href="#">Gallery</a>
          <a className="text-on-background hover:text-white transition-colors duration-300 hover:bg-surface-container-highest/50 transition-all duration-500 ease-in-out font-headline font-bold tracking-tighter uppercase px-3 py-2 cursor-pointer active:opacity-80" href="#location">Location & Hours</a>
        </div>
        <div className="flex items-center gap-6">
          <button aria-label="Search" className="text-on-surface hover:text-primary transition-colors">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
          </button>
          <a className="hidden lg:inline-flex bg-primary-container text-on-primary font-headline font-bold uppercase tracking-tighter px-6 py-3 hover:bg-surface-bright hover:text-on-surface transition-all duration-500 ease-in-out cursor-pointer active:opacity-80 border border-transparent" href="#schedule">
            SCHEDULE REPAIR
          </a>
          <button className="md:hidden text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-[870px] min-h-[600px] flex items-center bg-surface-container-lowest overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Cinematic luxury Cadillac being inspected under LED light bars in a sterile pristine automotive laboratory" className="w-full h-full object-cover object-center opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpmYCysqS1PH7GxgW0-8JYc947yFffNVPw8ZWsg4Kui5ywh9a2uV2CVD0kBML2J19MaVz5Mx1nWp3YIgHtC7LyGXV20_WFLqxteVXYL_O8J3bbk4mLkGF1geNCcoOtw3YItutsbGJyl0iYmWgsl2pTl6fUeb3Q6iPMoHs_Ic47BkdvJL2a2EfrNp1kPnJd3uQ4k5rXXgkRPbkk3JT_mXKKozGMgGzJs6B8FZFGxvDGiFjnFvFMIpe39ZSo2i3YPcOPFPUds9HU29bS"/>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12">
        <div className="max-w-3xl">
          <h2 className="font-label text-xs tracking-widest-custom uppercase text-outline-variant mb-6 border-l border-outline-variant pl-4">The Laboratory of Excellence</h2>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background uppercase tracking-tighter leading-[0.9] mb-8">
            Precision Restored.<br/>
            <span className="text-on-surface-variant">Excellence Maintained.</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <a className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-primary-container text-primary-container font-headline font-bold uppercase tracking-widest-custom text-sm hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-700 ease-in-out group" href="#schedule">
              Schedule an Estimate
              <span className="material-symbols-outlined ml-3 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="py-24 bg-surface relative border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 justify-between items-start mb-16">
          <div className="md:w-1/3">
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tighter text-on-background mb-4">Certified Precision</h2>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Our atelier is equipped with state-of-the-art diagnostic and repair technology, maintaining the strict OEM standards required for high-performance luxury vehicles.
            </p>
          </div>
          <div className="md:w-2/3 w-full grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/20">
            <div className="bg-surface p-8 flex flex-col items-center justify-center text-center group hover:bg-surface-container-low transition-colors duration-500">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 group-hover:text-primary-container transition-colors">verified</span>
              <h3 className="font-label text-xs tracking-widest-custom uppercase text-on-surface">Cadillac Certified</h3>
            </div>
            <div className="bg-surface p-8 flex flex-col items-center justify-center text-center group hover:bg-surface-container-low transition-colors duration-500">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 group-hover:text-primary-container transition-colors">precision_manufacturing</span>
              <h3 className="font-label text-xs tracking-widest-custom uppercase text-on-surface">OEM Parts</h3>
            </div>
            <div className="bg-surface p-8 flex flex-col items-center justify-center text-center group hover:bg-surface-container-low transition-colors duration-500">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 group-hover:text-primary-container transition-colors">handyman</span>
              <h3 className="font-label text-xs tracking-widest-custom uppercase text-on-surface">Master Technicians</h3>
            </div>
            <div className="bg-surface p-8 flex flex-col items-center justify-center text-center group hover:bg-surface-container-low transition-colors duration-500">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 group-hover:text-primary-container transition-colors">shield</span>
              <h3 className="font-label text-xs tracking-widest-custom uppercase text-on-surface">Lifetime Warranty</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesBento() {
  return (
    <section className="py-24 bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold uppercase tracking-tighter text-on-background">
            Surgical Interventions
          </h2>
          <p className="font-body text-sm text-on-surface-variant max-w-md pb-2">
            Precision services engineered to return your vehicle to its original factory state, with every metric strictly validated.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/30 border border-outline-variant/30">
          <div className="group relative overflow-hidden bg-surface-container-low min-h-[450px]">
            <div className="absolute inset-0 z-0">
              <img alt="Car on alignment rack" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=2670&auto=format&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-10">
              <span className="material-symbols-outlined text-outline-variant text-3xl mb-4 group-hover:text-primary-container transition-colors">handyman</span>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-background mb-3">Structural Collision Repair</h3>
              <p className="font-body text-sm text-on-surface-variant max-w-sm">Utilizing the advanced Car-O-Tronic computer measuring system, we return your vehicle's frame to factory specifications with uncompromising millimeter precision.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden bg-surface-container-low min-h-[450px]">
            <div className="absolute inset-0 z-0">
              <img alt="Close up of a flawless paint finish" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1605810730419-db2460dfdf86?q=80&w=2670&auto=format&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-10">
              <span className="material-symbols-outlined text-outline-variant text-3xl mb-4 group-hover:text-primary-container transition-colors">format_paint</span>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-background mb-3">Advanced Paint & Refinishing</h3>
              <p className="font-body text-sm text-on-surface-variant max-w-sm">Powered by IRT 5000 high-speed drying technology and multi-stage environmental baking to guarantee an absolutely flawless, factory-quality finish.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden bg-surface-container-low min-h-[450px]">
            <div className="absolute inset-0 z-0">
              <img alt="Minimalist consultation desk" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2573&auto=format&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-10">
              <span className="material-symbols-outlined text-outline-variant text-3xl mb-4 group-hover:text-primary-container transition-colors">description</span>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-background mb-3">Insurance & Estimating</h3>
              <p className="font-body text-sm text-on-surface-variant max-w-sm">Managed by factory-certified technicians, ensuring seamless claim processing and a white-glove transition from our free detailed estimate to final delivery.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden bg-surface-container-low min-h-[450px]">
            <div className="absolute inset-0 z-0">
              <img alt="Keys handed over a polished counter" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=2670&auto=format&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-10">
              <span className="material-symbols-outlined text-outline-variant text-3xl mb-4 group-hover:text-primary-container transition-colors">car_rental</span>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-background mb-3">On-Site Rental Network</h3>
              <p className="font-body text-sm text-on-surface-variant max-w-sm">Featuring an integrated Enterprise Rent-A-Car service located directly on-site, guaranteeing zero lifestyle interruption while your vehicle is restored.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 bg-surface border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="mb-16">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tighter text-on-background">Factory Restoration Standard</h2>
          <p className="font-body text-sm text-on-surface-variant mt-2 max-w-2xl">
            A transparent, stage-gated process ensuring every repair utilizes genuine quality OEM parts and is executed to exact specifications, so your vehicle leaves our atelier as close to flawless factory condition as mathematically possible.
          </p>
        </div>
        <div className="relative w-full mt-12">
          <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 -translate-y-1/2 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0 relative z-10">
            <div className="flex flex-col items-start md:items-center relative group">
              <div className="w-3 h-3 bg-surface border border-outline-variant mb-6 md:absolute md:top-[calc(50%-6px)] md:mb-0 group-hover:border-primary-container group-hover:bg-primary-container transition-colors duration-300"></div>
              <div className="md:text-center md:pb-12 w-full">
                <h4 className="font-label text-xs tracking-widest-custom uppercase text-outline-variant mb-2 group-hover:text-on-surface transition-colors">Phase 01</h4>
                <h3 className="font-headline text-lg font-bold uppercase text-on-background mb-2">Complimentary Estimate</h3>
                <p className="font-body text-xs text-on-surface-variant">Comprehensive evaluation and effortless insurance claims coordination.</p>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-center relative group">
              <div className="w-3 h-3 bg-surface border border-outline-variant mb-6 md:absolute md:top-[calc(50%-6px)] md:mb-0 group-hover:border-primary-container group-hover:bg-primary-container transition-colors duration-300"></div>
              <div className="md:text-center md:pt-12 w-full md:mt-auto">
                <h4 className="font-label text-xs tracking-widest-custom uppercase text-outline-variant mb-2 group-hover:text-on-surface transition-colors">Phase 02</h4>
                <h3 className="font-headline text-lg font-bold uppercase text-on-background mb-2">Structural Alignment</h3>
                <p className="font-body text-xs text-on-surface-variant">Laser-guided frame straightening returning the vehicle to exact factory tolerances.</p>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-center relative group">
              <div className="w-3 h-3 bg-surface border border-outline-variant mb-6 md:absolute md:top-[calc(50%-6px)] md:mb-0 group-hover:border-primary-container group-hover:bg-primary-container transition-colors duration-300"></div>
              <div className="md:text-center md:pb-12 w-full">
                <h4 className="font-label text-xs tracking-widest-custom uppercase text-outline-variant mb-2 group-hover:text-on-surface transition-colors">Phase 03</h4>
                <h3 className="font-headline text-lg font-bold uppercase text-on-background mb-2">Refinishing</h3>
                <p className="font-body text-xs text-on-surface-variant">Computerized color matching and multi-stage environmental baking for an OEM finish.</p>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-center relative group">
              <div className="w-3 h-3 bg-surface border border-outline-variant mb-6 md:absolute md:top-[calc(50%-6px)] md:mb-0 group-hover:border-primary-container group-hover:bg-primary-container transition-colors duration-300"></div>
              <div className="md:text-center md:pt-12 w-full md:mt-auto">
                <h4 className="font-label text-xs tracking-widest-custom uppercase text-outline-variant mb-2 group-hover:text-on-surface transition-colors">Phase 04</h4>
                <h3 className="font-headline text-lg font-bold uppercase text-on-background mb-2">Calibration & Delivery</h3>
                <p className="font-body text-xs text-on-surface-variant">Sensor recalibration, rigorous QA inspection, ensuring true factory-spec operation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="py-24 bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tighter text-on-background mb-6">Atelier Coordinates</h2>
            <p className="font-body text-sm text-on-surface-variant mb-8 max-w-md">
              Our state-of-the-art repair and restoration facility is engineered to provide an unparalleled service experience.
            </p>
            
            <div className="space-y-8 bg-surface p-8 border border-outline-variant/20">
              <div>
                <h3 className="font-label text-xs tracking-widest-custom uppercase text-outline-variant mb-2">Address</h3>
                <p className="font-headline text-lg tracking-tight text-on-background">19300 SW 108 Ave<br/>Miami, FL 33157</p>
              </div>
              
              <div>
                <h3 className="font-label text-xs tracking-widest-custom uppercase text-outline-variant mb-2">Hours of Operation</h3>
                <ul className="text-sm font-body text-on-surface-variant space-y-2">
                  <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>Monday - Friday</span>
                    <span className="text-on-background font-medium">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>Saturday</span>
                    <span className="text-on-background font-medium">9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between text-outline-variant">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div>
                 <h3 className="font-label text-xs tracking-widest-custom uppercase text-outline-variant mb-2">Direct Line</h3>
                 <p className="font-headline text-xl text-primary-container">1-800-CADILLAC</p>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] w-full border border-outline-variant/20 bg-surface-container p-2">
             {/* Using a standard generic map embed as placeholder with a CSS filter to match the dark brutalist aesthetic */}
            <iframe 
              title="Location Map"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.2)' }}
              loading="lazy" 
              allowFullScreen 
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_PLACEHOLDER&q=Cadillac+Dealership,New+York,NY" 
              // Note: Without a real key this might show a generic map or error overlay, but as a placeholder, changing it to a generic openstreetmap or similar if it fails is fine. 
              // Since it's a structural placeholder for the prompt requirement:
              srcDoc="<div style='background-color:#131313; width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:#474747; font-family:sans-serif; text-align:center;'>GOOGLE MAPS INTEGRATION<br/><span style='font-size:12px; margin-top:8px; display:block;'>Coordinates Locked For Preview</span></div>"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-10 gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold text-on-background font-headline uppercase tracking-widest-custom">
            WILLIAMSON CADILLAC
          </div>
          <div className="font-label text-xs tracking-widest-custom uppercase text-outline-variant">
            19300 SW 108 Ave, Miami, FL 33157
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-outline-variant hover:text-on-background transition-colors duration-300 font-label text-[10px] tracking-widest-custom uppercase" href="#">Privacy Policy</a>
          <a className="text-outline-variant hover:text-on-background transition-colors duration-300 font-label text-[10px] tracking-widest-custom uppercase" href="#">Terms of Service</a>
          <a className="text-outline-variant hover:text-on-background transition-colors duration-300 font-label text-[10px] tracking-widest-custom uppercase" href="#">OEM Certifications</a>
          <a className="text-outline-variant hover:text-on-background transition-colors duration-300 font-label text-[10px] tracking-widest-custom uppercase" href="#">Accessibility</a>
        </div>
        <div className="font-label text-[10px] tracking-widest-custom uppercase text-outline-variant">
          © 2024 WILLIAMSON CADILLAC PRECISION ATELIER.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Certifications />
        <ServicesBento />
        <Process />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
