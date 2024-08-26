import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Hidroponia-Project/',
    component: ComponentCreator('/Hidroponia-Project/', '091'),
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
