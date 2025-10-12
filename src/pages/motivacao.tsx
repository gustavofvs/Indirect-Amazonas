import HeaderMenu from '@/components/layout/header';
import CardGrid from '@/components/shared/CardGrid';
import { motivations } from '@/data/motivations';

function Motivacao() {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <HeaderMenu />
      <CardGrid
        items={motivations}
        title="Motivação Real"
        subtitle="Momentos que inspiram reflexão sobre a realidade, com um toque de indireta para acordar."
      />
    </div>
  );
}

export default Motivacao;
