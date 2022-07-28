import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoadingSpinner from "./components/ui/LoadingSpinner";

const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetail"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const Layout = React.lazy(() => import("./components/layout/Layout"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <Layout>
            <Suspense
                fallback={
                    <div className="centered">
                        <LoadingSpinner></LoadingSpinner>
                    </div>
                }
            >
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/quotes"></Redirect>
                    </Route>
                    <Route path="/quotes" component={AllQuotes} exact />
                    <Route path="/quotes/:quoteId" component={QuoteDetails} />
                    <Route path="/new-quote" component={NewQuote} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Suspense>
        </Layout>
    );
}

export default App;
