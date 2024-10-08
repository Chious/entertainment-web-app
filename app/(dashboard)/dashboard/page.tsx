import Searchbar from '@/components/Searchbar';
import CardGalllery from '@/components/ui/card/CardGalllery';
import React from 'react';

export default function BookmarkPage() {
  return (
    <div className="w-full h-full flex flex-col items-start ">
      <Searchbar />
      <CardGalllery display="search" />
      <CardGalllery display="trend" />
    </div>
  );
}
