
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/check/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/check/home",
    "route": "/check"
  },
  {
    "renderMode": 2,
    "route": "/check/home"
  },
  {
    "renderMode": 2,
    "route": "/check/aboutme"
  },
  {
    "renderMode": 2,
    "route": "/check/projects"
  },
  {
    "renderMode": 2,
    "route": "/check/skills"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1298, hash: 'f06c85a2b125c70b0627ed13dbb48f42ab3b88d48ad704825620f152b483d611', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1811, hash: 'ccd7eba5209dd43b8f838ad94dcf68f829e358c2d624d90c12837ac00bcda466', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 9360, hash: '6485e36c6bf60b4dc5ae5850b293fee57deec1375548625e71e333353470b1e7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'aboutme/index.html': {size: 10671, hash: 'f600b0620ebed1c033c4468e94958b4f09e0abb96d5247eb07a52944f7a77176', text: () => import('./assets-chunks/aboutme_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 9250, hash: '8e2d2b40239669944a95340cd3fa92b00d6b42b06482b421015f0bf489513fff', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 12857, hash: 'b7c059356257b3567c6d47d1df4234d0b0a606e2a90ecf9a24ba32a31a64f4e2', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
