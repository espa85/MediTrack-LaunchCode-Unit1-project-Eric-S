export default function ProfileBar( { currentUser }) {
    if (!currentUser) return null;

    return (
        <section className="profile-bar">
            <p className="profile-bar-text">Sign in as {" "}
            <span className="profile-bar-name">{currentUser.displayName}</span>
            </p>
        </section>
    );
}