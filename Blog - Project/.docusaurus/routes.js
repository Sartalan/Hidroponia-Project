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
