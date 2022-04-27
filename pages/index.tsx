import type {NextPage, GetStaticProps} from 'next';
import * as React from 'react';
import Top from '../src/components/profile/top';
import ProfileSection from '../src/components/profile/profile';
import RecentWork from '../src/components/profile/work';
import Bio from '../src/components/profile/bio';
import Favorite from '../src/components/profile/favorite';
import Contact from '../src/components/profile/contact';

const Home: NextPage = () => {
  return (
    <>
      <Top />
      <ProfileSection />
      <Bio />
      <Favorite />
      <RecentWork />
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
