// // // in src/App.js
// // import { Admin, Resource } from 'react-admin';
// // import simpleRestProvider from 'ra-data-simple-rest';

// // import { PostList } from './posts';

// // const AdminPage = () => (
// //     <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
// //         <Resource name='products'
// //         list={() => <div>Product list</div>}
// //         edit={() => <div>Product edit</div>}
// //         create={() => <div>Product create</div>}
// //         show={() => <div>Product show</div>}>
// //         </Resource>
// //        {/* <Resource name="posts" {...posts} />
// //         <Resource name="comments" {...comments} />
// //         <CustomRoutes>
// //             <Route path="/settings" element={<Settings />} />
// //             <Route path="/profile" element={<Profile />} />
// //         </CustomRoutes> */}
// //     </Admin>
// // );

// // export default AdminPage;

// // in src/App.tsx
// // import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
// // import { dataProvider } from './dataProvider';

// // export const App = () => (
// //   <Admin dataProvider={dataProvider}>
// //  <Resource name="users" list={ListGuesser} />
// //   </Admin>
// // );



// // in src/App.js
// import { Admin, Resource, CustomRoutes } from 'react-admin';
// import { Route } from "react-router-dom";

// import { dataProvider, authProvider, i18nProvider } from './providers';
// import { Layout } from './layout';
// import { Dashboard } from './dashboard';
// import { Login } from './login';
// import { lightTheme, darkTheme } from './themes';
// import { CustomerList, CustomerEdit } from './customers';
// import { OrderList, OrderEdit } from './orders';
// import { InvoiceList, InvoiceEdit } from './invoices';
// import { ProductList, ProductEdit, ProductCreate } from './products';
// import { CategoryList, CategoryEdit, CategoryCreate } from './categories';
// import { ReviewList } from './reviews';
// import { Segments } from './segments';

