import { Route, Redirect, Switch } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Bye from "./pages/Bye";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/welcome" />
                    </Route>
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/bye" component={Bye} />
                    <Route path="/products" component={Products} exact />
                    <Route
                        path="/products/:productId"
                        component={ProductDetail}
                    />
                </Switch>
            </main>
        </div>
    );
}

export default App;
