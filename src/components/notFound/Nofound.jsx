import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/App-Error.png";

const Nofound = () => {
  return (
    <div>
      <div className="text-center items-center justify-center mt-6 space-y-2">
        <h2 className="font-bold text-2xl">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">
        <button className="btn btn-error">Return Home</button>
        </Link>
        <img className="mx-auto mt-3" src={errorImg} alt="" />
      </div>
    </div>
  );
};

export default Nofound;
