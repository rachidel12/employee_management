// import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories/Categories';
import AddCategory from './components/Categories/AddCategory';
import { Routes, Route } from "react-router-dom"
import UpdateCategory from './components/Categories/UpdateCategory';
import AddProduct from './components/Products/AddProduct';
import Products from './components/Products/Products';
import UpdateProduct from './components/Products/UpdateProduct';
import Clients from './components/Client/Clients';
import AddClient from './components/Client/AddClient';
import UpdateClient from './components/Client/UpdateClient';
import AddCommande from './components/Order/AddCommande';
import Orders from './components/Order/Orders';
import DetailCommande from './components/Order/DetailCommande';
import Login from './components/Products/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrdersManag from './components/Order/OrdersManag';
import ClientsManag from './components/Client/ClientsManag';
import ClientDir from './components/Client/ClientDir';
import ProductsDir from './components/Products/ProductsDir';
import DirHome from './components/home/DirHome';
import Manhome from './components/home/ManHome';
import Employee from './components/Employee/Employee';
import EmployeeDir from './components/Employee/EmployeeDir';
import UpdateEmployee from './components/Employee/UpdateEmployee';
import AddEmployee from './components/Employee/AddEmployee';
import DetailComEmp from './components/Order/DetailComEmp';
function App() {
  return (
    <Routes>
        
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Categories" element={<Categories/>}></Route>
        <Route path="/addCategory" element={<AddCategory/>}></Route>
        <Route path="/updateCategory/:categoryId" element={<UpdateCategory/>}></Route>
        <Route path="/addProduct" element={<AddProduct/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/updateProduct/:productId" element={<UpdateProduct/>}></Route>
        <Route path="/Clients"element={<Clients/>}></Route>
        <Route path="/AddClient" element={<AddClient/>}></Route>
        <Route path="/UpdateClient/:clientId" element={<UpdateClient/>}></Route>
        <Route path="AddCommande/:orderId" element={<AddCommande/>}></Route>
        <Route path="Orders" element={<Orders/>}></Route>
        <Route path="DetailCommande/:orderid" element={<DetailCommande/>}></Route> 
        <Route path="/OrdersManag" element={<OrdersManag/>}></Route> 
        <Route path="/ClientsManag" element={<ClientsManag/>}></Route> 
        <Route path="/ClientDir" element={<ClientDir/>}></Route> 
        <Route path="/ProductsDir" element={<ProductsDir/>}></Route> 
        <Route path="/DirHome" element={<DirHome/>}></Route> 
        <Route path="/Employee" element={<Employee/>}></Route> 
        <Route path="/EmployeeDir" element={<EmployeeDir/>}></Route>
        <Route path="/UpdateEmployee/:employeeId" element={<UpdateEmployee/>}></Route>
        <Route path="/AddEmployee" element={<AddEmployee/>}></Route>
        <Route path="/Manhome" element={<Manhome/>}></Route>
        <Route path="DetailComEmp/:orderid" element={<DetailComEmp/>}></Route> 
    </Routes>
  );
}

export default App;
