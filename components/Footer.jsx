import React from "react";
import Logo from "@/public/images/Logo.png"
import Twitter from "@/public/images/Twitter.png"
import Facebook from "@/public/images/facebook.png"
import Instagram from "@/public/images/Instagram.png"
import Tiktok from "@/public/images/tiktok.png"
import Image from "next/image";
function Footer() {
  return (
    <footer className="bg-black min-h-[504px] text-center md:text-left px-8 py-12 md:px-[160px] md:py-[104px]">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="info-1">
          <Image src={Logo} alt="logo" className="m-auto md:m-0"/>
          <p className="text-[#CFCFCF] font-sfpro font-medium leading-6 w-96 pt-6">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <ul className="info-2 font-sfpro text-[#CFCFCF] font-normal flex flex-col gap-2">
          <li className="text-white font-semibold">Services</li>
          <li>Bonus Program</li>
          <li>Gift cards</li>
          <li>Credit & payment</li>
          <li>Service contracts</li>
          <li>Non-cash account</li>
          <li>Payment</li>
        </ul>
        <ul className="info-3 font-sfpro text-[#CFCFCF] font-normal flex flex-col gap-2">
          <li className="text-white font-semibold">Assistance to the buyer</li>
          <li>Find an order</li>
          <li>Terms of delivery</li>
          <li>Exchange and return of goods</li>
          <li>Gurantee</li>
          <li>Frequently asked questions</li>
          <li>Terms of use of the site</li>
        </ul>
      </div>
      <div className="social flex justify-between w-44 gap-9 m-auto md:m-0 pt-6">
        <Image src={Twitter} alt="Twitter" />
        <Image src={Facebook} alt="Facebook" />
        <Image src={Tiktok} alt="Tiktok" />
        <Image src={Instagram} alt="Instagram" />
      </div>
    </footer>
  );
}

export default Footer;
