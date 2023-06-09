import Head from 'next/head';

import JobseekLayout from '@/layouts/JobseekLayout';
import HomePage from '@/modules/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <JobseekLayout>
          <HomePage />
        </JobseekLayout>
      </main>
    </>
  );
}