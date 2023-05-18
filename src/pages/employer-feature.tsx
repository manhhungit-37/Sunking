import Head from 'next/head';

import Footer from '@/components/Footer';
import EmployerHeader from '@/components/EmployerHeader';
import EmployerFeature from '@/modules/EmployerFeature';

export default function AdvancedSearchPage() {
  return (
    <>
      <Head>
        <title>Employer Feature Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EmployerHeader />
        <EmployerFeature />
        <Footer />
      </main>
    </>
  );
}
