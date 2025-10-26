import type { Service } from './Service';

export type TabItem = {
  id: string;
  label: string;
  services: Service[];
};

export type TabsProps = {
  tabs: TabItem[];
};