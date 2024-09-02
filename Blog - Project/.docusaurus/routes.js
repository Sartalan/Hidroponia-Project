import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Hidroponia-Project/',
    component: ComponentCreator('/Hidroponia-Project/', '495'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug', 'bde'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/config',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/config', '8b9'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/content',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/content', 'f8f'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/globalData',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/globalData', '9c7'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/metadata',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/metadata', '865'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/registry',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/registry', '6b1'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/routes',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/routes', '63c'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog',
    component: ComponentCreator('/Hidroponia-Project/blog', 'b61'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/archive',
    component: ComponentCreator('/Hidroponia-Project/blog/archive', 'eb2'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/nota/one',
    component: ComponentCreator('/Hidroponia-Project/blog/nota/one', 'a1b'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/nota/two',
    component: ComponentCreator('/Hidroponia-Project/blog/nota/two', 'e1f'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/blog/pcb/one',
    component: ComponentCreator('/Hidroponia-Project/blog/pcb/one', '6a8'),
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
    path: '/Hidroponia-Project/blog/tags/hola',
    component: ComponentCreator('/Hidroponia-Project/blog/tags/hola', '137'),
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
