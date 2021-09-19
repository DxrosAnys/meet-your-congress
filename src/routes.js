import React from 'react';

// examples
const CongressContent = React.lazy(() => import('./components/base/CongressContent'));
const Agenda = React.lazy(() => import('./components/base/Agenda'));
const EmergencyDecrees = React.lazy(() => import('./components/base/EmergencyDecrees'));
const BillsLaw = React.lazy(() => import('./components/base/BillsLaw'));
// const Login = React.lazy(() => import('./views/examples/pages/login/Login'))
// const Register = React.lazy(() => import('./views/examples/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/examples/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/examples/pages/page500/Page500'))




const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/congress', name: 'Congress', component: CongressContent  },
  { path: '/documented-agenda', name: 'Theme', component: Agenda},
  { path: '/emergency-decrees', name: 'Colors', component: EmergencyDecrees },
  { path: '/bills-law', name: 'Widgets', component: BillsLaw },
  // { path: '/login', name: 'Login', component: Login },
  // { path: '/register', name: 'Register', component: Register },
  // { path: '/404', name: '404', component: Page404 },
  // { path: '/500', name: '500', component: Page500 },

];

export default routes;
