import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const email = localStorage.getItem("userEmail");
            if (email) {
                try {
                    const response = await axios.get(`http://localhost:8080/profile/${email}`);
                    setProfile(response.data);
                    setLoading(false);
                } catch (err) {
                    setError("Error fetching profile");
                    setLoading(false);
                }
            } else {
                setError("No email found");
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!profile) {
        return <div>No profile data</div>;
    }

    return (
        <div>
            <h1>Profile Information</h1>
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {profile.mailid}</p>
            <p><strong>Gender:</strong> {profile.gender}</p>
            <p><strong>Contact Number:</strong> {profile.cnum}</p>
            <p><strong>Address:</strong> {profile.address}</p>
        </div>
    );
}

export default Profile;
