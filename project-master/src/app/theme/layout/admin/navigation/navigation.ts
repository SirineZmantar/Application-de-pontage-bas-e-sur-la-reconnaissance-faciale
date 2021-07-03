import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'nav',
    title: 'Nav',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'acceuil',
        title: 'Acceuil',
        type: 'item',
        url: '/',
        icon: 'feather icon-home'
      },
      {
      id: 'gestion',
        title: 'Gestion des utilisateurs',
        type: 'item',
        url: '/GestionUtilisateurs',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'

      },
      {
      id: 'statistiques',
        title: 'Statistique',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      }
    ]
    }
  

 
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
