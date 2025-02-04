import Card from "./Card";
import cardData from "../cardData";

const Main = () => {
    return (
        <main className="m-7 flex flex-col text-gray-400">
            <section className="my-7 text-center">
                <h2 className="text-2xl font-extralight text-gray-700">Reliable, efficient delivery</h2>
                <h2 className="text-2xl font-semibold text-gray-700">Powered by Technology</h2>
                <p className="my-4">
                    Our Artificial Intelligence powered tools use millions of
                    project data points to ensure that your project is
                    successful
                </p>
            </section>

            {cardData.data.cards.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        borderColor={card.borderColor}
                    />
                ))}
        </main>
    );
};

export default Main;
