import UserCard from './../UserCard/UserCard'

const UserList = ({users}) => {
    return (
        <div>
        {users.map((user,index)=> {
            return (
                <div className="col" key={index}>
                    <UserCard user={user} />
                </div>
            )
        })}
        </div>
    
     
    );
}

export default UserList;