export const Substract = ({ count, onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        Substract 1 to the counter ( {count} )
      </button>
    </>
  );
};
