import ProfileInfoCard from "components/molecules/ProfileInfoCard";

const ProfileArea = () => {
  return (
    <div className="w-1/3 bg-primary h-screen flex justify-center">
      <div className="mt-56">
        <ProfileInfoCard></ProfileInfoCard>
      </div>
    </div>
  );
};

export default ProfileArea;
