"use client";

import React, { useState } from "react";

const content = {
  en: {
    heroTitle: "Professional Steam Detailing Service",
    heroSub: "At your door.",
    heroDesc:
      "Premium steam detailing at your home or office. No drop-off. No waiting.",
    cta: "Book Now",
    book: "Book",

    galleryTitle: "REAL RESULTS",
    before: "BEFORE",
    after: "AFTER",

    experienceTitle: "DETAILING REIMAGINED",
    experience: [
      "Book online 24/7",
      "We come to you",
      "No waiting or drop-off",
      "Consistent premium results",
    ],

    pricingTitle: "3 TIERS. ONE STANDARD.",
    tiers: [
      {
        name: "Small Room Carpet Cleaning",
        price: "$65",
        desc: "Quick refresh for carpets and mats",
      },
      {
        name: "2 Small Rooms Bundle Package",
        price: "$120",
        desc: "Steam cleaning for two small carpeted rooms at a discounted bundle rate",
        popular: true,
      },
      {
        name: "Master/Large Room Carpet Cleaninng",
        price: "$80",
        desc: "Professional deep steam cleaning for master bedrooms",
      },
      {
        name: "Sedan Basic Detailing",
        price: "$130",
        desc: "Deep interior steam cleaning with complimentary exterior wash included",
      },
      {
        name: "SUV/Truck Detail",
        price: "$160",
        desc: "Full interior vapor cleaning for SUVs and small trucks plus free exterior wash.",
      },
    ],

    howTitle: "HOW IT WORKS",

howDesc:
  "A simple, fast, and professional process from booking to final results.",

steps: [
  {
    icon: "📅",
    title: "Book Online",
    desc: "Schedule your service from your phone in just minutes.",
  },
  {
    icon: "🚐",
    title: "We Come To You",
    desc: "Mobile service straight to your home or office.",
  },
  {
    icon: "💨",
    title: "Steam Cleaning",
    desc: "We remove dirt, stains, and odors using professional steam.",
  },
  {
    icon: "✨",
    title: "Enjoy",
    desc: "Your space or vehicle feels clean and refreshed.",
  },
],
    reviewsTitle: "WHAT CLIENTS SAY",
    reviews: [
      "Best detailing service I’ve ever had.",
      "Super convenient and professional.",
      "Car looked brand new.",
    ],
  },

  es: {
    heroTitle: "Servicio Professional de Limpieza a Vapor",
    heroSub: "Directo a tu puerta.",
    heroDesc:
      "Limpieza premium a vapor en tu casa u oficina. Sin esperas ni traslados.",
    cta: "Reservar ahora",
    book: "Reservar",

    galleryTitle: "RESULTADOS REALES",
    before: "ANTES",
    after: "DESPUÉS",

    experienceTitle: "DETALLADO REINVENTADO",
    experience: [
      "Reserva 24/7",
      "Vamos a tu ubicación",
      "Sin esperas",
      "Resultados premium",
    ],

    pricingTitle: "3 OPCIONES. UN ESTÁNDAR.",
    tiers: [
      {
        name: "Limpieza de Alfombra-Cuarto Pequeños",
        price: "$65",
        desc: "Limpieza rapida y profunda para alfombras y tapetes pequeños",
      },
      {
        name: "Paquete de 2 Cuartos Pequeños",
        price: "$120",
        desc: "Limpieza a vapor para dos cuartos pequeños con tarifa de paquete descuento",
        popular: true,
      },
      {
        name: "Limpieza de Alfombra-Cuarto Grande/Master",
        price: "$80",
        desc: "Limpieza profesional profunda a vapor para cuartos grandes o master",
      },
      {
        name: "Detalle Básico para Sedán",
        price: "$130",
        desc: "Limpieza interior profunda a vapor con lavado exterior gratuito incluido",
      },
      {
        name: "Detallado SUV/Camioneta",
        price: "$160",
        desc: "Limpieza interior completa a vapor para SUVs y camionetas pequeñas más lavado exterior gratis.",
      },
    ],

    howTitle: "CÓMO FUNCIONA",

howDesc:
  "Un proceso fácil, rápido y profesional desde la reserva hasta el resultado final.",

steps: [
  {
    icon: "📅",
    title: "Reserva en línea",
    desc: "Agenda tu servicio desde tu teléfono en minutos.",
  },
  {
    icon: "🚐",
    title: "Llegamos a ti",
    desc: "Servicio móvil directo a tu casa u oficina.",
  },
  {
    icon: "💨",
    title: "Limpieza a vapor",
    desc: "Eliminamos suciedad y olores con vapor profesional.",
  },
  {
    icon: "✨",
    title: "Disfruta",
    desc: "Tu vehículo o espacio queda limpio y renovado.",
  },
],

    reviewsTitle: "OPINIONES",
    reviews: [
      "El mejor servicio que he usado.",
      "Muy conveniente.",
      "Mi carro quedó como nuevo.",
    ],
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = content[lang];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAV */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-yellow-400 font-bold text-xl">AE SteamPro</h1>

        {/* Modern Toggle */}
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-1 rounded-lg ${
              lang === "en" ? "bg-yellow-400 text-black" : "text-white"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang("es")}
            className={`px-4 py-1 rounded-lg ${
              lang === "es" ? "bg-yellow-400 text-black" : "text-white"
            }`}
          >
            ES
          </button>
        </div>
      </nav>

      {/* HERO */}
<section className="relative overflow-hidden px-6 py-20 lg:py-28">
  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-3xl rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    
    {/* LEFT SIDE */}
    <div className="relative z-10 text-center lg:text-left">
      <div className="inline-flex items-center gap-2 bg-white/5 border border-yellow-400/20 rounded-full px-4 py-2 text-sm text-yellow-300 mb-6 backdrop-blur-sm">
        ⭐ Professional Mobile Steam Cleaning
      </div>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
        {t.heroTitle}
        <br />
        <span className="text-yellow-400">{t.heroSub}</span>
      </h1>

      <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
        {t.heroDesc}
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <a
          href="https://wa.me/16502904837"
          target="_blank"
          className="bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 text-black px-8 py-4 rounded-2xl font-bold shadow-[0_0_30px_rgba(250,204,21,0.35)]"
        >
          {t.cta}
        </a>

        <a
          href="#pricing"
          className="border border-white/10 hover:border-yellow-400/40 bg-white/5 backdrop-blur-sm transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
        >
          Free Quote
        </a>
      </div>

      {/* STATS */}
      <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-300">
        <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-sm">
          🚘 Mobile Service
        </div>

        <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-sm">
          🌱 Eco-Friendly Steam
        </div>

        <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-sm">
          ⭐ Satisfaction Guaranteed
        </div>
      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative flex justify-center">
      
      {/* Glow Behind Image */}
      <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-full scale-75" />

      {/* Floating Badge */}
      <div className="absolute -top-4 -left-2 lg:left-10 z-20 bg-black/70 border border-yellow-400/30 backdrop-blur-md px-5 py-3 rounded-2xl shadow-2xl">
        <p className="text-yellow-400 font-bold text-sm">
          Trusted Professional Team
        </p>
      </div>

      {/* Main Image */}
      <img
        src="/Antonio_Erica_Front_Picture.png"
        alt="AE SteamPro Team"
        className="
          relative z-10
          w-full
          max-w-md
          lg:max-w-lg
          rounded-[32px]
          border border-yellow-400/20
          shadow-[0_25px_80px_rgba(0,0,0,0.65)]
          hover:scale-[1.02]
          transition-all
          duration-500
        "
      />
    </div>
  </div>
</section>

      {/* PRICING */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-8">{t.pricingTitle}</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.tiers.map((tier, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl border ${
                tier.popular
                  ? "border-yellow-400 bg-gray-900 scale-105"
                  : "border-gray-700"
              }`}
            >
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="text-3xl text-yellow-400 mt-2">{tier.price}</p>
              <p className="text-gray-400 mt-2">{tier.desc}</p>

              <a
                href="https://wa.me/16502904837"
                target="_blank"
                className="mt-4 inline-block bg-yellow-400 text-black px-4 py-2 rounded"
              >
                {t.book}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="p-10 bg-black text-center">
        <h2 className="text-3xl font-bold mb-10">
          {t.galleryTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* BEFORE */}
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              {t.before}
            </h3>

            <div className="grid gap-6">
              <div className="h-[350px] overflow-hidden rounded-2xl">
                <img
                  src="/Carpet_before.jpeg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="h-[350px] overflow-hidden rounded-2xl">
                <img
                  src="/Trailer_before.jpeg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              {t.after}
            </h3>

            <div className="grid gap-6">
              <div className="h-[350px] overflow-hidden rounded-2xl">
                <img
                  src="/Carpet_after.jpeg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="h-[350px] overflow-hidden rounded-2xl">
                <img
                  src="/Trailer_after.jpeg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>

        </div>
      </section>

 {/* HOW IT WORKS */}
<section className="bg-[#020617] px-6 py-24">
  <div className="max-w-7xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
      {t.howTitle}
    </h2>

    {/* DESCRIPTION */}
    <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
      {t.howDesc}
    </p>

    {/* CARDS */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {t.steps.map((step: any, index: number) => (
        <div
          key={index}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-black/60
            backdrop-blur-xl
            p-8
            text-center
            shadow-2xl
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-yellow-400/40
            hover:shadow-[0_0_40px_rgba(250,204,21,0.18)]
          "
        >

          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent pointer-events-none" />

          {/* ICON */}
          <div className="
            relative
            z-10
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            bg-yellow-400
            text-4xl
            shadow-[0_0_35px_rgba(250,204,21,0.45)]
          ">
            {step.icon}
          </div>

          {/* STEP */}
          <div className="relative z-10 mt-5 text-xs font-black tracking-[0.25em] text-yellow-400">
            STEP {index + 1}
          </div>

          {/* TITLE */}
          <h3 className="relative z-10 mt-4 text-2xl font-bold text-white">
            {step.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="relative z-10 mt-4 text-gray-400 leading-relaxed text-sm">
            {step.desc}
          </p>

        </div>
      ))}

    </div>
  </div>
</section>
      {/* REVIEWS */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">{t.reviewsTitle}</h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {t.reviews.map((review, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
            >
              ⭐⭐⭐⭐⭐
              <p className="mt-2 text-gray-300">{review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="p-10 text-center">
        <a
          href="https://wa.me/16502904837"
          target="_blank"
          className="bg-yellow-400 text-black px-8 py-4 rounded-xl text-lg font-semibold"
        >
          {t.cta}
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-6 text-gray-500 border-t border-gray-800">
        © AE SteamPro
      </footer>
    </div>
  );
}