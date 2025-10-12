import HeaderMenu from '@/components/layout/header';
import CardGrid from '@/components/shared/CardGrid';
import { animals } from '@/data/animals';

function Gallery() {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <HeaderMenu />
      <CardGrid
        items={animals}
        title="Animais Fofinhos"
        subtitle="Momentos fofinhos com um toque de indireta, porque a vida não é sempre doce e os animais sabem disso melhor que ninguém."
      />
    </div>
  );
}

export default Gallery;