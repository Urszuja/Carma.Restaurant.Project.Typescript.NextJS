import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESTAURANT_DETAILS, DEVELOPER_INFO } from "../../constants/texts";
import { StyledFooter } from "../styles/Footer.styled";

function Footer() {
  return (
    <StyledFooter className="footer">
      <div className="column left">
        <h4> Contact us:</h4>
        <div className="details">
          <Image
            src="/FontAwesomeIcons/phone.svg"
            alt="Phone Icon"
            width={25}
            height={25}
          />
          <p>{RESTAURANT_DETAILS.PHONE}</p>
        </div>
        <div className="details">
          <Image
            src="/FontAwesomeIcons/envelope.svg"
            alt="E-mail Icon"
            width={25}
            height={25}
          />
          <p>{RESTAURANT_DETAILS.EMAIL}</p>
        </div>
        <div className="details">
          <Image
            src="/FontAwesomeIcons/home.svg"
            alt="Address Icon"
            width={25}
            height={25}
          />
          <p>{RESTAURANT_DETAILS.ADDRESS}</p>
        </div>
      </div>
      <div className="column middle">
        <Image
          className="trip-advisor"
          src="/TravelersChoice.svg"
          alt="Travelers Choice Logo"
          width={150}
          height={150}
        />
        <div>{DEVELOPER_INFO}</div>
      </div>
      <div className="column right">
        <Image
          src="/LogoWithName.svg"
          alt="Carma Logo"
          width={120}
          height={30}
        />
        <div className="linkContainer">
          <div className="link">
            <Link href="/about">About</Link>
          </div>
          <div className="link">
            <Link href="/menu">Menu</Link>
          </div>
          <div className="link">
            <Link href="/order">Cart</Link>
          </div>
        </div>
        <div className="social-media">
          <div className="link">
            <Link href="https://www.facebook.com">
              <Image
                src="/FontAwesomeIcons/facebook.svg"
                alt="Facebook Logo"
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div className="link">
            <Link href="https://www.instagram.com">
              <Image
                src="/FontAwesomeIcons/instagram.svg"
                alt="Instagram Logo"
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div className="link">
            <Link href="https://www.twitter.com">
              <Image
                src="/FontAwesomeIcons/twitter.svg"
                alt="Twitter Logo"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
