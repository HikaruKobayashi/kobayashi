import type {NextPage, GetStaticProps} from 'next';
import * as React from 'react';
import ProfileSection from '../src/components/profile';
import BioSection from '../src/components/profile/bio';

const Home: NextPage = () => {
  return (
    <>
      <ProfileSection />
      <BioSection />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
