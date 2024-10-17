'use client';

import { noop } from 'lodash';
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState } from 'react';

type ThemeConfigType = {
  config: {
    isDark: boolean;
  };
};

interface SettingThemeContextProps {
  setConfig: Dispatch<SetStateAction<ThemeConfigType>>;
}

export type ThemeProps = {
  children: ReactNode;
};

export const settingThemeContext = createContext<SettingThemeContextProps & ThemeConfigType>({
  config: {
    isDark: false,
  },
  setConfig: noop,
});
export const ThemeProvider: FC<ThemeProps> = (props) => {
  const [config, setConfig] = useState<ThemeConfigType>({
    config: {
      isDark: false,
    },
  });
  const value = useMemo(() => ({ ...config, setConfig }), [config]);

  return <settingThemeContext.Provider value={value}>{props.children}</settingThemeContext.Provider>;
};
