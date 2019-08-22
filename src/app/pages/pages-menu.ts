import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Login',
    icon: 'person',
    link: '/pages/login',
  },
  {
    title: 'Register',
    icon: 'person-add',
    link: '/pages/register',
  },
  {
    title: 'Reset-Password',
    icon: 'unlock',
    link: '/pages/reset-password',
  },
  {
    title: 'Forgot-Password',
    icon: 'lock',
    link: '/pages/forgot-password',
  },
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
];
