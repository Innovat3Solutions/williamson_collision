import React, { useEffect, useRef, useState } from 'react';

const IMG = {
  heroBg: '/images/Williamson/hero-bg.jpg',
  facadeFront: '/images/Williamson/IMG_0205.jpg',
  serviceDrive: '/images/Williamson/IMG_0214.jpg',
  entrance: '/images/Williamson/IMG_0219.jpg',
  advisor: '/images/Williamson/IMG_0231.jpg',
  waitingRoom: '/images/Williamson/IMG_0237.jpg',
  lounge: '/images/Williamson/IMG_0244.jpg',
  suvOnFrame: '/images/Williamson/IMG_0248.jpg',
  frameRackWide: '/images/Williamson/IMG_0250.jpg',
  shopOverview: '/images/Williamson/IMG_0254.jpg',
  paintMixRoom: '/images/Williamson/IMG_0258.jpg',
  paintBench: '/images/Williamson/IMG_0260.jpg',
  escaladeBumper: '/images/Williamson/IMG_0261.jpg',
  escaladeMasked: '/images/Williamson/IMG_0265.jpg',
  technicianPhilip: '/images/Williamson/IMG_0269.jpg',
  teamWarehouse: '/images/Williamson/IMG_0274.jpg',
};

const LOGO = {
  brand: '/images/Williamson/williamson-collision-logo.png',
  brandLight: '/images/Williamson/Black-and-white-williamson-collision-logo.png',
  alfaRomeo: '/images/Williamson/alpha-romero-certified.png',
  cpn: '/images/Williamson/CPN-logo-blue.png',
  cpnStacked: '/images/Williamson/CPN-logo-Stacked.png',
  hyundai: '/images/Williamson/Hyundai_RECOGNIZED_shop-badge.png',
  kia: '/images/Williamson/kia_certified_collision_center_WEB.png',
  nissanInfiniti: '/images/Williamson/nissan-and-infiniti-certified-repair-network-logo-300x115.jpg',
  fca: '/images/Williamson/FCA Brand Logo.png',
  jeep: '/images/Williamson/Jeep Brand Logo.jpg',
  ram: '/images/Williamson/RAM Brand Logo.jpg',
  dodge: '/images/Williamson/Dodge Brand Logo.jpg',
  chrysler: '/images/Williamson/Chrysler Brand Logo.jpg',
  fiat: '/images/Williamson/FIAT Brand Logo.jpg',
  cadillac: '/images/Williamson/Cadillac-Logo-2014.png',
  chevrolet: '/images/Williamson/Chevrolet-logo.png',
  buick: '/images/Williamson/Buick-Logo.png',
  gmc: '/images/Williamson/gmc-logo.png',
};

function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const NAV_HEIGHT = 90;

function useNavTone(): 'light' | 'dark' {
  const [tone, setTone] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setup = () => {
      observer?.disconnect();
      // 1px-thin observation strip just below the navbar — whichever section crosses that line wins.
      const bottomMargin = -(window.innerHeight - NAV_HEIGHT - 2);
      observer = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              const t = (e.target as HTMLElement).dataset.tone;
              if (t === 'light' || t === 'dark') setTone(t);
            }
          }
        },
        {
          rootMargin: `-${NAV_HEIGHT}px 0px ${bottomMargin}px 0px`,
          threshold: 0,
        }
      );
      document
        .querySelectorAll<HTMLElement>('[data-tone]')
        .forEach((s) => observer!.observe(s));
    };

    setup();
    const onResize = () => setup();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      observer?.disconnect();
    };
  }, []);

  return tone;
}

