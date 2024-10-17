'use client';
import React, { useRef, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export interface MainTabsProps<T = string> {
  // デフォルトの型は string に設定
  className?: string;
  value?: T;
  onValueChange: (value: T) => void;
  items: { value: NonNullable<T>; label: string }[];
}

export const MainTabs = <T,>(props: MainTabsProps<T>) => {
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
    <div ref={tabsListRef} className="hidden-scrollbar overflow-x-auto pt-1">
      <Tabs
        className={cn('border-b-4 border-gray-300 text-center', props.className)}
        value={props.value as string | undefined}
        onValueChange={props.onValueChange as (value: string) => void | undefined}
      >
        <TabsList className="h-auto bg-inherit p-0">
          {props.items.map((item) => (
            <TabsTrigger
              key={item.value as string | undefined}
              className="relative -mb-1 p-5 text-base text-white after:absolute after:bottom-0 after:block after:h-1 after:w-full after:bg-gray-300 hover:text-black md:p-8 [&[data-state=active]]:text-black [&[data-state=active]]:after:bg-black hover:[&[data-state=active]]:cursor-default"
              value={item.value as string}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
