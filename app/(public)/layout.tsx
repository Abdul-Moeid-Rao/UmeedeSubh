import React, { Suspense } from 'react';
import AdmissionsBanner from '@/components/AdmissionsBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-ink">
      <Loader />
      <AdmissionsBanner />
      <Suspense fallback={<div className="h-20 bg-white border-b border-mist" />}>
        <Navbar />
      </Suspense>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
