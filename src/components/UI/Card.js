import '../../css/card.css'

const Card = (props) => {
    const accessChildClass = 'card ' + props.className
  return (
    <div className={accessChildClass}>{props.children}</div>
  ) 
}

export default Card


