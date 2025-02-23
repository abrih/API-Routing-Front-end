import { Routes, Route } from "react-router";
import Home from "./Home";
import Mac from "./Components/Head/Header Tabs/Mac";
import Cart from "./Components/Head/Header Tabs/Cart";
import Iphone from "./Components/Iphone Dynamic Rountng/Iphone";
import Ipad from "./Components/Head/Header Tabs/Ipad";
import Watch from "./Components/Head/Header Tabs/Watch";
import TV from "./Components/Head/Header Tabs/TV";
import Music from "./Components/Head/Header Tabs/Music";
import Support from "./Components/Head/Header Tabs/Support";
import Four04 from "./Components/Head/Header Tabs/Fouro4";
import SharedLayOut from "./SharedLayOut";
import SingleAppleProduct from "./Components/SingleAppleProduct";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="/iphone/:product_id" element={<SingleAppleProduct/>} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          {/* <Route path="/tv" element={<TV />} /> */}
          <Route path="/Music" element={<Music />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
