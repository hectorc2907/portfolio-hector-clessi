import { useEffect } from "react";

const Meta = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default Meta;