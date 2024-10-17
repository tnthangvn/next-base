'use client';

import { FC, ReactNode, useContext } from 'react';
import { settingThemeContext } from '@/context/SettingTheme.context';
import { cn } from '@/lib/utils';

interface GuestLayoutProps {
  children: ReactNode;
}
export const GuestLayout: FC<GuestLayoutProps> = (props) => {
  const {
    config: { isDark },
  } = useContext(settingThemeContext);
  return <body className={cn(isDark ? 'dark' : '')}>{props.children}</body>;
};
