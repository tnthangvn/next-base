'use client';
import React, { useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export interface ButtonTabsProps<T = string> {
  // デフォルトの型は string に設定
  className?: string;
  value?: T;
  onValueChange: (value: T) => void;
  items: { value: NonNullable<T>; label: string }[];
}

export const ButtonTabs = <T,>(props: ButtonTabsProps<T>) => {
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
        <TabsList className="h-auto gap-1 bg-inherit">
          {props.items.map((item) => (
            <TabsTrigger
              key={item.value as string | undefined}
              asChild
              value={item.value as string}
            >
              <Badge
                className={cn(
                  'rounded-full bg-white hover:bg-inherit hover:border-gray-500 border-border-silver text-border-silver cursor-pointer hover:text-gray-500 [&[data-state=active]]:border-main [&[data-state=active]]:cursor-default focus:ring-offset-0 focus:outline-0 focus:ring-0 focus-visible:outline-0 focus-visible:ring-1 [&[data-state=active]]:text-main [&[data-state=active]]:border'
                )}
              >
                {item.label}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
