import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
    return <QuoteList quotes={QUOTES} />;
};

export default AllQuotes;
