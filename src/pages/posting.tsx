import Head from 'next/head';

import JobseekLayout from '@/layouts/JobseekLayout';
import Posting from '@/modules/Posting';

export default function PostingPage() {
  return (
    <>
      <Head>
        <title>Posting Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <JobseekLayout>
          <Posting />
        </JobseekLayout>
      </main>
    </>
  );
}
