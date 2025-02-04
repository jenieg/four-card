/* eslint-disable react/prop-types */
const Card = ({title, description, image, borderColor}) => {
    return (
        <section className={`mt-5 p-7 shadow-xl rounded border-t-4 ${borderColor} flex flex-col`}>
            <h3 className="text-lg font-bold text-gray-700">{title}</h3>
            <p className="text-sm">{description}</p>
            <img src={image} alt="icon" className="mt-7 self-end max-h-12 w-auto"/>
        </section>
    );
};

export default Card;