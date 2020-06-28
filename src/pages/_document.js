import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import RootCSSVars from '../components/rootCSSVars';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://use.typekit.net/kna4wmf.css" rel="stylesheet" />
          <RootCSSVars />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
