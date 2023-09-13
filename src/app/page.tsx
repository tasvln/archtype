"use client";
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../components/Editor/Editor'), {
  ssr: false,
});

import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Editor />
    </main>
  )
}
