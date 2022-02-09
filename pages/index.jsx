import Head from 'next/head';
import { styled } from '../stitches.config';
import { Text } from '../components/Text';

const Box = styled('div', {});

const StyledText = styled(Text, {
  fontSize: 20,
});

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
});

export default function Home() {
  return (
    <Box css={{ paddingY: '$6' }}>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>
        <Text>This is Text component.</Text>
        <StyledText>Hello, from Stitches.</StyledText>
      </Container>
    </Box>
  );
}
