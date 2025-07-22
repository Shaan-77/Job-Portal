import { Button } from "@/Components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const OnBoarding = () => {
  const { user, isLoaded } = useUser();
  console.log(user);
  const navigate = useNavigate();

  const handleRoleSelection = async (role) => {
    await user
      .update({
        unsafeMetadata: { role },
      })
      .then(() => {
        navigate(role === "recruiter" ? "/post-job" : "/jobs");
      })
      .catch((err) => {
        console.log("error while updating role", err);
      });
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigate(
        user?.unsafeMetadata?.role === "recruiter" ? "/post-job" : "/jobs"
      );
    }
  }, [user]);
  if (!isLoaded) {
    return <BarLoader className="mb-4 " width={"100%"} color={"white"} />;
  }
  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">
        I am a....
      </h2>
      <div className="mt-16 grid grid-cols-2 gap-8 w-full md:px-40">
        <Button
          variant={"blue"}
          className="h-22 text-2xl"
          cursor={"pointer"}
          onClick={() => handleRoleSelection("candidate")}
        >
          Candidate
        </Button>
        <Button
          variant={"destructive"}
          className="h-22 text-2xl"
          cursor={"pointer"}
          onClick={() => handleRoleSelection("recruiter")}
        >
          Recruiter
        </Button>
      </div>
    </div>
  );
};

export default OnBoarding;
