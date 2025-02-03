import Card from "./Card";
import cardData from "../cardData";

const Main = () => {
    return (
        <main>
            <h2>Reliable, efficient delivery</h2>
            <h2>Powered by Technology</h2>

            <p>
                Our Artificial Intelligence powered tools use millions of
                project data points to ensure that your project is
                successful
            </p>

            {cardData.data.cards.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                    />
                ))}
        </main>
    );
};

export default Main;
