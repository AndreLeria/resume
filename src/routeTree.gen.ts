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
import { Route as LayoutLanguagesImport } from './routes/_layout/languages'

// Create Virtual Routes

const LayoutIndexLazyImport = createFileRoute('/_layout/')()
const LayoutSkillsLazyImport = createFileRoute('/_layout/skills')()
const LayoutExperienceLazyImport = createFileRoute('/_layout/experience')()

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

const LayoutSkillsLazyRoute = LayoutSkillsLazyImport.update({
  id: '/skills',
  path: '/skills',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/skills.lazy').then((d) => d.Route),
)

const LayoutExperienceLazyRoute = LayoutExperienceLazyImport.update({
  id: '/experience',
  path: '/experience',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/experience.lazy').then((d) => d.Route),
)

const LayoutLanguagesRoute = LayoutLanguagesImport.update({
  id: '/languages',
  path: '/languages',
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
    '/_layout/languages': {
      id: '/_layout/languages'
      path: '/languages'
      fullPath: '/languages'
      preLoaderRoute: typeof LayoutLanguagesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/experience': {
      id: '/_layout/experience'
      path: '/experience'
      fullPath: '/experience'
      preLoaderRoute: typeof LayoutExperienceLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/skills': {
      id: '/_layout/skills'
      path: '/skills'
      fullPath: '/skills'
      preLoaderRoute: typeof LayoutSkillsLazyImport
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
  LayoutLanguagesRoute: typeof LayoutLanguagesRoute
  LayoutExperienceLazyRoute: typeof LayoutExperienceLazyRoute
  LayoutSkillsLazyRoute: typeof LayoutSkillsLazyRoute
  LayoutIndexLazyRoute: typeof LayoutIndexLazyRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutLanguagesRoute: LayoutLanguagesRoute,
  LayoutExperienceLazyRoute: LayoutExperienceLazyRoute,
  LayoutSkillsLazyRoute: LayoutSkillsLazyRoute,
  LayoutIndexLazyRoute: LayoutIndexLazyRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/languages': typeof LayoutLanguagesRoute
  '/experience': typeof LayoutExperienceLazyRoute
  '/skills': typeof LayoutSkillsLazyRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesByTo {
  '/languages': typeof LayoutLanguagesRoute
  '/experience': typeof LayoutExperienceLazyRoute
  '/skills': typeof LayoutSkillsLazyRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/languages': typeof LayoutLanguagesRoute
  '/_layout/experience': typeof LayoutExperienceLazyRoute
  '/_layout/skills': typeof LayoutSkillsLazyRoute
  '/_layout/': typeof LayoutIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/languages' | '/experience' | '/skills' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/languages' | '/experience' | '/skills' | '/'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/languages'
    | '/_layout/experience'
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
        "/_layout/languages",
        "/_layout/experience",
        "/_layout/skills",
        "/_layout/"
      ]
    },
    "/_layout/languages": {
      "filePath": "_layout/languages.tsx",
      "parent": "/_layout"
    },
    "/_layout/experience": {
      "filePath": "_layout/experience.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/skills": {
      "filePath": "_layout/skills.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.lazy.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
