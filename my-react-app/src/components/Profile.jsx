function Profile ({name, title}) {
    const profileStyle = {
        border: '1px solid black',
        padding: '10px',
        width: "350px",
        margin: '30px auto',
    }
    const placeholderUrl = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
    return (
        <div style={profileStyle}>
            <img width={300} src={imageUrl || placeholderUrl} alt="image" />
            <h4>{name}</h4>
            <p>{title}</p>
        </div>
    );
}
export default Profile;