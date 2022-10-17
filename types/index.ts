import { ReactNode } from 'react';

export interface RequiredChildren {
  children: ReactNode;
}

export interface Job {
  title: string;
  dateFormated: string;
  company: {
    name: string;
    url: string;
  };
  contentHtml: Function;
}
