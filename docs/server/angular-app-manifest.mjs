
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/check/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/check"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 495, hash: 'd333395e040861d1afbd563531b51e3ab5b99ebbe7ca7c88dc0231648eb757f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '281379e6657f209f89b3258947d9dc13c6561c63afb5dd0b98f891834bcbd19b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 634, hash: 'df24459765e515fa6abdfbaff72c7779240e19ba478a20843a38904ea4232f29', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
