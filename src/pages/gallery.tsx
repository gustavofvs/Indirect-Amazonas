import HeaderMenu from '@/components/layout/header';
import TiltedCard from '@/components/ui/TiltedCard';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface Animal {
  id: number;
  name: string;
  funFact: string;
  imageSrc: string;
  altText: string;
  captionText: string; 
  details: string;
}

const animals: Animal[] = [
    { id: 1, name: 'Coala Fofinho', funFact: 'Coalas dormem tanto que parecem estar evitando responsabilidades, tipo quem não quer compromisso.', imageSrc: 'https://cdn.discordapp.com/attachments/1210407931439358042/1416601106288476250/b2a300cd210d577bf887c1b562547545.jpg?ex=68ec5a16&is=68eb0896&hm=32242d365ff1ad44a2fddac8b8ed3e8b72cf0ca0f2c318c2bf0b8c2f19c19ad1&', altText: 'Coala Fofinho', captionText: 'Um coala relaxando', details: 'Coalas passam 22 horas por dia dormindo porque sua comida é baixa em nutrientes. Tipo quem finge preguiça para não lidar com a vida real. Você acha que é preguiçoso? Pelo menos eles têm uma desculpa válida, ao contrário de alguns que só reclamam sem fazer nada. Na verdade, preguiça é só uma forma de depressão disfarçada, e ninguém quer admitir isso.' },
    { id: 2, name: 'Gatinho Fofinho Programando', funFact: 'Gatos não sentem doce, mas sentem o gosto amargo da rejeição, tipo quem foi trocado por outro.', imageSrc: 'https://cdn.discordapp.com/attachments/1210407931439358042/1416428229232955613/200.gif?ex=68ec61d5&is=68eb1055&hm=906010bb4f8f4f664ab45c9a4df3a551f6ff00decee84b919272acb19f0a21ac&', altText: 'Gatinho Programando', captionText: 'Um gato focado no código', details: 'Gatos têm 95% do DNA igual ao de tigres, mas preferem miar para humanos em vez de caçar. Esse GIF mostra um gato "programando", mas na verdade, ele só quer atenção. Tipo quem finge trabalhar duro, mas só quer likes nas redes sociais. A realidade é que a maioria das pessoas é preguiçosa e só finge produtividade para parecer importante.' },
    { id: 3, name: 'Gatinho Shake', funFact: 'O miado é só para humanos, porque com outros gatos eles fingem que não precisam de ninguém, vadio mesmo.', imageSrc: 'https://cdn.discordapp.com/attachments/1210407931439358042/1415762589341843526/a_ffb8b4b383c9e736c32c9eac20ec7146.gif?ex=68ebf028&is=68ea9ea8&hm=9fed9cf032b66fc2406a53e3c50f3544fa3cbab273483368b177525e0b840b5b&', altText: 'Gatinho Shake', captionText: 'Um gato vibrando', details: 'Gatos usam miado só para humanos, ignorando outros gatos. Eles são independentes ao extremo, tipo quem diz "não preciso de ninguém" mas fica sozinho reclamando. Esse gato tremendo? Provavelmente irritado com algo bobo, como você quando alguém te ignora. A verdade é que independência é só uma desculpa para o medo de se machucar novamente.' },
    { id: 4, name: 'Tubarão Fofinho', funFact: 'Tubarões existem há milhões de anos, sobrevivendo sozinhos porque quem precisa de companhia quando se é predador?', imageSrc: 'https://cdn.discordapp.com/attachments/1210407931439358042/1401319149602607295/IMG_7532.jpg?ex=68ec20a8&is=68eacf28&hm=60df7a39f323ae42daa2dc44b83fe473bf68d0807eced49572018e266d153711&', altText: 'Tubarão Fofinho', captionText: 'Um tubarão sorrindo', details: 'Tubarões existem há 400 milhões de anos, predadores solitários que não precisam de ninguém. Eles detectam presas com eletricidade, tipo quem fareja traição de longe. Sorrindo? Provavelmente porque acabou de comer alguém que confiava demais nos outros. A realidade é que o mundo é um oceano de predadores, e sorrisos escondem dentes afiados.' },
    { id: 5, name: 'Gatinho Fofinho', funFact: 'Cinco dedos na frente, quatro atrás, mas ainda assim consegue arranhar quem não quer perto, indireta pura.', imageSrc: 'https://cdn.discordapp.com/attachments/1210407931439358042/1419382215967768718/gato_4.jpg?ex=68ebec33&is=68ea9ab3&hm=3f26ad4719d4a4f4cb87dfad931f5b7b250cac2fb52f42444837f087605a6d7a&', altText: 'Gatinho Fofinho', captionText: 'Um gato olhando para a câmera', details: 'Gatos têm cinco dedos nas patas dianteiras e quatro atrás, ótimos para equilíbrio e arranhões. Esse olhar inocente esconde um caçador astuto. Tipo quem parece fofo, mas arranha quem chega perto demais. Cuidado, pode ser mais perigoso do que parece. Na verdade, todos nós somos assim: fofos por fora, mas prontos para arranhar quando ameaçados.' },
    { id: 6, name: 'Affs', funFact: 'Nariz único como impressão digital, mas ainda assim fareja traição de longe, tipo quem foi traído e agora desconfia de tudo.', imageSrc: 'https://cdn.discordapp.com/attachments/1210407931439358042/1396672726353186816/IMG_6659.jpg?ex=68ec5cd6&is=68eb0b56&hm=2d356fd76b7127815a1e173a50d2409ffd4f57f795b406694a1855951506f2e2&', altText: 'Cachorro olhando de lado', captionText: 'Um cachorro com olhar julgador', details: 'Cães têm narizes únicos como digitais humanas, detectando emoções e traições. Esse olhar julgador? Provavelmente porque farejou algo suspeito. Tipo quem foi traído uma vez e agora vê fantasma em tudo. Lealdade até o fim, mas com desconfiança. A realidade é que traição é inevitável, e lealdade é só uma ilusão até o próximo golpe.' }
];

function Gallery() {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <HeaderMenu />
      
      <main className='flex-grow px-4 py-16 sm:px-8 md:py-24'>
        <div className='max-w-7xl mx-auto'>
          
          <h1 className='text-4xl md:text-6xl font-bold text-ring tracking-tighter text-center mb-4'>
            Animais Fofinhos
          </h1>
          <h2 className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16 md:mb-24">
            Momentos fofinhos com um toque de indireta, porque a vida não é sempre doce e os animais sabem disso melhor que ninguém.
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16'>
            {animals.map((animal) => (
              <div key={animal.id} className='group flex flex-col'>
                <Sheet>
                  <SheetTrigger asChild>
                    <div className='cursor-pointer'>
                      <TiltedCard
                        imageSrc={animal.imageSrc}
                        altText={animal.altText}
                        captionText={animal.captionText}
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
                      <SheetTitle>{animal.name}</SheetTitle>
                      <SheetDescription>
                        {animal.details}
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                <div className='mt-6 space-y-2 text-left'>
                  <h2 className='text-lg font-semibold text-foreground'>
                    {animal.name}
                  </h2>
                  <p className='text-sm text-muted-foreground'>
                    {animal.funFact}
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

export default Gallery;