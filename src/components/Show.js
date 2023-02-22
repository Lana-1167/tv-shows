function Show(props) {
    return (
      <div className="Show">
        <img className="Show-image" 
        src={ props.showObject.image.medium} 
        alt={ props.showObject.name}/>
      <h2>{props.showObject.name}</h2>
      </div>
    )
  }


  export default Show