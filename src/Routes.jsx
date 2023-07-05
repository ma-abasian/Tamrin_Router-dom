import {Routes, Route} from "react-router-dom";
import {Home} from "./Home.jsx";
import {About, Contact, FoodDetail, Menu} from "./components";


export const Router = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/menu/:id" element={<FoodDetail/>}/>
        </Routes>
      </div>
  );
};

