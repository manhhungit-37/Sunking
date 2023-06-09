import Head from 'next/head';

import JobseekLayout from '@/layouts/JobseekLayout';
import SignIn from '@/modules/SignIn';

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>SignIn Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <JobseekLayout>
          <SignIn />
        </JobseekLayout>
      </main>
    </>
  );
}
