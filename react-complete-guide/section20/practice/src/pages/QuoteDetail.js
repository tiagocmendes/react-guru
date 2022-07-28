import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const QUOTES = [
    {
        id: "q1",
        author: "Ronaldo",
        text: "Sou lindo",
    },
    {
        id: "q2",
        author: "Messi",
        text: "Eu sou mais lindo",
    },
];

const QuoteDetail = () => {
    const match = useRouteMatch();

    const params = useParams();

    const quote = QUOTES.find((quote) => quote.id === params.quoteId);

    if (!quote) {
        return <h1>No quote found!</h1>;
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load comments
                    </Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`} component={Comments} />
        </>
    );
};

export default QuoteDetail;
