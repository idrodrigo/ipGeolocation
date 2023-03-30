export const ErrorComponent = ({ text }) => {
  return (
    <>
      {text.length != "" && (
        <div className="error-container">
          <i className="fas fa-info-circle"></i>
          <p>{text}</p>
        </div>
      )}
    </>
  );
};
