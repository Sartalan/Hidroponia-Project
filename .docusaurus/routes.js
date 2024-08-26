import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Hidroponia-Project/',
    component: ComponentCreator('/Hidroponia-Project/', '091'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug', 'd17'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/config',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/config', 'c39'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/content',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/content', '509'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/globalData',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/globalData', 'd6f'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/metadata',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/metadata', 'e5b'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/registry',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/registry', '8d1'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/__docusaurus/debug/routes',
    component: ComponentCreator('/Hidroponia-Project/__docusaurus/debug/routes', 'f79'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/markdown-page',
    component: ComponentCreator('/Hidroponia-Project/markdown-page', 'cbe'),
    exact: true
  },
  {
    path: '/Hidroponia-Project/docs',
    component: ComponentCreator('/Hidroponia-Project/docs', '5a5'),
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
