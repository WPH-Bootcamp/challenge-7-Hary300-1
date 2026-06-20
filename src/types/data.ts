import type { FunctionComponent } from 'react';

export interface ClientsLogo {
  id: number;
  name: string;
  logo: FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface Stats {
  id: number;
  value: string;
  label: string;
}

export interface OurProcess {
  id: number;
  title: string;
  content: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}
