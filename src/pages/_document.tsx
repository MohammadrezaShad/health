import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
  render() {
    return (
      <Html dir='rtl'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <div id='portal' />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
