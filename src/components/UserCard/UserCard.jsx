const UserCard = ({user}) => {
    return (
    <div className="card mb-3">
     
       
            <div className="card-body">
            <h5 className="card-title">{user.Name}</h5>
            <p className="card-text">{user.Description}</p>
       
         </div>
  
    </div>
        
    );
}

export default UserCard;