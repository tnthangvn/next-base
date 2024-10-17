'use client';
import React, { useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fontIcons } from '@/const';
import { cn } from '@/lib/utils';

export interface CardTabsProps<T = string> {
  // デフォルトの型は string に設定
  className?: string;
  value?: T;
  onValueChange: (value: T) => void;
  items: {
    value: NonNullable<T>;
    label: string;
    icon?: (typeof fontIcons)[number] | null | undefined;
  }[];
}

export const CardTabs = <T,>(props: CardTabsProps<T>) => {
  const tabsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToCenter = (element: HTMLElement) => {
      if (tabsListRef.current) {
        const container = tabsListRef.current;
        const scrollLeft = element.offsetLeft - container.offsetWidth / 2 + element.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    };

    if (props.value) {
      const activeTab = tabsListRef.current?.querySelector(`[data-state="active"]`) as HTMLElement;
      if (activeTab) {
        scrollToCenter(activeTab);
      }
    }
  }, [props.value]);

  return (
    <div ref={tabsListRef} className="hidden-scrollbar overflow-x-auto">
      <Tabs
        className={cn(' text-center', props.className)}
        value={props.value as string | undefined}
        onValueChange={props.onValueChange as (value: string) => void | undefined}
      >
        <TabsList className="h-auto bg-inherit">
          {props.items.map((item) => (
            <TabsTrigger key={item.value as string | undefined} asChild value={item.value as string}>
              <Badge
                className={cn(
                  'flex flex-col gap-y-2 bg-transparent cursor-pointer [&[data-state=active]]:cursor-default focus:ring-offset-0 focus:outline-0 focus:ring-0 focus-visible:outline-0 focus-visible:ring-1 [&[data-state=active]]:text-main [&[data-state=active]]:border data-[state=active]:shadow-sm group text-base text-text transition-all duration-300 rounded-b-none rounded-t-lg py-4 hover:bg-[#d3d3d3] [&[data-state=active]]:bg-main [&[data-state=active]]:text-white'
                )}
              >
                {item.icon ? <span className={cn('text-2.5xl', item.icon)} /> : null}
                {item.label}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