function Navbar() {
  const tone = useNavTone();
  const dark = tone === 'dark';

  const linkBase =
    'font-headline font-bold tracking-tighter uppercase px-3 py-2 cursor-pointer text-sm transition-colors duration-300';
  const linkColor = dark
    ? 'text-paper hover:text-primary-container'
    : 'text-ink hover:text-accent-deep';

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-500"
      style={{ height: NAV_HEIGHT }}
    >
      {/* Soft fade across the entire navbar — gives the dark logo a white wash on dark sections without competing with the nav links */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          dark
            ? 'bg-gradient-to-b from-white/35 via-white/15 to-transparent'
            : 'bg-gradient-to-b from-white/70 via-white/30 to-transparent'
        }`}
      ></div>

      <div className="relative h-full flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-none gap-4">
        <a
          className="shrink-0 inline-flex items-center gap-3 sm:gap-4 overflow-hidden h-14 sm:h-16 lg:h-20"
          href="#"
          aria-label="Williamson Automotive Collision Center home"
        >
          <img
            src={LOGO.brand}
            alt="Williamson Automotive Collision Center"
            className="h-[5.25rem] sm:h-24 lg:h-[7.5rem] w-auto max-w-[40vw] object-contain object-left"
            loading="eager"
            decoding="async"
          />
          <span className={`hidden sm:flex flex-col leading-tight border-l ${dark ? 'border-paper/25' : 'border-ink/15'} pl-3 sm:pl-4`}>
            <span className={`font-label text-[9px] sm:text-[10px] tracking-widest-custom uppercase ${dark ? 'text-primary-container' : 'text-accent-deep'}`}>
              Williamson Automotive
            </span>
            <span className={`font-headline text-sm sm:text-base lg:text-lg font-bold uppercase tracking-tight ${dark ? 'text-paper' : 'text-ink'}`}>
              Collision Center
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-5 xl:gap-8">
          <a className={`${linkBase} ${linkColor}`} href="#services">Services</a>
          <a className={`${linkBase} ${linkColor}`} href="#certifications">Certifications</a>
          <a className={`${linkBase} ${linkColor}`} href="#facility">Facility</a>
          <a className={`${linkBase} ${linkColor}`} href="#team">Team</a>
          <a className={`${linkBase} ${linkColor}`} href="#location">Location & Hours</a>
        </div>

        <div className="flex items-center gap-6">
          <a
            aria-label="Call Williamson-Collision"
            href="tel:+13052388801"
            className={`hidden lg:inline-flex items-center gap-2 transition-colors font-label text-xs tracking-widest-custom uppercase ${
              dark ? 'text-paper/80 hover:text-primary-container' : 'text-ink-muted hover:text-accent-deep'
            }`}
          >
            <span className="material-symbols-outlined text-base">call</span>
            305-238-8801
          </a>
          <a
            className={`hidden lg:inline-flex font-headline font-bold uppercase tracking-tighter px-6 py-3 transition-all duration-500 ease-in-out cursor-pointer active:opacity-80 ${
              dark
                ? 'bg-primary-container text-on-primary-container hover:bg-white'
                : 'bg-ink text-paper hover:bg-accent-deep'
            }`}
            href="#schedule"
          >
            SCHEDULE REPAIR
          </a>
          <button className={`md:hidden ${dark ? 'text-paper' : 'text-ink'}`}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section data-tone="dark" className="relative w-full h-[860px] min-h-[640px] flex items-center overflow-hidden bg-background">
      {/* Full-bleed hero image — covers the entire section */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Williamson-Collision technicians repairing a Cadillac SUV inside the Miami facility"
          className="w-full h-full object-cover object-center anim-fade-in anim-ken-burns"
          src={IMG.heroBg}
          loading="eager"
          decoding="sync"
        />
        {/* Left-anchored vignette keeps headline copy legible while letting the photo breathe on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/35 to-transparent"></div>
        {/* Soft floor + ceiling vignette so the section integrates with the navbar above and the BrandStrip below */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-background/15"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12">
        <div className="max-w-3xl">
          <h2 className="font-label text-xs tracking-widest-custom uppercase text-primary-container mb-6 border-l-2 border-primary-container pl-4 anim-fade-up" style={{ animationDelay: '0.15s' }}>
            The Body Shop of Williamson Automotive &middot; South Miami
          </h2>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.9] mb-8 anim-fade-up text-on-background" style={{ animationDelay: '0.3s' }}>
            Williamson Automotive<br/>
            <span className="text-primary-container">Collision</span> <span className="text-on-surface-variant">Center.</span>
          </h1>
          <p className="font-body text-base text-on-surface-variant max-w-xl mb-10 anim-fade-up" style={{ animationDelay: '0.45s' }}>
            The authorized, factory-certified body shop of Williamson Automotive. OEM-trained technicians, genuine parts, and a fully tooled Car-O-Liner facility, serving every Cadillac, GMC, Buick, Chevrolet, Stellantis, Nissan, Infiniti, Hyundai, and Kia driver in Miami-Dade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 anim-fade-up" style={{ animationDelay: '0.55s' }}>
            <a className="inline-flex justify-center items-center px-8 py-4 bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest-custom text-sm hover:bg-white transition-all duration-700 ease-in-out group" href="#schedule">
              Get an Estimate
              <span className="material-symbols-outlined ml-3 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-on-surface-variant/60 text-on-background font-headline font-bold uppercase tracking-widest-custom text-sm hover:border-primary-container hover:text-primary-container transition-all duration-700 ease-in-out" href="#services">
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

type BadgeTile =
  | { kind: 'image'; src: string; alt: string; name: string }
  | { kind: 'text'; name: string; tagline: string };

function BadgeCard({ tile }: { tile: BadgeTile }) {
  return (
    <div className="group relative aspect-square bg-paper-card flex flex-col items-center justify-center p-4 md:p-5 shadow-[0_18px_38px_-22px_rgba(15,15,15,0.35)] ring-1 ring-paper-line hover:ring-accent-deep hover:-translate-y-1 transition-all duration-500 overflow-hidden">
      {/* subtle gold corner mark */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent-deep/0 group-hover:border-accent-deep/80 transition-colors duration-500"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-accent-deep/0 group-hover:border-accent-deep/80 transition-colors duration-500"></div>

      {tile.kind === 'image' ? (
        <>
          <div className="flex-1 w-full flex items-center justify-center min-h-0">
            <img
              src={tile.src}
              alt={tile.alt}
              className="max-h-[78%] max-w-full w-auto object-contain group-hover:scale-[1.04] transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="mt-2 font-label text-[9px] tracking-widest-custom uppercase text-ink-faint text-center w-full truncate">
            {tile.name}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <span className="material-symbols-outlined text-3xl text-accent-deep mb-3">verified</span>
          <div className="font-headline text-lg md:text-xl font-extrabold tracking-tight uppercase text-ink leading-[1]">
            {tile.name}
          </div>
          <div className="mt-2 font-label text-[9px] tracking-widest-custom uppercase text-ink-faint">
            {tile.tagline}
          </div>
        </div>
      )}
    </div>
  );
}

function FamilyPanel({
  eyebrow,
  title,
  blurb,
  tiles,
  cols,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  tiles: BadgeTile[];
  cols: string;
}) {
  return (
    <div className="relative border border-paper-line bg-paper-card p-6 md:p-8 reveal">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8">
        <div>
          <div className="font-label text-[10px] tracking-widest-custom uppercase text-accent-deep mb-2">{eyebrow}</div>
          <h4 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-ink">{title}</h4>
        </div>
        <p className="font-body text-xs md:text-sm text-ink-muted max-w-md leading-relaxed">{blurb}</p>
      </div>

      <div className={`grid gap-3 md:gap-4 ${cols}`}>
        {tiles.map((t) => (
          <div key={t.name} className="contents">
            <BadgeCard tile={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandStrip() {
  const stellantis: BadgeTile[] = [
    { kind: 'image', src: LOGO.fca, alt: 'FCA US LLC Certified Collision Repair Center', name: 'FCA US LLC' },
    { kind: 'image', src: LOGO.jeep, alt: 'Jeep Certified Collision Center', name: 'Jeep' },
    { kind: 'image', src: LOGO.ram, alt: 'Ram Certified Collision Center', name: 'Ram' },
    { kind: 'image', src: LOGO.dodge, alt: 'Dodge Certified Collision Center', name: 'Dodge' },
    { kind: 'image', src: LOGO.chrysler, alt: 'Chrysler Certified Collision Center', name: 'Chrysler' },
    { kind: 'image', src: LOGO.fiat, alt: 'Fiat Certified Collision Center', name: 'Fiat' },
    { kind: 'image', src: LOGO.alfaRomeo, alt: 'Alfa Romeo Certified Collision Center', name: 'Alfa Romeo' },
  ];
  const asian: BadgeTile[] = [
    { kind: 'image', src: LOGO.hyundai, alt: 'Hyundai Recognized Collision Repair Center', name: 'Hyundai · Recognized' },
    { kind: 'image', src: LOGO.kia, alt: 'Kia Certified Collision Repair Center', name: 'Kia · Certified' },
    { kind: 'image', src: LOGO.nissanInfiniti, alt: 'Nissan & Infiniti Certified Repair Network', name: 'Nissan & Infiniti' },
  ];
  const gm: BadgeTile[] = [
    { kind: 'image', src: LOGO.cadillac, alt: 'Cadillac', name: 'Cadillac' },
    { kind: 'image', src: LOGO.chevrolet, alt: 'Chevrolet', name: 'Chevrolet' },
    { kind: 'image', src: LOGO.buick, alt: 'Buick', name: 'Buick' },
    { kind: 'image', src: LOGO.gmc, alt: 'GMC', name: 'GMC' },
    { kind: 'text', name: 'Aluminum', tagline: 'Certified Repair' },
  ];

  return (
    <section id="certifications" data-tone="light" className="py-24 md:py-32 bg-paper relative overflow-hidden">
      {/* Soft gold washes for warmth without darkening the paper tone */}
      <div className="absolute -top-20 -left-40 w-[700px] h-[700px] bg-accent-deep/[0.06] rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-accent-deep/[0.04] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-deep/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14 md:mb-16">
          <div className="lg:col-span-7 reveal reveal-left">
            <h2 className="font-label text-xs tracking-widest-custom uppercase text-accent-deep mb-5 border-l-2 border-accent-deep pl-4">
              Certified. Trusted. Preferred.
            </h2>
            <h3 className="font-headline text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-ink leading-[0.95]">
              Factory-Certified.<br/>
              <span className="text-accent-deep">Quality Guaranteed.</span>
            </h3>
          </div>
          <div className="lg:col-span-5 reveal reveal-right">
            <p className="font-body text-sm md:text-base text-ink-muted leading-relaxed mb-6">
              As the authorized body shop of <span className="font-headline font-bold uppercase tracking-tight text-ink">Williamson Automotive</span>, we&apos;re factory-certified by every manufacturer in our showroom and beyond. We follow strict OEM repair procedures, use genuine parts, and operate the calibrated equipment required to keep your warranty, and your safety systems, intact.
            </p>
            <div className="grid grid-cols-3 gap-px bg-paper-line">
              {[
                { stat: '15+', label: 'Brand Certifications' },
                { stat: '1', label: 'Aluminum Bay' },
                { stat: '100%', label: 'OEM Parts' },
              ].map((s) => (
                <div key={s.label} className="bg-paper-card px-3 py-4 text-center">
                  <div className="font-headline text-2xl md:text-3xl font-extrabold text-accent-deep leading-none">{s.stat}</div>
                  <div className="mt-2 font-label text-[9px] tracking-widest-custom uppercase text-ink-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAMILY PANELS */}
        <div className="grid grid-cols-1 gap-6">
          <FamilyPanel
            eyebrow="Family 01"
            title="Stellantis · FCA US LLC"
            blurb="Full FCA US LLC Certified Collision Repair Center status. Mopar parts, official tooling, and certified procedures across every Stellantis brand."
            tiles={stellantis}
            cols="grid-cols-3 sm:grid-cols-4 md:grid-cols-7"
          />

          <FamilyPanel
            eyebrow="Family 02"
            title="Asian Manufacturers"
            blurb="Recognized by Hyundai, certified by Kia, and part of the Nissan &amp; Infiniti Certified Repair Network."
            tiles={asian}
            cols="grid-cols-1 sm:grid-cols-3"
          />

          <FamilyPanel
            eyebrow="Family 03"
            title="General Motors  ·  Aluminum"
            blurb="The Williamson family&apos;s home brands plus the aluminum certification required for modern luxury and full-size trucks."
            tiles={gm}
            cols="grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
          />
        </div>

        {/* MEMBERSHIP STRIP */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-paper-card border border-paper-line px-6 md:px-8 py-5 reveal">
          <div className="flex items-center gap-5">
            <span className="material-symbols-outlined text-accent-deep">hub</span>
            <div>
              <div className="font-label text-[10px] tracking-widest-custom uppercase text-ink-faint">Active Member</div>
              <div className="font-headline text-sm md:text-base font-bold tracking-tight uppercase text-ink">Collision Performance Network</div>
            </div>
          </div>
          <img src={LOGO.cpn} alt="OEC Collision Performance Network" className="h-7 md:h-8 object-contain" />
          <a href="#services" className="inline-flex items-center gap-2 font-headline font-bold uppercase tracking-widest-custom text-xs text-ink hover:text-accent-deep transition-colors">
            See Our Services
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesBento() {
  return (
    <section id="services" data-tone="dark" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
        <div className="mb-14 md:mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="md:col-span-7 reveal">
            <h2 className="font-label text-xs tracking-widest-custom uppercase text-primary-container mb-5 border-l-2 border-primary-container pl-4">Signature Services</h2>
            <h3 className="font-headline text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-on-background leading-[0.95]">
              Everything Your <br/><span className="text-on-surface-variant">Vehicle Needs.</span>
            </h3>
          </div>
          <p className="md:col-span-5 font-body text-sm md:text-base text-on-surface-variant max-w-md leading-relaxed pb-1 reveal reveal-delay-2">
            From frame straightening to color-matched refinish. Every operation happens under one roof, performed by technicians trained to manufacturer standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden bg-surface-container-lowest border border-outline-variant/30 min-h-[460px] md:col-span-2 hover:border-primary-container/50 transition-all duration-500 shadow-2xl shadow-black/40 reveal">
            <div className="absolute inset-0 z-0">
              <img alt="SUV on Car-O-Liner alignment rack during structural collision repair" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src={IMG.frameRackWide} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-10 md:p-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-label text-[10px] tracking-widest-custom uppercase text-primary-container mb-5 flex items-center gap-3"><span className="w-8 h-px bg-primary-container"></span>01 &nbsp;/&nbsp; Structural</span>
              <h4 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-tight text-on-background mb-4 max-w-md leading-[1.05]">Structural Collision Repair</h4>
              <p className="font-body text-sm text-on-surface-variant max-w-md leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">Laser-guided Car-O-Liner measuring systems return your vehicle&apos;s frame to factory tolerances down to the millimeter.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-surface-container-lowest border border-outline-variant/30 min-h-[460px] hover:border-primary-container/50 transition-all duration-500 shadow-2xl shadow-black/40 reveal reveal-delay-2">
            <div className="absolute inset-0 z-0">
              <img alt="Cadillac Escalade masked for paint inside the aluminum repair bay" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src={IMG.escaladeMasked} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-label text-[10px] tracking-widest-custom uppercase text-primary-container mb-5 flex items-center gap-3"><span className="w-8 h-px bg-primary-container"></span>02 &nbsp;/&nbsp; Aluminum</span>
              <h4 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-on-background mb-4 leading-[1.05]">Aluminum Body Repair</h4>
              <p className="font-body text-sm text-on-surface-variant max-w-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">Isolated, contaminant-free bay with dedicated aluminum tooling. The certified way to repair modern Cadillac, Ram and Jeep bodies.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-surface-container-lowest border border-outline-variant/30 min-h-[400px] hover:border-primary-container/50 transition-all duration-500 shadow-2xl shadow-black/40 reveal reveal-delay-1">
            <div className="absolute inset-0 z-0">
              <img alt="In-house paint mixing room with full refinish toner library" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src={IMG.paintMixRoom} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-label text-[10px] tracking-widest-custom uppercase text-primary-container mb-5 flex items-center gap-3"><span className="w-8 h-px bg-primary-container"></span>03 &nbsp;/&nbsp; Refinish</span>
              <h4 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-on-background mb-4 leading-[1.05]">Paint &amp; Refinishing</h4>
              <p className="font-body text-sm text-on-surface-variant max-w-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">Spectrophotometer-matched color, downdraft booths, multi-stage bake. An OEM finish, every panel.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-surface-container-lowest border border-outline-variant/30 min-h-[400px] md:col-span-2 hover:border-primary-container/50 transition-all duration-500 shadow-2xl shadow-black/40 reveal reveal-delay-2">
            <div className="absolute inset-0 z-0">
              <img alt="Replacement bumper test-fit on a Cadillac SUV during panel repair" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src={IMG.escaladeBumper} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-10 md:p-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-label text-[10px] tracking-widest-custom uppercase text-primary-container mb-5 flex items-center gap-3"><span className="w-8 h-px bg-primary-container"></span>04 &nbsp;/&nbsp; Panels</span>
              <h4 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-tight text-on-background mb-4 max-w-md leading-[1.05]">Body &amp; Panel Replacement</h4>
              <p className="font-body text-sm text-on-surface-variant max-w-md leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">OEM bumpers, fenders, hoods and quarters, fit, sealed and finished to factory drawings.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-surface-container-lowest border border-outline-variant/30 min-h-[400px] md:col-span-2 hover:border-primary-container/50 transition-all duration-500 shadow-2xl shadow-black/40 reveal reveal-delay-3">
            <div className="absolute inset-0 z-0">
              <img alt="Diagnostic and ADAS calibration bay" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src={IMG.shopOverview} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-10 md:p-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-label text-[10px] tracking-widest-custom uppercase text-primary-container mb-5 flex items-center gap-3"><span className="w-8 h-px bg-primary-container"></span>05 &nbsp;/&nbsp; Calibration</span>
              <h4 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-tight text-on-background mb-4 max-w-md leading-[1.05]">ADAS &amp; Glass</h4>
              <p className="font-body text-sm text-on-surface-variant max-w-md leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">OEM glass installation paired with full ADAS sensor recalibration so lane-keep, cruise and collision systems work as designed.</p>
            </div>
          </div>

          <a href="#schedule" className="group relative overflow-hidden bg-surface-container-lowest border border-outline-variant/30 min-h-[400px] hover:border-primary-container/60 transition-all duration-500 shadow-2xl shadow-black/40 reveal reveal-delay-4">
            <div className="absolute inset-0 z-0">
              <img alt="On-site Enterprise Rent-A-Car desk at the Williamson-Collision Center" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src={IMG.entrance} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-label text-[10px] tracking-widest-custom uppercase text-primary-container mb-5 flex items-center gap-3"><span className="w-8 h-px bg-primary-container"></span>06 &nbsp;/&nbsp; Rental</span>
              <h4 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-on-background mb-4 leading-[1.05]">On-Site Enterprise Rental</h4>
              <p className="font-body text-sm text-on-surface-variant max-w-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">Drop the keys, pick up a rental. Enterprise Rent-A-Car operates a counter on our property. Insurance direct-bill ready.</p>
              <span className="mt-6 inline-flex items-center gap-2 font-label text-[10px] tracking-widest-custom uppercase text-on-background group-hover:text-primary-container transition-colors">Schedule a Drop-Off <span className="w-6 h-px bg-current"></span></span>
            </div>
          </a>
        </div>

        <div className="mt-16 md:mt-20 pt-10 border-t border-outline-variant/30 reveal">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-8 items-end">
            <h4 className="md:col-span-4 font-label text-xs tracking-widest-custom uppercase text-primary-container border-l-2 border-primary-container pl-4">Also Performed In-House</h4>
            <p className="md:col-span-8 font-body text-sm text-on-surface-variant leading-relaxed">A complete catalog of supporting work, handled by the same technicians, under the same roof, to the same standard.</p>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-3">
            {[
              'Paintless Dent Removal',
              'Alloy Wheel Refinishing',
              'Frame & Unibody Straightening',
              'Headlight Restoration',
              'Bumper Repair',
              'Plastic Welding',
              'Color Matching',
              'Detailing & Buff-Out',
              'Insurance Claim Coordination',
              'Complimentary Estimates',
              'Towing Assistance',
              'Loss-of-Use Coordination',
            ].map((s) => (
              <span key={s} className="font-label text-[10px] tracking-widest-custom uppercase text-on-surface-variant border border-outline-variant/40 px-4 py-2.5 hover:border-primary-container hover:text-primary-container transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilityTour() {
  const tiles = [
    { src: IMG.shopOverview, label: 'Production Floor', caption: 'Multiple bays for structural and cosmetic work, executed under one roof.' },
    { src: IMG.paintMixRoom, label: 'Paint Mixing Lab', caption: 'In-house spectrophotometer color match with a full refinish toner library.' },
    { src: IMG.escaladeMasked, label: 'Aluminum Repair Bay', caption: 'Isolated, contamination-free room with dedicated aluminum tooling.' },
    { src: IMG.teamWarehouse, label: 'Parts Warehouse', caption: 'OEM inventory staged on-site so repairs never wait on a part.' },
    { src: IMG.serviceDrive, label: 'Covered Service Drive', caption: 'Climate-protected drop-off and intake. Your vehicle is sheltered from the moment it arrives.' },
    { src: IMG.suvOnFrame, label: 'Frame Alignment Rack', caption: 'Laser-guided Car-O-Liner system measures and pulls frames back to factory tolerances.' },
    { src: IMG.paintBench, label: 'Refinish Bench', caption: 'Multi-stage clear, environmental bake and detail prep. Every panel inspected before delivery.' },
    { src: IMG.escaladeBumper, label: 'Panel Repair Bay', caption: 'OEM bumpers, fenders, hoods and quarters fit and sealed to factory drawings.' },
  ];
  const [active, setActive] = useState(0);
  const current = tiles[active];
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByPage = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement | null;
    if (!firstChild) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || '16') || 16;
    const step = (firstChild.offsetWidth + gap) * 4;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section id="facility" data-tone="light" className="py-32 bg-paper relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-14 items-end">
          <div className="lg:col-span-7 reveal reveal-left">
            <h2 className="font-label text-xs tracking-widest-custom uppercase text-accent-deep mb-5 border-l-2 border-accent-deep pl-4">Inside the Shop</h2>
            <h3 className="font-headline text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-ink leading-[0.95]">
              Built for <br/><span className="text-ink-muted">the Work.</span>
            </h3>
          </div>
          <p className="lg:col-span-5 font-body text-sm md:text-base text-ink-muted leading-relaxed pb-1 reveal reveal-delay-2">
            A purpose-built facility for collision repair, with covered service drives, climate-controlled prep bays, downdraft paint booths, a full in-house paint mixing lab, and a dedicated aluminum repair room. Every tool, every certification, on one property.
          </p>
        </div>

        {/* Featured carousel image */}
        <div className="relative h-[420px] md:h-[560px] overflow-hidden border border-paper-line shadow-2xl shadow-black/15 reveal" aria-live="polite">
          {tiles.map((t, i) => (
            <img
              key={t.label}
              alt={`${t.label} at Williamson-Collision`}
              src={t.src}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${i === active ? 'opacity-100' : 'opacity-0'}`}
              aria-hidden={i !== active}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 pointer-events-none">
            <span className="font-label text-[10px] tracking-widest-custom uppercase text-primary-container flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary-container"></span>{String(active + 1).padStart(2, '0')} &nbsp;/&nbsp; {String(tiles.length).padStart(2, '0')}
            </span>
            <h4 className="font-headline text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-on-background leading-[0.95] mb-3">{current.label}</h4>
            <p className="font-body text-sm md:text-base text-on-surface-variant max-w-xl leading-relaxed">{current.caption}</p>
          </div>
        </div>

        {/* Thumbnail carousel — 4 visible per page, horizontal scroll for the rest */}
        <div className="mt-4 md:mt-5 relative">
          <div
            ref={scrollerRef}
            className="grid grid-flow-col auto-cols-[calc(50%-0.375rem)] md:auto-cols-[calc(25%-0.75rem)] gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {tiles.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${t.label}`}
                  aria-pressed={isActive}
                  className={`group relative h-[110px] md:h-[140px] overflow-hidden border text-left transition-all duration-500 snap-start ${isActive ? 'border-accent-deep shadow-lg shadow-black/15' : 'border-paper-line hover:border-accent-deep/60'}`}
                >
                  <img
                    alt=""
                    src={t.src}
                    aria-hidden="true"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-95 group-hover:scale-105'}`}
                  />
                  <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-gradient-to-t from-background/65 via-transparent to-transparent' : 'bg-gradient-to-t from-background/65 via-background/15 to-transparent'}`}></div>
                  {isActive && <div className="absolute top-0 left-0 right-0 h-px bg-primary-container"></div>}
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                    <p className={`font-label text-[10px] tracking-widest-custom uppercase transition-colors duration-500 ${isActive ? 'text-primary-container' : 'text-on-surface-variant group-hover:text-on-background'}`}>
                      <span className="opacity-60 mr-2">{String(i + 1).padStart(2, '0')}</span>{t.label}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {tiles.length > 4 && (
            <>
              <button
                type="button"
                aria-label="Previous thumbnails"
                onClick={() => scrollByPage(-1)}
                className="hidden md:flex absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-paper border border-paper-line text-ink hover:border-accent-deep hover:text-accent-deep transition-colors shadow-lg shadow-black/10"
              >
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button
                type="button"
                aria-label="Next thumbnails"
                onClick={() => scrollByPage(1)}
                className="hidden md:flex absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-paper border border-paper-line text-ink hover:border-accent-deep hover:text-accent-deep transition-colors shadow-lg shadow-black/10"
              >
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section data-tone="dark" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="mb-16 reveal">
          <h2 className="font-label text-xs tracking-widest-custom uppercase text-primary-container mb-4 border-l-2 border-primary-container pl-4">The Williamson Automotive Standard</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-extrabold uppercase tracking-tighter text-on-background leading-tight">
            Factory-Certified <br/><span className="text-on-surface-variant">Repair Process</span>
          </h3>
          <p className="font-body text-sm text-on-surface-variant mt-6 max-w-2xl">
            A transparent, stage-gated process ensuring every repair uses genuine OEM parts and is executed to exact manufacturer specifications, so your vehicle leaves our facility as close to factory condition as engineering allows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mt-12">
          {[
            { num: '01', title: 'Complimentary Estimate', desc: 'Comprehensive evaluation and effortless insurance claims coordination.' },
            { num: '02', title: 'Structural Alignment', desc: 'Laser-guided frame straightening returning the vehicle to exact factory tolerances.' },
            { num: '03', title: 'Refinishing', desc: 'Computerized color matching and multi-stage environmental baking for an OEM finish.' },
            { num: '04', title: 'Calibration & Delivery', desc: 'ADAS recalibration, rigorous QA inspection, ensuring true factory-spec operation.' },
          ].map((phase, i, arr) => (
            <div key={phase.num} className="group relative reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center border border-outline-variant/40 bg-surface-container-low text-on-surface-variant font-headline font-bold text-sm tracking-widest-custom shrink-0 group-hover:border-primary-container group-hover:text-primary-container group-hover:bg-surface-container transition-colors duration-300">
                  {phase.num}
                </div>
                {i < arr.length - 1 && (
                  <div className="h-px flex-1 bg-outline-variant/30 ml-4 hidden md:block" aria-hidden="true"></div>
                )}
              </div>
              <h4 className="font-label text-xs tracking-widest-custom uppercase text-outline-variant mb-3 group-hover:text-on-background transition-colors">Phase {phase.num}</h4>
              <h3 className="font-headline text-lg font-bold uppercase text-on-background mb-3 tracking-tight">{phase.title}</h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    { num: '01', src: IMG.advisor, alt: 'Service advisor at the Williamson-Collision Cadillac front counter', name: 'Service Advisors', role: 'Insurance & Estimates' },
    { num: '02', src: IMG.technicianPhilip, alt: 'Master body technician Philip at the Williamson-Collision aluminum repair bay', name: 'Master Body Techs', role: 'Aluminum & Structural' },
    { num: '03', src: IMG.teamWarehouse, alt: 'Williamson-Collision Center parts and warehouse team', name: 'Parts & Logistics', role: 'OEM Inventory On-Site' },
  ];

  return (
    <section id="team" data-tone="light" className="py-32 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-14 items-end">
          <div className="lg:col-span-7 reveal">
            <h2 className="font-label text-xs tracking-widest-custom uppercase text-accent-deep mb-5 border-l-2 border-accent-deep pl-4">The People</h2>
            <h3 className="font-headline text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-ink leading-[0.95]">
              Factory-Trained.<br/><span className="text-ink-muted">Locally Rooted.</span>
            </h3>
          </div>
          <div className="lg:col-span-5 reveal reveal-delay-2">
            <p className="font-body text-sm md:text-base text-ink-muted leading-relaxed mb-6">
              Many of our technicians have been with the Williamson family for over a decade. Every team member, from the service advisors at the front counter to the body techs in the booth, is OEM-trained and continuously certified on the latest manufacturer procedures.
            </p>
            <a href="#schedule" className="inline-flex items-center gap-3 font-headline text-sm font-bold uppercase tracking-widest-custom text-accent-deep hover:text-ink transition-colors">
              Meet us in person
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {members.map((m, i) => (
            <div
              key={m.num}
              className="group relative aspect-[4/5] overflow-hidden border border-paper-line shadow-2xl shadow-black/15 reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img alt={m.alt} src={m.src} className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
              {/* Caption scrim stays dark so white text remains readable over varied photos */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <span className="font-label text-[10px] tracking-widest-custom uppercase text-primary-container flex items-center gap-3 mb-4">
                  <span className="w-6 h-px bg-primary-container"></span>{m.num}
                </span>
                <h5 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-tight text-white leading-[1.05] mb-2">{m.name}</h5>
                <p className="font-label text-[10px] tracking-widest-custom uppercase text-white/75">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsurancePartners() {
  const partners = [
    'STAR Casualty (Preferred Repair Facility)',
    'Direct Insurance Billing',
    'On-Site Enterprise Rent-A-Car',
    'Loss-of-Use Coordination',
    'Towing Network',
    'All Major Carriers Accepted',
  ];
  return (
    <section data-tone="dark" className="py-20 bg-background border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="reveal reveal-left">
            <h2 className="font-label text-xs tracking-widest-custom uppercase text-primary-container mb-4 border-l-2 border-primary-container pl-4">Insurance &amp; Logistics</h2>
            <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-background leading-tight">
              We handle the paperwork. <span className="text-on-surface-variant">You drive away.</span>
            </h3>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 reveal reveal-right">
            {partners.map((p) => (
              <div key={p} className="flex items-start gap-3 border-l-2 border-outline-variant/40 pl-4 py-2 hover:border-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary-container text-base mt-0.5">check_circle</span>
                <span className="font-body text-sm text-on-background">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WeAreHere() {
  return (
    <section data-tone="dark" className="relative w-full bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[260px]">
        {/* Vehicle image — fades into the dark from the right */}
        <div className="relative lg:col-span-5 h-[200px] lg:h-auto">
          <img
            src={IMG.frameRackWide}
            alt="Cadillac on the lift inside the Williamson-Collision shop"
            className="absolute inset-0 w-full h-full object-cover object-left"
          />
          {/* Horizontal fade to the right edge so the image bleeds into the dark CTA column */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/15 via-background/35 to-background"></div>
          {/* Subtle bottom fade for mobile layout */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden"></div>
        </div>

        {/* CTA content */}
        <div className="lg:col-span-7 bg-background flex flex-col justify-center gap-10 md:gap-12 px-8 md:px-12 lg:px-16 py-14 md:py-16 lg:py-20">
          <div className="reveal">
            <h2 className="font-label text-xs tracking-widest-custom uppercase text-primary-container mb-4 border-l-2 border-primary-container pl-4">Ready to get started?</h2>
            <h3 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter text-on-background leading-[0.95]">
              We&apos;re Here<br/><span className="text-on-surface-variant">to Help.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 reveal reveal-delay-2">
            <a
              href="tel:+13052388801"
              className="group flex flex-col justify-between gap-8 p-6 md:p-7 border border-outline-variant/30 hover:border-primary-container transition-colors duration-500 min-h-[150px]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-label text-[10px] tracking-widest-custom uppercase text-primary-container flex items-center gap-2"><span className="w-6 h-px bg-primary-container"></span>Call</span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors">call</span>
              </div>
              <div className="font-headline text-xl md:text-2xl font-bold tracking-tight text-on-background group-hover:text-primary-container transition-colors leading-tight">305-238-8801</div>
            </a>

            <a
              href="#location"
              className="group flex flex-col justify-between gap-8 p-6 md:p-7 border border-outline-variant/30 hover:border-primary-container transition-colors duration-500 min-h-[150px]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-label text-[10px] tracking-widest-custom uppercase text-primary-container flex items-center gap-2"><span className="w-6 h-px bg-primary-container"></span>Visit</span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors">event</span>
              </div>
              <div className="font-headline text-xl md:text-2xl font-bold tracking-tight text-on-background group-hover:text-primary-container transition-colors leading-tight">Schedule Appointment</div>
            </a>

            <a
              href="#schedule"
              className="group flex flex-col justify-between gap-8 p-6 md:p-7 bg-primary-container text-on-primary-container hover:bg-white transition-colors duration-500 min-h-[150px]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-label text-[10px] tracking-widest-custom uppercase opacity-70 flex items-center gap-2"><span className="w-6 h-px bg-current"></span>Estimate</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
              <div className="font-headline text-xl md:text-2xl font-bold tracking-tight leading-tight">Get an Estimate</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" data-tone="light" className="py-24 bg-paper border-t border-paper-line">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal reveal-left">
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tighter text-ink mb-6">Williamson Automotive Collision Center</h2>
            <p className="font-body text-sm text-ink-muted mb-8 max-w-md">
              Our state-of-the-art repair and restoration facility in South Miami is engineered to provide an unparalleled service experience.
            </p>

            <div className="space-y-8 bg-paper-card p-8 border border-paper-line">
              <div>
                <h3 className="font-label text-xs tracking-widest-custom uppercase text-ink-faint mb-2">Address</h3>
                <p className="font-headline text-lg tracking-tight text-ink">19300 SW 108 Ave<br/>Miami, FL 33157</p>
              </div>

              <div>
                <h3 className="font-label text-xs tracking-widest-custom uppercase text-ink-faint mb-2">Hours of Operation</h3>
                <ul className="text-sm font-body text-ink-muted space-y-2">
                  {[
                    ['Monday', '7:30 AM - 7:00 PM'],
                    ['Tuesday', '7:30 AM - 7:00 PM'],
                    ['Wednesday', '7:30 AM - 7:00 PM'],
                    ['Thursday', '7:30 AM - 7:00 PM'],
                    ['Friday', '7:30 AM - 7:00 PM'],
                    ['Saturday', '8:00 AM - 5:00 PM'],
                  ].map(([day, hrs]) => (
                    <li key={day} className="flex justify-between border-b border-paper-line pb-2">
                      <span>{day}</span>
                      <span className="text-ink font-medium">{hrs}</span>
                    </li>
                  ))}
                  <li className="flex justify-between text-ink-faint">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-label text-xs tracking-widest-custom uppercase text-ink-faint mb-2">Body Shop</h3>
                  <a href="tel:+13052388801" className="font-headline text-xl text-accent-deep hover:text-ink transition-colors">305-238-8801</a>
                </div>
                <div>
                  <h3 className="font-label text-xs tracking-widest-custom uppercase text-ink-faint mb-2">Enterprise (On-Site)</h3>
                  <a href="tel:+13052561112" className="font-headline text-xl text-ink hover:text-accent-deep transition-colors">305-256-1112</a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-right reveal-delay-2 flex flex-col gap-4">
            <div className="relative h-[320px] overflow-hidden border border-paper-line">
              <img alt="Williamson-Collision Center service drive entrance" src={IMG.facadeFront} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/45 to-transparent p-5">
                <span className="font-label text-[10px] tracking-widest-custom uppercase text-white">Look for the Cadillac &middot; GMC &middot; Buick signage</span>
              </div>
            </div>
            <div className="h-[260px] w-full border border-paper-line bg-paper-card p-2">
              <iframe
                title="Williamson-Collision Location Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Williamson+Cadillac+19300+SW+108+Ave+Miami+FL+33157&z=15&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#team' },
    { label: 'Services', href: '#services' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Why Choose Us', href: '#facility' },
    { label: 'FAQs', href: '#' },
    { label: 'Contact Us', href: '#location' },
  ];
  const services = [
    { label: 'Collision Repair', href: '#services' },
    { label: 'Paint & Refinishing', href: '#services' },
    { label: 'Frame Straightening', href: '#services' },
    { label: 'ADAS Calibration', href: '#services' },
    { label: 'Insurance Assistance', href: '#services' },
    { label: 'Rental Assistance', href: '#services' },
  ];

  return (
    <footer className="bg-paper border-t border-paper-line">
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-14 md:pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <a href="#" aria-label="Williamson Automotive Collision Center home" className="inline-flex items-center overflow-hidden h-32 md:h-40">
              <img
                src={LOGO.brand}
                alt="Williamson Automotive Collision Center"
                className="h-48 md:h-60 w-auto object-contain object-left"
                loading="lazy"
              />
            </a>
            <div className="mt-4 font-label text-[10px] tracking-widest-custom uppercase text-accent-deep">
              The Body Shop of Williamson Automotive
            </div>
            <p className="mt-3 font-body text-sm text-ink-muted leading-relaxed max-w-xs">
              Proudly serving Miami and the surrounding communities with the certified collision repair you expect from the Williamson Automotive name.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-paper-line flex items-center justify-center text-ink-muted hover:text-accent-deep hover:border-accent-deep transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M13.5 21v-7.125h2.49l.373-2.892H13.5V9.142c0-.836.232-1.406 1.432-1.406h1.53V5.151a20.5 20.5 0 0 0-2.231-.114c-2.207 0-3.719 1.347-3.719 3.822v2.124H8v2.892h2.512V21h2.988z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-paper-line flex items-center justify-center text-ink-muted hover:text-accent-deep hover:border-accent-deep transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Google" className="w-9 h-9 rounded-full border border-paper-line flex items-center justify-center text-ink-muted hover:text-accent-deep hover:border-accent-deep transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M21.35 11.1H12v3.2h5.35c-.5 2.45-2.55 4.2-5.35 4.2-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c1.45 0 2.75.5 3.75 1.45l2.4-2.4C16.45 4.35 14.35 3.5 12 3.5 6.85 3.5 2.7 7.65 2.7 12.8s4.15 9.3 9.3 9.3c5.4 0 9.05-3.8 9.05-9.15 0-.65-.05-1.25-.2-1.85z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-headline text-sm font-bold uppercase tracking-tight text-ink mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-body text-sm text-ink-muted hover:text-accent-deep transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-headline text-sm font-bold uppercase tracking-tight text-ink mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="font-body text-sm text-ink-muted hover:text-accent-deep transition-colors">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-3">
            <h4 className="font-headline text-sm font-bold uppercase tracking-tight text-ink mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-accent-deep shrink-0 mt-px">place</span>
                <span className="font-body text-sm text-ink-muted leading-relaxed">
                  19300 S Dixie Hwy<br/>Miami, FL 33157
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-accent-deep shrink-0 mt-px">call</span>
                <a href="tel:+13052388801" className="font-body text-sm text-ink-muted hover:text-accent-deep transition-colors">305-238-8801</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-accent-deep shrink-0 mt-px">mail</span>
                <a href="mailto:info@williamsoncollision.com" className="font-body text-sm text-ink-muted hover:text-accent-deep transition-colors break-all">info@williamsoncollision.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-accent-deep shrink-0 mt-px">schedule</span>
                <div className="font-body text-sm text-ink-muted leading-relaxed">
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Sat: 8:00 AM - 12:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-paper-line">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-ink-muted">© 2026 Williamson Automotive Collision Center. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-ink-muted hover:text-accent-deep transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-ink-muted hover:text-accent-deep transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useScrollReveal();
  return (
    <div className="min-h-screen flex flex-col antialiased bg-paper text-ink selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandStrip />
        <ServicesBento />
        <FacilityTour />
        <Process />
        <Team />
        <InsurancePartners />
        <Location />
        <WeAreHere />
      </main>
      <Footer />
    </div>
  );
}
