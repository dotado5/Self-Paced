import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/InputCard";
import "./AuthPage.css";
import Button from "../../Components/Button/Button";
import google from "../../assets/google.png";
import twitter from "../../assets/auth_twitter.png";
import { Logo } from "../../Components/Navbar/Navbar";
import { useState } from "react";
import { InputProps, Login, Register } from "../../Types/auth";
import useAuth from "../../Hooks/useAuth";
import LocalStorage from "../../Services/Localstorage";
import { USER_FIRSTNAME, USER_ID, USER_INITIALS } from "../../Constants/api";

const Auths = [
  { content: "Sign in with Google", img: google },
  { content: "Sign in with Twitter", img: twitter },
  { content: "Sign up with Google", img: google },
  { content: "Sign up with Twitter", img: twitter },
];

const AuthPage = () => {
  const params = useParams();
  const { portal } = params;
  const { register, login } = useAuth();
  const navigate = useNavigate();

  const [signInFormData, setSignInFormData] = useState<Login>({
    email: "",
    password: "",
  });
  const [signUpFormData, setSignUpFormData] = useState<Register>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const SignIn: InputProps[] = [
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      name: "email",
      value: signInFormData.email,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "********",
      name: "password",
      value: signInFormData.password,
    },
  ];

  const SignUp: InputProps[] = [
    {
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      name: "firstName",
      value: signUpFormData.firstName,
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      name: "lastName",
      value: signUpFormData.lastName,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      name: "email",
      value: signUpFormData.email,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "********",
      name: "password",
      value: signUpFormData.password,
    },
  ];

  async function handleChange(e: any, action: "signin" | "signup") {
    const { name, value } = e.target;

    if (action === "signin") {
      await setSignInFormData({ ...signInFormData, [name]: value });
    } else if (action === "signup") {
      await setSignUpFormData({ ...signUpFormData, [name]: value });
    } else {
      alert("Unrecognized function");
    }
  }

  async function handleSubmit(e: any, action: "signin" | "signup") {
    e.preventDefault();
    // console.log(signInFormData, signUpFormData, action);

    if (action === "signin") {
      try {
        const res = await login(signInFormData);
        const initials = res?.data.initials;

        LocalStorage.set(USER_INITIALS, initials);
        LocalStorage.set(USER_FIRSTNAME, res?.data.user.firstName);
        LocalStorage.set(USER_ID, res?.data.user.userId);

        console.log(res);
        if (res?.status === 200) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    } else if (action === "signup") {
      try {
        const res = await register(signUpFormData);

        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      {portal === "signin" ? (
        <div className="authPage">
          <Logo width={""} />
          <h1>
            <p>Login</p> to Continue
          </h1>

          <div className="authForm">
            <h3>Login</h3>

            <div className="grid gap-5">
              {Auths.slice(0, 2).map((auth, index) => (
                <button className="authButton" key={index}>
                  <img src={auth.img} alt="" />
                  {auth.content}
                </button>
              ))}
            </div>
            <p className="or">or</p>
            <form action="" onSubmit={(e) => handleSubmit(e, "signin")}>
              {SignIn.map((input, index) => (
                <Input
                  label={input.label}
                  placeholder={input.placeholder}
                  name={input.name}
                  type={input.type}
                  key={index}
                  onChange={(e) => handleChange(e, "signin")}
                  value={input.value}
                />
              ))}
              <Link className="text-[#0D5986]" to={""}>
                Forgot your Password?
              </Link>

              <Button
                content={"Log in"}
                onClick={() => {
                  console.log("clicked");
                }}
              />
              <p className="text-[#818181] flex items-center gap-2">
                Don’t have an account?
                <Link to={"/auth/signup"} className="text-[#0D5986]">
                  Signup
                </Link>
              </p>
            </form>

            <p className="w-[421px] mx-auto text-start text-[12px] text-[#818181] sm:w-[340px]">
              By clicking “Log in” you are agreeing to the{" "}
              <Link to={""} className="text-[#0D5986] mx-1">
                terms of service
              </Link>
              and
              <Link to={""} className="text-[#0D5986] mx-1">
                privacy policy
              </Link>
              of Self-Paced.
            </p>
          </div>
        </div>
      ) : portal === "signup" ? (
        <div className="authPage">
          <Logo width={""} />
          <h1>
            <p>Sign Up</p> to Start
          </h1>

          <div className="authForm">
            <h3>Signup</h3>

            <div className="grid gap-5">
              {Auths.slice(2, 4).map((auth, index) => (
                <button className="authButton" key={index}>
                  <img src={auth.img} alt="" />
                  {auth.content}
                </button>
              ))}
            </div>
            <p className="or">or</p>
            <form action="" onSubmit={(e) => handleSubmit(e, "signup")}>
              {SignUp.map((input, index) => (
                <Input
                  label={input.label}
                  placeholder={input.placeholder}
                  name={input.name}
                  type={input.type}
                  key={index}
                  onChange={(e) => handleChange(e, "signup")}
                  className="mt-3"
                  value={input.value}
                />
              ))}

              <Button
                content={"Sign Up"}
                onClick={() => {
                  console.log("clicked");
                }}
                className="mt-5"
              />
              <p className="text-[#818181] flex items-center gap-2">
                Already have an account?
                <Link to={"/auth/signin"} className="text-[#0D5986]">
                  Login
                </Link>
              </p>
            </form>

            <p className="w-[421px] mx-auto text-start text-[12px] text-[#818181] sm:w-[340px]">
              By clicking “Sign up” you are agreeing to the{" "}
              <Link to={""} className="text-[#0D5986] mx-1">
                terms of service
              </Link>
              and
              <Link to={""} className="text-[#0D5986] mx-1">
                privacy policy
              </Link>
              of Self-Paced.
            </p>
          </div>
        </div>
      ) : null}

      <Footer />
    </>
  );
};

export default AuthPage;
