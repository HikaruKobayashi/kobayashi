import type {NextPage, GetStaticProps} from 'next';
import * as React from 'react';
import ProfileSection from '../src/components/profile';
import BioSection from '../src/components/profile/bio';
import RecentWork from '../src/components/work/recent';
import Contact from '../src/components/profile/contact';

const Home: NextPage = () => {
  return (
    <>
      <ProfileSection />
      {/* <BioSection /> */}
      {/* <RecentWork /> */}
      <Contact />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
