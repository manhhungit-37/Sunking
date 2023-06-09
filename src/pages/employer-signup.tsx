import Head from 'next/head';

import EmployerSignUp from '@/modules/EmployerSignUp';
import Footer from '@/components/Footer';
import EmployerHeader from '@/components/EmployerHeader';

export default function EmployerSignUpPage() {
  return (
    <>
      <Head>
        <title>Employer SignUp Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EmployerHeader type="sign-up" />
        <EmployerSignUp />
        <Footer />
      </main>
    </>
  );
}
