import React, { ComponentPropsWithRef } from 'react';

import LogoIcon from '@/public/assets/logo.svg';
import HomeIcon from '@/public/assets/icon-nav-home.svg';
import BookmarkIcon from '@/public/assets/icon-bookmark-full.svg';
import MovieIcon from '@/public/assets/icon-nav-movies.svg';
import TvIcon from '@/public/assets/icon-nav-tv-series.svg';
import Image from 'next/image';

type NavbarProps = ComponentPropsWithRef<'div'> & {
  iconSrc?: string;
};

export default function Navbar({
  iconSrc = '/assets/image-avatar.png',
  ...props
}: NavbarProps) {
  return (
    <nav className="bg-dark-blue flex flex-row lg:flex-col w-full lg:w-fit p-4 rounded-md gap-8 items-center justify-between lg:justify-center">
      <LogoIcon />
      <div
        id="navbar-kits"
        className="flex flex-row lg:flex-col gap-4 items-center justify-center"
      >
        <HomeIcon className="fill-white" />
        <BookmarkIcon />
        <MovieIcon />
        <TvIcon />
      </div>

      <Image
        src={iconSrc}
        width={100}
        height={100}
        alt="avatar"
        className="w-10 h-10 rounded-full border-2 border-white border-solid"
      />
    </nav>
  );
}
