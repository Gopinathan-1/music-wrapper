"use client";

import Link from "next/link";
import { TopAppBar, BottomNavBar, Footer } from "@/components/ui/echodna/Navigation";
import { Button } from "@/components/ui/echodna/Button";
import { GlassCard } from "@/components/ui/echodna/GlassCard";
import { DNAChip } from "@/components/ui/echodna/DNAChip";
import { WaveformVisualizer } from "@/components/ui/echodna/WaveformVisualizer";
import { Brain, BarChart, Microscope } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [ctaLink, setCtaLink] = useState("/login");

  useEffect(() => {
    if (document.cookie.includes("spotify_access_token=")) {
      setCtaLink("/dashboard");
    }
  }, []);

  return (
    <>
      {/* Aurora Background Blobs */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary aurora-blur opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-tertiary aurora-blur opacity-20"></div>
      </div>

      <TopAppBar />

      <main className="relative flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex flex-col items-center justify-center text-center px-container-margin py-20 overflow-hidden">
          {/* Background Collage */}
          <div className="absolute inset-0 -z-10 opacity-20 flex flex-wrap justify-center items-center gap-8 pointer-events-none">
            <div className="w-32 h-32 rounded-xl bg-surface-variant transform rotate-6 border border-white/10 relative overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO6DdVh-9W53hZqZeTW3KXtxigltyFay4xMQPoLAlL7rFQu7FFV9goBEHFgawhR5jvRTK925YXcOpV31_6k6b1qn2d4dNQYj5ZShT0EkbPnhxYbk5-rhim-8nyZcex4udm0WITJT5wALdwkRRz4QZlyAmHylUI9sVqVPFG39QWnn03DqrxCTXWb-ClGppobO_R1vn2BpysNOZzuqevxXQDOMMQG7iZ6EH7tuCQ_OThQysoV2SnPtScppx325g2xQUyjqQL4mvgLQA" alt="" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="w-48 h-48 rounded-xl bg-surface-variant transform -rotate-12 translate-y-12 border border-white/10 relative overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfYAI97Wr_kVnj5g10X-zk_PGhrmkt8nCnvapWwkfCBaz3WiHO6xVsGh99SzucoVeMbSztIxoYA7R8xrifvolYI2EEfOplvHJdruYB5rf5dPz9L_w0L0gNmPQALPa4GihnnRHs5tnzp61InI4qr3aBsLl3qvR0_TyuG7MTfVJrMJ3Tla3_A86-X1YkSfbBSqt1q86g1Lft8cLN6_zgjpc_jQrUzfGsOJj45HioQffcFUpDdRRB2nUy0KxqUzuGydutTiIXRbm0rdU" alt="" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>

          <h1 className="font-display-xl text-display-xl max-w-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary">
            Your Spotify Taste Has a Personality.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
            Discover your listening archetype, emotional spectrum, and musical alter ego with our advanced Data-Kineticism AI.
          </p>

          <div className="mb-12">
            <WaveformVisualizer />
          </div>

          <Link href={ctaLink}>
            <Button variant="primary">ANALYZE MY SPOTIFY</Button>
          </Link>
        </section>

        {/* Personality Archetypes Section */}
        <section id="archetypes" className="py-section-gap px-container-margin max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4">The Archetypes</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8 group hover:border-primary/50 transition-all">
              <div className="w-full aspect-square rounded-2xl mb-6 overflow-hidden relative">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdTIlpzSactIxAB1WD41WgQLzAopjyUbwFRs9Yftz2gPWrw5HN3v89_uYg6EyJ6M1tLGX49cg17BzAehj9x6N-L0Di_bvfnmyQD5Cp-h0qt7VLbxZRnBamRTgAgTSu2kpA-OQPlmcEmeQI6PpuL2Vo7yi86GszLPCBectXBdd9GjqXs1bKN5chz5056eDf69lz9FzR25R-NyPEtB1wY0itLuMNk5Zk4NJf8ASlj317DfgSIknifJ9Kw7qjBf5G8Vu4G2GfzKRl4g0" alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full font-label-caps text-[10px] backdrop-blur-md">ARCHETYPE 01</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Midnight Dreamer</h3>
              <p className="text-on-surface-variant font-body-md mb-6">You gravitate towards ambient textures and lo-fi beats that define your nocturnal introspection.</p>
              <div className="flex flex-wrap gap-2">
                <DNAChip color="primary">AMBIENT</DNAChip>
                <DNAChip color="primary">GLITCH</DNAChip>
                <DNAChip color="primary">CHILL</DNAChip>
              </div>
            </GlassCard>

            <GlassCard glowing className="p-8 scale-105 z-10">
              <div className="w-full aspect-square rounded-2xl mb-6 overflow-hidden relative">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2RSVO_l3rK9yrWPVvQMwryMU97a_ihwufLG_lRVrVetCczIvas2hOHm8TQIliAm3D_BmN4QtcnRd2wzMH1xEmrf7qR58FMdd3lhFF-LDhA6QzB9eOe1Ay2Zjt3E-AiHPdd0fciXHTwR0QzJzGP77YNNEvRrjbPq6tvio7lHTVf9YgzDyBEWR--wWs0mPfLDBYchxr6mGm6ioHFyBtRh3-PepMRiY5vuAgSUTpMM4sUW4DsLTxgaIhU83nq6WgdKnrevOsD8qToK0" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-on-primary px-4 py-1.5 rounded-full font-label-caps text-[10px]">MOST POPULAR</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Sonic Architect</h3>
              <p className="text-on-surface-variant font-body-md mb-6">Detailed, layered, and complex. You appreciate the technical brilliance behind every master track.</p>
              <div className="flex flex-wrap gap-2">
                <DNAChip color="primary">ELECTRONICA</DNAChip>
                <DNAChip color="primary">IDM</DNAChip>
                <DNAChip color="primary">TECHNO</DNAChip>
              </div>
            </GlassCard>

            <GlassCard className="p-8 group hover:border-primary/50 transition-all">
              <div className="w-full aspect-square rounded-2xl mb-6 overflow-hidden relative">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBT5JSde0xfjfbhzMYdyJDHtIYH9lQSxJtRlnnGRxvRDAuo2m9EqSgeLWnuMnHCVsFVsjnkDP5O4NB3N3A8M22GZdn2ehIJMz4j2dfwdazPOjaJsF0ahqBuVdaw1eOOOTDVmpM3dK3_TtyqRrfC2OIQcZ4Gw3gN4llK5-w95jfb8DV7f9vwamAgCQYo-a9TF6R6Sa0_6HpLNJ-mXdukJNOfX367kN7iCGtpaBaq77kgGIAlkvoUwYI9c1XW9K2G1fBZSAzwefCvGw" alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full font-label-caps text-[10px]">ARCHETYPE 03</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Vibe Curator</h3>
              <p className="text-on-surface-variant font-body-md mb-6">Always ahead of the curve. Your playlists are the blueprint for everyone else's sound.</p>
              <div className="flex flex-wrap gap-2">
                <DNAChip color="primary">INDIE</DNAChip>
                <DNAChip color="primary">FUTURE BASS</DNAChip>
                <DNAChip color="primary">HYPERPOP</DNAChip>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Genre DNA Section */}
        <section className="py-section-gap px-container-margin max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <GlassCard className="p-12 rounded-[40px] relative">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <Microscope size={120} className="text-primary" />
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-8">Genre DNA</h3>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between font-label-caps text-label-caps">
                    <span>SYNTHWAVE</span>
                    <span className="text-primary">82%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[82%] rounded-full shadow-[0_0_10px_rgba(83,224,118,0.5)]"></div>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="font-body-md text-on-surface-variant italic">"We analyze your real-time listening history to map your sonic fingerprints."</p>
              </div>
            </GlassCard>
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-4 block">ANALYTICAL DEPTH</span>
            <h2 className="font-display-xl text-headline-lg lg:text-[56px] leading-tight mb-6">Beyond just a 'Wrapped' recap.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              We parse millions of data points—from frequency spectrums to lyrical sentiment—to map the neural pathways of your musical identity.
            </p>
          </div>
        </section>

        {/* Built From Your Data CTA */}
        <section id="join-now" className="py-section-gap px-container-margin">
          <GlassCard className="max-w-5xl mx-auto rounded-[40px] p-12 lg:p-20 text-center border-2 border-white/5 relative">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <h2 className="font-display-xl text-headline-lg lg:text-display-xl mb-8">Ready to see your Alter Ego?</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">
                Securely connect your Spotify account to generate your unique musical identity card.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={ctaLink}>
                  <Button variant="primary">ANALYZE NOW</Button>
                </Link>
                <Button variant="secondary">LEARN MORE</Button>
              </div>
            </div>
          </GlassCard>
        </section>
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
