import { ThreeBounce } from "better-react-spinkit";
import Image from "next/image";

function Loader() {
  return (
    <div className="h-screen bg-black">
      <div className="pt-40 flex flex-col items-center space-y-4">
        {/* <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
          <Image
            src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png"
            fill={true}
            style={{objectFit:"contain"}}
            className="animate-pulse"
            alt="spotify logo"
          />
        </span> */}
        <ThreeBounce size={23} color="#15883e" />
      </div>
    </div>
  );
}

export default Loader;