import Home from "./Home";
import Navbar from "../../components/my-components/Navbar";
const page = () => {
  return (
    <div className="h-full min-h-screen w-full pb-8 bg-background dark">
      <Navbar />
      <Home />
    </div>
  );
};

export default page;
