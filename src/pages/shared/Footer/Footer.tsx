import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

import { Link } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Management",
    path: "/services/management",
  },
  {
    name: "Compare",
    path: "/compare",
  },
];

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="flex lg:flex-row lg:gap-y-0 gap-y-4 flex-col justify-between p-[60px] bg-slate-200">
        <div className="flex lg:flex-row flex-col lg:gap-x-5 lg:gap-y-0 gap-y-5">
          <div className="space-y-2">
            <p className="text-3xl font-bold leading-0 -mt-2">
              <span className="text-green-600">Car</span>{" "}
              <span className="text-red-500">Wash</span>
            </p>
            <p className="flex items-center gap-3">
              <FaLocationDot className="text-secondaryColor" /> Washington,
              United State
            </p>
            <p className="flex items-center gap-3">
              <MdEmail className="text-secondaryColor" /> fitnesstools@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaSquarePhone className="text-secondaryColor" /> +1712124214
            </p>
          </div>
        </div>
        <div className="">
          <p className="font-semibold mb-2">Important links</p>
          <div className="flex flex-col gap-y-2">
            {links?.map((menu, idx) => (
              <Link key={idx} to={menu?.path}>
                {menu?.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold">Follow us on</p>
          <div className="flex gap-x-4 items-center text-secondaryColor">
            <p>
              <FaFacebookSquare className="text-2xl hover:text-primaryColor cursor-pointer" />{" "}
            </p>
            <p>
              <FaInstagramSquare className="text-2xl hover:text-primaryColor cursor-pointer" />{" "}
            </p>
            <p>
              <IoLogoYoutube className="text-2xl hover:text-primaryColor cursor-pointer" />{" "}
            </p>
            <p>
              <FaTwitterSquare className="text-2xl hover:text-rose-600 cursor-pointer" />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
