const Button = ({cls, label, handleClick}) => {
  return <div className={"btn "+cls} onClick={()=>(handleClick(label))}>{label}</div>
}
export default Button