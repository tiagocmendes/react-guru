import MeetupList from "../components/meetups/MeetupList";

const MEETUPS = [
    {
        id: "1",
        title: "Estádio da Luz",
        image: "https://i.ytimg.com/vi/jWrctz2ovHQ/maxresdefault.jpg",
        address: "Benfica",
        description: "Melhor estádio do mundo",
    },
    {
        id: "2",
        title: "Estádio do Dragão",
        image: "https://files.app.fcporto.pt/sources/5c90c10d2ceb18C3jfg8172koHVxw.jpg",
        address: "Porto",
        description: "Pior estádio do mundo",
    },
];

function Homepage() {
    return <MeetupList meetups={MEETUPS} />;
}

export default Homepage;
