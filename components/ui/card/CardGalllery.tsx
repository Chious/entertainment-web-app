import React, { ComponentPropsWithRef } from 'react';
import Card from './Card';
import clsx from 'clsx';

type CardGallleryProps = ComponentPropsWithRef<'div'> & {
  display?: 'trend' | 'search';
};

export default function CardGalllery({
  display = 'trend',
  ...props
}: CardGallleryProps) {
  const data = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="py-4 flex flex-col gap-4 w-full">
      <h2 className="text-white">Gallery Title</h2>
      <div
        className={clsx(
          'gap-3',
          display === 'trend'
            ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            : 'flex overflow-scroll'
        )}
      >
        {data.map(item => (
          <Card key={item} display="search" />
        ))}
      </div>
    </div>
  );
}
