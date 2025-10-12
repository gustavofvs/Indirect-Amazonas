import HeaderMenu from '@/components/layout/header';
import Hero from '@/components/layout/hero';

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>

      <HeaderMenu />
      
      <Hero />

    </div>
  );
}

export default Home;