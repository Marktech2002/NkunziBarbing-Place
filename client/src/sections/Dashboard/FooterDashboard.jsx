import { Link } from "react-router-dom";
import { footerHeader } from "../../constants";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterDashboard = () => {
    return ( 
        <section
        id="footer"
        className=" bg-bgBlack h-fit mt-[200px] font-display py-2 w-screen z-50"
      >
        <ul className="hidden text-gray-600 mt-8 ml-14 gap-[90px] md:flex md:text-4xl">
          {footerHeader.map((items) => (
            <li key={items.no} className="hover:text-white">
              {items.label}
            </li>
          ))}
        </ul>
        <hr className="w-[80%] my-[40px] mx-auto bg-gray-400 md:ml-12" />
        <div className="flex flex-col md:flex-row md:gap-[90px]">
          <div className="border-[1px] max-w-[200px] border-white ml-5 mb-2 p-2 md:p-4 md:ml-12">
            <p className="text-gray-500 max-w-[200px] pb-5">
              <span className="text-white text-lg ">25% </span> Ancient form of
              styling men hair,beard,grooming
            </p>
            <div className="w-[50%] h-[1px] mb-3 bg-white"></div>
            <Link to="/">
              <p className="font-semibold font-display text-3xl text-orange-600">
                <span className="text-yellow-400">▼ </span> NKUNZI
              </p>
            </Link>
          </div>
          <div className="text-white font-semibold text-lg p-5 flex flex-wrap gap-[40px] md:gap-[170px]">
            <ul className="hover:text-gray-600">
              <li>SKIN CARE</li>
              <li>HAIR TREATMENT</li>
              <li>BEARD TREATMENT</li>
            </ul>
            <ul className="hover:text-gray-600">
              <li>MENS HAIRCUT </li>
              <li>CHILDREN HAIRCUT</li>
              <li>HAIR BLACK SHINE</li>
            </ul>
            <ul className="hover:text-gray-600">
              <li>SHAVING (REGULAR)</li>
              <li>BEARD CARE</li>
              <li>BEARD GROOMING</li>
            </ul>
            <ul className="hover:text-gray-600">
              <li>MENS HAIRCUT </li>
              <li>CHILDREN HAIRCUT</li>
              <li>HAIR BLACK SHINE</li>
            </ul>
          </div>
        </div>
        <hr className="w-[80%] my-[45px] mx-auto bg-gray-400 md:ml-12" />
        {/* footer gan gan */}
        <div className="flex flex-col gap-4 ml-9 mb-8 md:flex-row md:gap-64 md:ml-14 md:mb-10">
          <p className="text-gray-400">
            TERMS CONDITIONS <span>PRIVACY</span>
          </p>
          <p className="text-gray-400">ALL RIGHTS TO <span className="text-white">RYLIC STUDIO@23.</span></p>
          <div className="flex flex-wrap gap-9">
            <div className="border-[1px] border-white rounded-md p-1 text-gray-100">
              <FaGithub />
            </div>
            <div className="border-[1px] border-white rounded-md p-1 text-gray-100">
              <FaLinkedinIn />
            </div>
            <div className="border-[1px] border-white rounded-md p-1 text-gray-100">
              <FaTwitter />
            </div>
            <div className="border-[1px] border-white rounded-md p-1 text-gray-100">
              <FaInstagram />
            </div>
          </div>
        </div>
      <Link className="flex items-center italic hover:tracking-wider hover:text-slate-500 underline decoration-wavy justify-center text-lg text-white" to="https://github.com/Marktech2002">
         🟡 COOKED BY NKUZI 🟣
      </Link>
      </section>
    );
}
 
export default FooterDashboard;