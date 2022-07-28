// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

import { lazy, LazyExoticComponent } from "react"
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
    children?: Route[]
}

// const LazyLayout = lazy( () => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path: '/lazy',
        Component: lazy( () => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoad Nested'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy loading'
    },
]