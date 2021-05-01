const Profile = (props) => {
    return (
    <div  onClick= {props.sayhello}>
        <h1> full-name: {props.fullname} </h1>
        <h1>bio:{props.bio} </h1>
        <h1>profession: {props.profession} </h1>
    </div>
    )
}
export default Profile