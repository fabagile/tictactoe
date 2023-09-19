const Square = ({ value, onSquareClick }) => (
  <div role='button' className='board__grid__cell' onClick={onSquareClick}>
    {value}
  </div>
)

export default Square
