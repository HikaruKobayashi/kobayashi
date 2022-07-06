import { useEffect, useState, useRef } from 'react';
import {Box, ColorModeScript} from '@chakra-ui/react';
import {ReactNode} from 'react';
import HomeHead from './head';
import Header from './header';
import Footer from './footer';
import theme from './../../../lib/theme';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.birds.min';

type Props = {
  children: ReactNode;
};

const Main = ({children, ...props}: Props) => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const netRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: netRef.current,
        quantity: 2.00,
        birdSize: 1,
        mouseControls: false,
        touchControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundAlpha: 0.0,
        THREE: THREE,
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect])

  return (
    <Box as="main">
      <HomeHead />
      <Box width="100%" height="100%" position="fixed" zIndex="-1" margin="0" padding="0" ref={netRef} />
      <Box width="100%" height="100%" margin="0" padding="0" {...props}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Header />
        <Box marginTop="14">{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Main;
