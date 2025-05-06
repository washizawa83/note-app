'use client';

import { useTheme } from 'next-themes';
import { SelectBox } from '../../fomrs/SelectBox';
import { SettingItem } from './SettingItem';
import { useEffect, useState } from 'react';

export const SettingList = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return;
  }

  const settings = [
    {
      title: 'Theme',
      description: 'Change the theme of the app',
      children: (
        <SelectBox
          defaultValue={theme}
          options={[
            {
              value: 'system',
              label: 'System',
            },
            {
              value: 'light',
              label: 'Light',
            },
            {
              value: 'dark',
              label: 'Dark',
            },
          ]}
          handleChange={(value) => {
            setTheme(value as 'system' | 'light' | 'dark');
          }}
        />
      ),
    },
  ];

  return (
    <div>
      {settings.map((item) => (
        <SettingItem key={item.title} title={item.title} description={item.description}>
          {item.children}
        </SettingItem>
      ))}
    </div>
  );
};
