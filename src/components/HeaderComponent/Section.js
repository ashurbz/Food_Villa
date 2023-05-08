
const Section = ({ title, description, isVisible, setIsVisible }) => {


  return (
    <div className="border-solid border-2 border-black m-4 p-3">
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      <h1 className="font-bold text-2xl">{title}</h1>

      {isVisible ? <p>{description}</p> : null}
    </div>
  );
};

export default Section;
