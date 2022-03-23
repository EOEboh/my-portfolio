import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
  return(
    <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme='light' attribute='class'>   
     <Component {...pageProps} />
    </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
