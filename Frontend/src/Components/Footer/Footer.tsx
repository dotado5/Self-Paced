import "./Footer.css";
import copyright from "../../assets/copyright.png";
import { Link } from "react-router-dom";
import { Logo } from "../Navbar/Navbar";
import { Resources, Schools, socials } from "../../Constants/defaults";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_items">
        <div className="item">
          <h3>Schools</h3>
          {Schools.map((school, index) => (
            <Link to={school.link} key={index}>
              {school.content}
            </Link>
          ))}
        </div>
        <div className="item">
          <h3>Help</h3>
          <div className="item">
            <h4 className="text-[15px] font-semibold">Contact Us</h4>
            <p>+37256704920</p>
            <p>+2348071005481</p>
          </div>
          <div className="item">
            <h4 className="text-[15px] font-semibold">Send us a mail</h4>
            <p>info.doyenify@gmail.com</p>
          </div>
        </div>
        <div className="item xl:mt-0 mt-5">
          <h3>Resources</h3>
          {Resources.map((resource, index) => (
            <Link to={resource.link} key={index}>
              {resource.content}
            </Link>
          ))}
        </div>
        <div className="item">
          <div className="flex flex-col gap-4">
            <Logo width={"w-[143px]"} />
            <p>The Self-Paced Learning Platform</p>
          </div>

          <div className="flex flex-col items-start gap-4 mt-[1em]">
            <h3>Find us on</h3>
            <div className="flex gap-1">
              {socials.map((social, index) => (
                <Link to={social.link} key={index}>
                  <img src={social.img} alt="" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="TandC">
        <div className="flex items-center gap-2">
          <img src={copyright} alt="" />
          <p>2024 Doyenify Self-Paced. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <Link to={""}>Terms and Conditions</Link>
          <Link to={""}>Privacy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
