import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
