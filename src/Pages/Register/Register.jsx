import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Puff } from "react-loader-spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import SmallSpinner from "../Shared/Spinner/SmallSpinner";

const Register = () => {
  const { signInWithGoogle, loading, setLoading, updateUser, createUser } =
    useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      toast.success("User created successfully");
      const userInfo = {
        displayName: data.name,
      };
      console.log(userInfo);
      updateUser(userInfo)
        .then(() => {
          saveUser(data.name, data.email);
        })
        .catch((err) => console.log(err));
    });
  };
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch(`https://pigeonverse-server.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(from, { replace: true });
        console.log(data);
        setLoading(false);
        // setCreatedUserEmail(email)
      });
  };
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const gandleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      navigate(from, { replace: true });
    });
  };
  if (loading) {
    return (
      <div className="h-[500px] w-100vh flex justify-center items-center">
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#38afd1"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className="lg:flex sm:block  justify-center items-center px-32">
      <div className="lg:flex sm:block lg:w-[900px] sm:w-[600px] mt-10 justify-center items-center">
        <div className="lg:flex sm:blcok lg:w-1/2 lg:-mr-12 justify-center items-center">
          <img
            src="https://i.ibb.co/1rBnjFw/pigeon-logo.png"
            className="h-[300px]  sm:w-full lg:w-1/2"
            alt=""
          />
          <div className="lg:w-1/2 sm:w-full">
            <h1 className="text-3xl font-semibold w-full">Pigeon Verse</h1>
            <h6>Explore the ideas throughout the world</h6>
          </div>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <div>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <h3 className="text-2xl mb-6 sm:text-center">REGISTER</h3>
              <div className="">
                <div className="text-sm">
                  <label htmlFor="Username">User Name</label>
                </div>
                <input
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                  type="text"
                  placeholder="Username"
                  className="pl-2 py-1 pr-6 border-2 focus:outline-blue-400 rounded border-gray-400"
                  // value="Username"
                />
                {errors.name?.type === "required" && (
                  <span className="text-red-500 text-sm" role="alert">
                    Name is Required
                  </span>
                )}
              </div>

              <div className="">
                <div className="text-sm">
                  <label htmlFor="Useremail">User Email</label>
                </div>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  type="email"
                  placeholder="Useremail"
                  className="pl-2 py-1 pr-6 border-2 focus:outline-blue-400 rounded border-gray-400"
                  // value="Useremail"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm" role="alert">
                    {errors.email?.message}
                  </span>
                )}
              </div>
              <div className="mb-5">
                <div className=" text-sm">
                  <label htmlFor="Userpassword">User Password</label>
                </div>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  type="password"
                  placeholder="*******"
                  className="pl-2 py-1 pr-6 border-2 focus:outline-blue-400 rounded border-gray-400"
                  // value="Userpassword"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm" role="alert">
                    {errors.password?.message}
                  </span>
                )}
              </div>

              <input
                type="submit"
                value={loading ? <SmallSpinner></SmallSpinner> : "REGISTER"}
                className="bg-white border mt-2 px-20 border-blue-400 text-blue-400 font-semibold  py-1 text-center rounded leading-tight hover:text-white hover:bg-blue-400 hover:border-blue-400"
                placeholder="REGISTER}"
              />
            </form>
            <p className="pt-4 pb-1 text-xs">Login with social accounts</p>
            <div>
              <button
                onClick={gandleGoogleSignIn}
                aria-label="Log in with Google"
                className="bg-white border border-blue-400 text-blue-400 font-semibold  py-1 w-full text-center rounded leading-tight hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current mx-auto"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
              <p className="text-sm mt-3 mb-3">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-400">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
