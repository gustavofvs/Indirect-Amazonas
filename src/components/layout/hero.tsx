import GetStartedButton from '@/components/ui/button-animated';
import { Button } from '@/components/ui/button';

function Hero() {
  return (
      <main className='flex flex-col justify-center items-center flex-grow text-center'>
        <h1 className='font-mono font-extrabold text-[90px] text-primary'>
          AMAZONAS™
        </h1>
        <h2 className='font-mono text-secondary max-w-5xl'>
          Bem-vindo à Amazonas, onde a diversidade encontra a conveniência. Inspirados pela riqueza e pelo fluxo constante do maior rio do mundo, reunimos um catálogo 
          imenso de produtos para facilitar o seu dia a dia. Da tecnologia que move você aos itens que transformam sua casa, aqui você navega com facilidade, descobre novidades incríveis e recebe tudo com a agilidade que você merece.
        </h2>
        
        <div className='flex gap-4 mt-8'>
          <GetStartedButton className='bg-ring hover:bg-ring cursor-pointer'>
            Explorar Produtos
          </GetStartedButton>

          <Button variant='ghost' className='border bg-ring/5 cursor-pointer h-10 w-50 hover:border border-ring'>
            Ver Promoções
          </Button>
        </div>
      </main>
  );
}

export default Hero;