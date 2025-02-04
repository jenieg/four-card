import Card from "./Card";
import cardData from "../cardData";

const Main = () => {

    const cardPositions = [
        [1, 2, 2, 4],
        [2, 3, 1, 3],
        [2, 3, 3, 5],
        [3, 4, 2, 4],
    ];

    return (
        <main className="m-7 flex flex-col text-gray-400">
            <section className="my-7 text-center sm:max-w-xl sm:mx-auto">
                <h2 className="text-2xl font-extralight text-gray-700">Reliable, efficient delivery</h2>
                <h2 className="text-2xl font-semibold text-gray-700">Powered by Technology</h2>
                <p className="my-4">
                    Our Artificial Intelligence powered tools use millions of
                    project data points to ensure that your project is
                    successful
                </p>
            </section>

            <div className="flex flex-col gap-4 sm:max-w-screen-lg sm:mx-auto sm:grid sm:grid-cols-3 sm:grid-rows-4 sm:gap-4">
                {cardData.data.cards.map((card, index) => {
                    const [colStart, colEnd, rowStart, rowEnd] = cardPositions[index] || [1, 2, 1, 2]
                    return (
                        <div
                            key={card.id}
                            style={{
                                gridColumnStart: colStart,
                                gridColumnEnd: colEnd,
                                gridRowStart: rowStart,
                                gridRowEnd: rowEnd,
                            }}
                        >
                            <Card
                                title={card.title}
                                description={card.description}
                                image={card.image}
                                borderColor={card.borderColor}
                            />
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Main;
