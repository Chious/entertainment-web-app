'use client';

import React, { Component, ComponentPropsWithRef, useState } from 'react';
import BookmarkIcon from '@/public/assets/icon-bookmark-full.svg';
import BookmarkEmptyIcon from '@/public/assets/icon-bookmark-empty.svg';
import clsx from 'clsx';

export type BookmarkButtonProps = ComponentPropsWithRef<'button'> & {
  bookmarked?: boolean;
  className?: string;
};

export default function BookmarkButton({
  bookmarked = false,
  className = '',
  ...props
}: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);

  return (
    <button
      className={clsx(' bg-black/50 p-2 rounded-full', className)}
      onClick={() => {
        setIsBookmarked(!isBookmarked);
      }}
      {...props}
    >
      {isBookmarked ? <BookmarkEmptyIcon /> : <BookmarkIcon />}
    </button>
  );
}
