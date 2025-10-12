import React from 'react';
import TiltedCard from '@/components/ui/TiltedCard';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export interface CardItem {
  id: number;
  name: string;
  caption: string;
  imageSrc: string;
  altText: string;
  tooltipText: string;
  details: string;
}

interface CardGridProps {
  items: CardItem[];
  title: string;
  subtitle: string;
}

const CardGrid: React.FC<CardGridProps> = ({ items, title, subtitle }) => {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
      
      <main className='flex-grow px-4 py-8 sm:px-8 md:py-16'>
        <div className='max-w-7xl mx-auto'>
          
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-ring tracking-tighter text-center mb-4'>
            {title}
          </h1>
          <h2 className="text-sm md:text-lg lg:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8 md:mb-16 lg:mb-24">
            {subtitle}
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16'>
            {items.map((item) => (
              <div key={item.id} className='group flex flex-col'>
                <Sheet>
                  <SheetTrigger asChild>
                    <div className='cursor-pointer' role="button" tabIndex={0} aria-label={`View details for ${item.name}`}>
                      <TiltedCard
                        imageSrc={item.imageSrc}
                        altText={item.altText}
                        captionText={item.tooltipText}
                        containerHeight='300px'
                        containerWidth='100%'
                        imageHeight='300px'
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
                      <SheetTitle>{item.name}</SheetTitle>
                      <SheetDescription>
                        {item.details}
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                <div className='mt-4 sm:mt-6 space-y-2 text-left'>
                  <h2 className='text-base sm:text-lg font-semibold text-foreground'>
                    {item.name}
                  </h2>
                  <p className='text-xs sm:text-sm text-muted-foreground'>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default React.memo(CardGrid);
