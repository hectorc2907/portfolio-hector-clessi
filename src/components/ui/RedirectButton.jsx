const RedirectButton = ({ direct, text }) => {
  return (
    <div className="flex justify-center">
      <a href={`${direct}`} className="link-btn" target="_blank">
        {text}
      </a>
    </div>
  );
};

export default RedirectButton;
