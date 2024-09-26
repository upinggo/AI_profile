import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch('/api/profile')
            .then(response => response.json())
            .then(data => setProfile(data));
    }, []);

    return (
        <div className="profile-container">
            <img id="profile-picture" src={profile.picture} alt="Profile Picture" />
            <h1 id="profile-name">{profile.name}</h1>
            <p id="profile-bio">{profile.bio}</p>
            <div id="contact-info">
                <p>Email: <span id="profile-email">{profile.email}</span></p>
                <p>Phone: <span id="profile-phone">{profile.phone}</span></p>
            </div>
        </div>
    );
};

export default Profile;