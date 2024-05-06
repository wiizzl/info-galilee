export function Card({ image, name, description }) {
    return (
        <div className="chapter-card">
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
}
