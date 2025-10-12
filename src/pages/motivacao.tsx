import HeaderMenu from '@/components/layout/header';
import TiltedCard from '@/components/ui/TiltedCard';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface Motivation {
  id: number;
  name: string;
  caption: string;
  imageSrc: string;
  altText: string;
  tooltipText: string;
  details: string;
}

const motivations: Motivation[] = [
  {
    id: 1,
    name: 'Pico de Poder',
    caption: 'No topo do mundo, mas o que acontece quando o vento muda?',
    imageSrc: 'https://cdn.discordapp.com/attachments/1214020534023618658/1426443251258491054/960d63fe7f5bba1351add655b3753901.gif?ex=68ebe70d&is=68ea958d&hm=7d697822f024e9df3f21b21186c48a87ed8c0c2b5b33702e221d3bc3b583b4cd&',
    altText: 'Thomas Shelby peak Blinders Sigma',
    tooltipText: 'Poder passageiro',
    details: 'Thomas Shelby no auge, parecendo invencível. Mas na realidade, todo pico tem uma queda. Tipo quem acha que chegou ao topo, mas esquece que alturas altas têm quedas dolorosas. Motivação? Sim, mas lembre-se: o sucesso é temporário, e a queda é inevitável. Na verdade, o topo é só um lugar melhor para cair.'
  },
  {
    id: 2,
    name: 'Revolta Silenciosa',
    caption: 'Um dedo do meio para o mundo, mas será que o mundo nota?',
    imageSrc: 'https://cdn.discordapp.com/attachments/1214020534023618658/1425348065136607253/IMG_0963.jpg?ex=68ebdf94&is=68ea8e14&hm=bf05d445ecf4cb688d90566baeb50421af5e61f7aa472371f9c93f0eb317438b&',
    altText: 'Dexter dando um dedo do meio',
    tooltipText: 'Revolta interna',
    details: 'Dexter mostrando o dedo do meio, um ato de rebeldia. Na realidade, revoltas silenciosas muitas vezes passam despercebidas. Tipo quem se revolta sozinho, mas o mundo continua girando. Motivação para expressar raiva? Claro, mas lembre-se: ações sem impacto são só gestos vazios. A realidade é que o mundo não dá a mínima para sua raiva.'
  },
  {
    id: 3,
    name: 'Fuga do Medo',
    caption: 'Correndo de fantasmas, mas eles sempre alcançam?',
    imageSrc: 'https://cdn.discordapp.com/attachments/1214020534023618658/1423045122945319033/1d560a2a56922409e2e5b8da63b0f188.gif?ex=68ec108c&is=68eabf0c&hm=83eea0e20b1ab896c35b8717e57a0a23f040153cdc1c88f0c0f0f857063d27dd&',
    altText: 'Ghost face correndo do piano descendo da escada',
    tooltipText: 'Medo em movimento',
    details: 'Ghostface fugindo do piano descendo a escada, uma cena de terror. Na realidade, medos sempre nos perseguem, não importa a velocidade. Tipo quem corre de problemas, mas eles estão sempre um passo atrás. Motivação para enfrentar? Sim, mas às vezes, parar e lutar é melhor que fugir. A realidade é que fantasmas sempre alcançam, e a fuga é só adiamento da morte.'
  },
  {
    id: 4,
    name: 'Amor Gélido',
    caption: 'Dizendo "meu amor" com frieza, mas o coração derrete?',
    imageSrc: 'https://cdn.discordapp.com/attachments/1214020534023618658/1421867518540386444/8480A123-CA35-4C10-8CEC-A9EF367A8ED7.gif?ex=68ec6511&is=68eb1391&hm=1fb46bf521757cca9819b2af555cb9990c2853ba7550bf50ecff557f77e48906&',
    altText: 'Emma Myres wandinha meu amor',
    tooltipText: 'Amor enigmático',
    details: 'Wednesday Addams dizendo "meu amor" com seu jeito gélido. Na realidade, amores enigmáticos escondem profundezas. Tipo quem parece frio, mas tem um coração pulsante. Motivação para amar? Claro, mas lembre-se: às vezes, o amor verdadeiro é o que sobrevive ao frio. A realidade é que corações gélidos são os que nunca derretem, e amor é só uma ilusão passageira.'
  },
  {
    id: 5,
    name: 'Loucura Aplaudida',
    caption: 'Bater palmas para a loucura, mas quem aplaude de volta?',
    imageSrc: 'https://cdn.discordapp.com/attachments/1214020534023618658/1420651708983541840/BE654E75-C0B1-4F5B-84BB-E158806F5D9C.gif?ex=68ebed41&is=68ea9bc1&hm=21cabd32dc984fe91a47aea00dbba7503adc5e5336bd521817ba12dc00d53dad&',
    altText: 'Coringa batendo palmas',
    tooltipText: 'Loucura motivacional',
    details: 'O Coringa batendo palmas, celebrando sua própria loucura. Na realidade, loucura muitas vezes é aplaudida sozinha. Tipo quem acha que suas ideias malucas são geniais, mas o mundo vê só caos. Motivação para ser diferente? Sim, mas lembre-se: nem toda loucura leva à genialidade. A realidade é que loucura é só uma forma de insanidade, e aplausos são raros para os loucos.'
  }
];

function Motivacao() {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <HeaderMenu />
      
      <main className='flex-grow px-4 py-16 sm:px-8 md:py-24'>
        <div className='max-w-7xl mx-auto'>
          
          <h1 className='text-4xl md:text-6xl font-bold text-ring tracking-tighter text-center mb-4'>
            Motivação Real
          </h1>
          <h2 className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16 md:mb-24">
            Momentos que inspiram reflexão sobre a realidade, com um toque de indireta para acordar.
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16'>
            {motivations.map((motivation) => (
              <div key={motivation.id} className='group flex flex-col'>
                <Sheet>
                  <SheetTrigger asChild>
                    <div className='cursor-pointer'>
                      <TiltedCard
                        imageSrc={motivation.imageSrc}
                        altText={motivation.altText}
                        captionText={motivation.tooltipText}
                        containerHeight='350px'
                        containerWidth='100%'
                        imageHeight='350px'
                        imageWidth='100%'
                        scaleOnHover={1.1}
                        rotateAmplitude={8}
                        showTooltip={true}
                        displayOverlayContent={false}
                      />
                    </div>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>{motivation.name}</SheetTitle>
                      <SheetDescription>
                        {motivation.details}
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                <div className='mt-6 space-y-2 text-left'>
                  <h2 className='text-lg font-semibold text-foreground'>
                    {motivation.name}
                  </h2>
                  <p className='text-sm text-muted-foreground'>
                    {motivation.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Motivacao;
