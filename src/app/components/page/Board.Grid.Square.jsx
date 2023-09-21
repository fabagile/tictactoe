const Square = ({ value, onSquareClick, color }) => (
  <div role='button' className={`board__grid__cell ${color}`} onClick={onSquareClick}>
    <div className="">

    {value}
    </div>
  </div>
)

export default Square
