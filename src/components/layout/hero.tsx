import GetStartedButton from '@/components/ui/button-animated';
import { Button } from '@/components/ui/button';
import TextPressure from '@/components/ui/TextPressure'
import { Link } from 'react-router-dom';

function Hero() {
  return (
      <main className='flex flex-col justify-center items-center flex-grow text-center px-4 py-8'>
        <TextPressure
            text="AMAZONAS™"
            flex={true}
            alpha={true}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            minFontSize={20}
            className='font-mono font-extrabold text-primary mb-4'
        /> 
        <h2 className='font-mono text-secondary max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl text-xs sm:text-sm md:text-base lg:text-lg mt-2 mb-6'>
          Bem-vindo à Amazonas, onde a realidade encontra a indireta. Inspirados pela diversidade e pelo fluxo constante do maior rio do mundo, reunimos galerias que fazem você refletir sobre a vida, o amor e a motivação. Dos animais fofinhos com toques de sarcasmo aos casais felizes que escondem verdades cruas, aqui você navega por momentos que acordam a mente, revelam a verdade e desafiam suas ilusões.
        </h2>
        
        <div className='flex flex-col gap-4 mt-4 w-full max-w-xs sm:max-w-sm md:flex-row md:gap-4 md:max-w-none'>
          <Link to="/motivacao" className='w-full'>
            <GetStartedButton className='bg-ring hover:bg-ring cursor-target w-full'>
              Ver Motivação Real
            </GetStartedButton>
          </Link>

          <Link to="/gallery" className='w-full'>
            <Button variant='ghost' className='border bg-ring/5 h-10 w-full hover:border border-ring cursor-target'>
              Explorar Realidade
            </Button>
          </Link>
        </div>
      </main>
  );
}

export default Hero;