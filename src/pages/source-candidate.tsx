import Head from 'next/head';

import EmployerHeader from '@/components/EmployerHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import SourceCandidate from '@/modules/SourceCandidate';

export default function SourceCandidatePage() {
  return (
    <>
      <Head>
        <title>Source Candidate Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EmployerHeader />
        <Breadcrumbs />
        <SourceCandidate />
        <Footer />
      </main>
    </>
  );
}