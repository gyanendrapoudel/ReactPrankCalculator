const Button = ({cls, label, handleClick, handleMousedown, isMousedown}) => {
  return (
    <div
      className={'btn ' + cls}
      onMouseDown={() => {
        handleMousedown(label)
      }}
      onClick={() => handleClick(label)}
      style={
        isMousedown === label
          ? {
              transform: isMousedown ? 'scale(0.9)' : 'scale(1)',
              transition: 'transform 0.2s',
            }
          : null
      }
    >
      {label}
    </div>
  )
}
export default Button