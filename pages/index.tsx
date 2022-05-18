import type {NextPage, GetStaticProps} from 'next';
import * as React from 'react';
import Top from '../src/components/profile/top';
import Profile from '../src/components/profile/profile';
import Bio from '../src/components/profile/bio';
import Favorite from '../src/components/profile/favorite';
import Work from '../src/components/profile/work';
import Contact from '../src/components/profile/contact';

const Home: NextPage = () => {
  return (
    <>
      <Top />
      <Profile />
      <Bio />
      <Favorite />
      <Work />
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
