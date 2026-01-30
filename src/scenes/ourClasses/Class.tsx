import "./classes.css";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  return (
    <li className="class-item">
      <div className="class-overlay">
        <p className="class-title">{name}</p>
        {description && <p className="class-description">{description}</p>}
      </div>
      <img className="class-image" alt={name} src={image} />
    </li>
  );
};

export default Class;
