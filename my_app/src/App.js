import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstCompoent/FirstComponent.jsx'
import GetComponent from './Components/GetComponent/GetComponent'
import PostComponent from './Components/PostComponent/PostComponent'

import ComponentOne from './Components/Context/ComponentOne/ComponentOne';
import { UserProvider } from './Components/Context/ContexData';
import LogInComponent from './Components/LogInComponent/LogInComponent';
import Signup from './Components/SignUp/SignUp';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import Products from './Components/Products/Products';
import ProductHooks from './Components/Hooks/ProductWithHooks/ProductWithHooks';
import HomeWithHooks from './Components/HomeWithHooks/HomeWithHooks';
import GetUsingHooks from './Components/GetUsingHooks/GetUsingHooks';
import GetWithSearchAPI from './Components/GetWithSearchAPI/GetWithSearchAPI';
import ComponentOneWithHooks from './Components/ContextWithHooks/ComponentOneWithHooks/ComponentOneWithHooks';
import { MyContextProvider }  from './Components/ContextWithHooks/MyContext.jsx'
function App() {
  return (
    <div className="App">
    {/* <GetComponent></GetComponent>*/}
    {/*<PostComponent />*/}
    {/*<UserProvider value ="Hello IOt Track">
      <ComponentOne />
  </UserProvider>*/}
  {/*<LogInComponent />*/}
 {/* <Signup />*/}
{/* <HomeComponent />*/}
{ /*<Products />*/}
 {/* <ProductHooks /> */}
 {/* <LogInWithHooks /> */}
  {/* <SignUpWithHooks /> */}
  {/* <HomeWithHooks /> */}
   {/* <GetUsingHooks /> */}
   {/* <GetWithSearchAPI /> */}
   <MyContextProvider>
   <ComponentOneWithHooks />
   </MyContextProvider>
    
    </div>
  );
}

export default App;
