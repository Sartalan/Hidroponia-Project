import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Hidroponia-Project/',
    component: ComponentCreator('/Hidroponia-Project/', '495'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog',
    component: ComponentCreator('/Hidroponia-Project/blog', '302'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/archive',
    component: ComponentCreator('/Hidroponia-Project/blog/archive', 'eb2'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/note/one',
    component: ComponentCreator('/Hidroponia-Project/blog/note/one', 'ce2'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/release/five',
    component: ComponentCreator('/Hidroponia-Project/blog/release/five', '08f'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/release/four',
    component: ComponentCreator('/Hidroponia-Project/blog/release/four', 'faa'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/release/one',
    component: ComponentCreator('/Hidroponia-Project/blog/release/one', '4b9'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/release/seven',
    component: ComponentCreator('/Hidroponia-Project/blog/release/seven', '748'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/release/six',
    component: ComponentCreator('/Hidroponia-Project/blog/release/six', '6ec'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/release/three',
    component: ComponentCreator('/Hidroponia-Project/blog/release/three', '156'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/release/two',
    component: ComponentCreator('/Hidroponia-Project/blog/release/two', '2c8'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/tags',
    component: ComponentCreator('/Hidroponia-Project/blog/tags', '0d2'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/tags/app',
    component: ComponentCreator('/Hidroponia-Project/blog/tags/app', '69b'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/tags/code',
    component: ComponentCreator('/Hidroponia-Project/blog/tags/code', '0f5'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/tags/epico',
    component: ComponentCreator('/Hidroponia-Project/blog/tags/epico', '630'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/tags/hola',
    component: ComponentCreator('/Hidroponia-Project/blog/tags/hola', 'a77'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/tags/indoor',
    component: ComponentCreator('/Hidroponia-Project/blog/tags/indoor', 'ff6'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/tags/kicad',
    component: ComponentCreator('/Hidroponia-Project/blog/tags/kicad', '86f'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/tags/proteus',
    component: ComponentCreator('/Hidroponia-Project/blog/tags/proteus', 'ae7'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/markdown-page',
    component: ComponentCreator('/Hidroponia-Project/markdown-page', '90e'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/docs',
    component: ComponentCreator('/Hidroponia-Project/docs', 'e78'),
    routes: [
      {
        path: '/Hidroponia-Project/docs',
        component: ComponentCreator('/Hidroponia-Project/docs', 'c3e'),
        routes: [
          {
            path: '/Hidroponia-Project/docs',
            component: ComponentCreator('/Hidroponia-Project/docs', 'ca9'),
            routes: [
              {
                path: '/Hidroponia-Project/docs/intro',
                component: ComponentCreator('/Hidroponia-Project/docs/intro', '85f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
