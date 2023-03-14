import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose, AiFillPlayCircle } from "react-icons/ai";
import { WalletContext } from "../context/WalletContext";
import { shortenAddress } from "../utils/shortenAddress";
import logo from "../../images/logo1.svg";

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(WalletContext);
  // const currentAccount = "0x123456";
  // const connectWallet = () => console.log("connectWallet");

  const navList = ["View NFTs"];
  return (
    <nav className="navbar">
      <div className="nav-con">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img src={logo} alt="logo" className="w-10 cursor-pointer" />
        </div>
        <div>
          <ul className="text-white md:flex  list-none flex-row justify-between items-center flex-initial">
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#7C15FF] p-3 rounded-full cursor-pointer hover:bg-[#680FDA]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                {currentAccount ? shortenAddress(currentAccount) : "Connect Wallet"}
              </p>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
