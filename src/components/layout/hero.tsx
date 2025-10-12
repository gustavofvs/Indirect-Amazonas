import GetStartedButton from '@/components/ui/button-animated';
import { Button } from '@/components/ui/button';
import TextPressure from '@/components/ui/TextPressure'
import { Link } from 'react-router-dom';

function Hero() {
  return (
      <main className='flex flex-col justify-center items-center flex-grow text-center'>
        <TextPressure
            text="AMAZONAS™"
            flex={true}
            alpha={true}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            minFontSize={36}
            className='font-mono font-extrabold text-primary'
        /> 
        <h2 className='font-mono text-secondary max-w-5xl'>
          Bem-vindo à Amazonas, onde a realidade encontra a indireta. Inspirados pela diversidade e pelo fluxo constante do maior rio do mundo, reunimos galerias que fazem você refletir sobre a vida, o amor e a motivação. Dos animais fofinhos com toques de sarcasmo aos casais felizes que escondem verdades cruas, aqui você navega por momentos que acordam a mente, revelam a verdade e desafiam suas ilusões.
        </h2>
        
        <div className='flex gap-4 mt-8'>
          <Link to="/motivacao">
            <GetStartedButton className='bg-ring hover:bg-ring cursor-target'>
              Ver Motivação Real
            </GetStartedButton>
          </Link>

          <Link to="/gallery">
            <Button variant='ghost' className='border bg-ring/5 h-10 w-50 hover:border border-ring cursor-target'>
              Explorar Realidade
            </Button>
          </Link>
        </div>
      </main>
  );
}

export default Hero;