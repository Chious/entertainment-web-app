import React, { ComponentPropsWithRef } from 'react';
import SearchIcon from '@/public/assets/icon-search.svg';

type SearchBarProps = ComponentPropsWithRef<'div'>;

export default function Searchbar({ ...props }: SearchBarProps) {
  return (
    <div
      className="flex flex-row gap-2 bg-dark-blue p-2 rounded-md w-full"
      {...props}
    >
      <SearchIcon />
      <input
        className="flex-1 p-2 bg-transparent text-white outline-none border-b border-solid border-transparent focus:border-gray-500"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}
