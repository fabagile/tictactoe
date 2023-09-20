const Square = ({ value, onSquareClick, color }) => (
  <div role='button' className={`board__grid__cell ${color}`} onClick={onSquareClick}>
    {value}
  </div>
)

export default Square
