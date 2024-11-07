/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutSkillsImport } from './routes/_layout/skills'
import { Route as LayoutLanguagesImport } from './routes/_layout/languages'
import { Route as LayoutExperienceImport } from './routes/_layout/experience'

// Create Virtual Routes

const LayoutIndexLazyImport = createFileRoute('/_layout/')()

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexLazyRoute = LayoutIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/index.lazy').then((d) => d.Route))

const LayoutSkillsRoute = LayoutSkillsImport.update({
  id: '/skills',
  path: '/skills',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutLanguagesRoute = LayoutLanguagesImport.update({
  id: '/languages',
  path: '/languages',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutExperienceRoute = LayoutExperienceImport.update({
  id: '/experience',
  path: '/experience',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/experience': {
      id: '/_layout/experience'
      path: '/experience'
      fullPath: '/experience'
      preLoaderRoute: typeof LayoutExperienceImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/languages': {
      id: '/_layout/languages'
      path: '/languages'
      fullPath: '/languages'
      preLoaderRoute: typeof LayoutLanguagesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/skills': {
      id: '/_layout/skills'
      path: '/skills'
      fullPath: '/skills'
      preLoaderRoute: typeof LayoutSkillsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexLazyImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutExperienceRoute: typeof LayoutExperienceRoute
  LayoutLanguagesRoute: typeof LayoutLanguagesRoute
  LayoutSkillsRoute: typeof LayoutSkillsRoute
  LayoutIndexLazyRoute: typeof LayoutIndexLazyRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutExperienceRoute: LayoutExperienceRoute,
  LayoutLanguagesRoute: LayoutLanguagesRoute,
  LayoutSkillsRoute: LayoutSkillsRoute,
  LayoutIndexLazyRoute: LayoutIndexLazyRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/experience': typeof LayoutExperienceRoute
  '/languages': typeof LayoutLanguagesRoute
  '/skills': typeof LayoutSkillsRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesByTo {
  '/experience': typeof LayoutExperienceRoute
  '/languages': typeof LayoutLanguagesRoute
  '/skills': typeof LayoutSkillsRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/experience': typeof LayoutExperienceRoute
  '/_layout/languages': typeof LayoutLanguagesRoute
  '/_layout/skills': typeof LayoutSkillsRoute
  '/_layout/': typeof LayoutIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/experience' | '/languages' | '/skills' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/experience' | '/languages' | '/skills' | '/'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/experience'
    | '/_layout/languages'
    | '/_layout/skills'
    | '/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/experience",
        "/_layout/languages",
        "/_layout/skills",
        "/_layout/"
      ]
    },
    "/_layout/experience": {
      "filePath": "_layout/experience.tsx",
      "parent": "/_layout"
    },
    "/_layout/languages": {
      "filePath": "_layout/languages.tsx",
      "parent": "/_layout"
    },
    "/_layout/skills": {
      "filePath": "_layout/skills.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.lazy.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
