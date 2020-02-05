import React from "react";


const Profile = ({user}) => {

  const { name, avatar, location, tag, stats } = user;
  
  
    // console.log
    return (
      <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="user avatar"
        className="avatar"
        />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">1000</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">2000</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">3000</span>
      </li>
    </ul>
  </div>
)

}

export default Profile;
// Profile.propTypes = {
//   user: PropTypes.shape ({
//     name: PropTypes.string,
//             avatar: PropTypes.string,
//             location: PropTypes.string,
//             tag: PropTypes.string,
//             stats: PropTypes.string,
//         })
//     };