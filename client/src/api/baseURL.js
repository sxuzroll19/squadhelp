const HOST= {
  LOCALHOST: 'localhost',
  MY_IP_102: '192.168.0.102',
  MY_IP_107: '192.168.0.107'
};

export const baseURL = `http://${HOST.MY_IP_107}:3000`;

export const restURL = `${baseURL}/api`;


export const URL = {
  // API USER
  USER: '/user',
  LOGIN: '/login',
  LOGOUT: "/logout",
  AUTHORIZE: '/authorize',
  ALL_USER: "/alluser",
  SIGN_UP: "/signup",
  REFRESH: "/refresh",

  // API CONTEST
  CONTEST: '/contest',
  CONTEST_PRICE: '/contest/price',


  // CONTEST
  CONTESTS: '/contests',
  CONTEST_TYPE: "/contesttype",
  NAME_IDEAS: "/Name-Ideas",

  // USER
  HOME: '/',
  NOT_FOUND: "/notfound",
  ADMIN_PANEL: "/adminpanel",
  DASHBOARD: "/dashboard",
  MY_ACCOUNT: "/myaccount",
};

export const SEARCH = {
  TYPE: '?type='
};
