'use client';

import React, {
  ComponentPropsWithRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import BookmarkButton from '../button/BookmarkButton';
import PlayIcon from '@/public/assets/icon-play.svg';
import clsx from 'clsx';

type CardProps = ComponentPropsWithRef<'div'> & {
  display?: 'trend' | 'search';
};

export default function Card({ display = 'trend', ...props }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.addEventListener('mouseenter', () => {
        setIsHovered(true);
      });
      cardRef.current.addEventListener('mouseleave', () => {
        setIsHovered(false);
      });
    }
    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mouseenter', () => {
          setIsHovered(true);
        });
        cardRef.current.removeEventListener('mouseleave', () => {
          setIsHovered(false);
        });
      }
    };
  }, [cardRef]);

  return (
    <div className="flex flex-col gap-2 w-60">
      <div
        className="relative p-4 flex items-start justify-end flex-col w-60 h-40 gap-2"
        ref={cardRef}
      >
        <BookmarkButton className="absolute right-4 top-4 z-20" />
        {display === 'trend' && (
          <>
            <p className="text-white/70">2021・Movie・PG</p>
            <h4 className="text-white">Beyond Earth</h4>
          </>
        )}
        <div
          className={clsx(
            'absolute w-full h-40 bg-black/40 text-white left-0 top-0 rounded-md flex items-center justify-center z-10 duration-500 transition',
            isHovered ? 'block' : 'hidden'
          )}
        >
          <button className="bg-white/50 rounded-xl p-2 flex gap-2 items-center">
            <PlayIcon />
            <p>Play</p>
          </button>
        </div>
        <Image
          src="/assets/thumbnails/1998/regular/large.jpg"
          className="absolute top-0 left-0 -z-10 w-60 h-40 rounded-md object-cover"
          alt="Trending Image"
          width={100}
          height={100}
        />
      </div>
      {display === 'search' && (
        <>
          <p className="text-white/70">2021・Movie・PG</p>
          <h4 className="text-white">Beyond Earth</h4>
        </>
      )}
    </div>
  );
}
