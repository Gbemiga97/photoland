
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Footer, Header } from './components';
import { Home, ProductDetails, Products, Search } from './pages';


//layout

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/products/:id', element: <Products />},
      {path: '/product/:id', element: <ProductDetails />},
      {path: '/search', element: <Search />},
    ]
  }
])

const App = () => {
  return <div>
    <RouterProvider router={router} />
    </div>;
};

export default App;
