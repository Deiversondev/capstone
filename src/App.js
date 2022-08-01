// import './App.css';
import './categories.styles.scss'
import {Routes, Route, Outlet} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
// import CategoryItem from './components/category-item/category-item.component';
// import Directory from './components/directory/directory.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';


const Shop = () => {
  return (
    <div>
      shop
    </div>
  )
}




const App = () => {

  return (
   <Routes>
    <Route path='/' element={<Navigation/>}>
    
      <Route index element={<Home/>}/>
      <Route path='shop' element={<Shop />}/>
      <Route path='/sign-in' element={<SignIn />}/>
    </Route>
      
   </Routes>
  )
  }

export default App;
