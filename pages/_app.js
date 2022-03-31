import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
  return(
    <> 
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale= 1.0. maximum-scale=1.0, user-scalable=0' />
    </Head>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme='light' attribute='class'>   
     <Component {...pageProps} />
    </ThemeProvider>
    </QueryClientProvider>
    </>
  )
}

export default MyApp
