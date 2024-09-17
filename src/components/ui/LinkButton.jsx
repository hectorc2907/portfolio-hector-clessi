import { Link } from "react-router-dom";

const LinkButton = ({ direct, text }) => {
  return (
    <div className="flex justify-center">
      <Link to={`${direct}`} className="link-btn">
        {text}
      </Link>
    </div>
  );
};

export default LinkButton;
