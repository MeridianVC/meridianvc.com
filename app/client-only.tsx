'use client';

import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('../components/Globe/Globe'), { ssr: false });
const MainContentAnimation = dynamic(() => import('../components/Animation/MainContentAnimation'), { ssr: false });

export const ClientGlobe = Globe;
export const ClientMainContentAnimation = MainContentAnimation;
