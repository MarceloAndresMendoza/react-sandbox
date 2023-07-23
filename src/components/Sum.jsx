export const Sum = ({ count, onClick }) => {
  return (
    <>
      <button onClick={onClick}>Add 1 to the counter ( {count} )</button>
    </>
  );
};
