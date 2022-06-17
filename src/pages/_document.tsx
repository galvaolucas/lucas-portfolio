/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Tapestry&display=swap" rel="stylesheet"></link>
                    
                </Head>
                <body>
                    <script src="//cdn.jsdelivr.net/npm/faunadb@latest/dist/faunadb.js"></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}