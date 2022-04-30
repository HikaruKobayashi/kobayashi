import type {NextPage, GetStaticProps} from 'next';
import * as React from 'react';
import Top from '../components/profile/top';
import ProfileSection from '../components/profile/profile';
import RecentWork from '../components/profile/work';
import Bio from '../components/profile/bio';
import Favorite from '../components/profile/favorite';
import Contact from '../components/profile/contact';

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
