import CatalogPage from './pages/CatalogPage'
import MainPage from './pages/MainPage'
import HousePage from './pages/HousePage'

export const Routes = [
    {
        path: '/',
        Component: MainPage
    },
    {
        path: '/Catalog',
        Component: CatalogPage
    },
    {
        path: '/Houses/:id',
        Component: HousePage
    }
]