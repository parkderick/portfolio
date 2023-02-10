import React from "react";
import { Link } from "src/general/Link";

export default function Logo() {
  return (
    <Link href='/' marginRight='auto'>
      <svg
        id="logo"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.4 21H19V20L18 21H14.8C14.4133 21 14.08 20.8667 13.8 20.6C13.5333 20.32 13.4 19.9867 13.4 19.6V15.4C13.4 15.0133 13.5333 14.6867 13.8 14.42C14.08 14.14 14.4133 14 14.8 14H19V10.8L20.4 9.4V21ZM19 19.8V14.2L18 15.2H14.8V19.8H19Z" />
        <path d="M19 21H20.4V22L21.4 21H24.6C24.9867 21 25.32 21.1333 25.6 21.4C25.8667 21.68 26 22.0133 26 22.4V26.6C26 26.9867 25.8667 27.3133 25.6 27.58C25.32 27.86 24.9867 28 24.6 28H20.4V31.2L19 32.6V21ZM20.4 22.2V27.8L21.4 26.8H24.6V22.2H20.4Z" />
        <path d="M3.17949 10.2887L20 0.57735L36.8205 10.2887V29.7113L20 39.4226L3.17949 29.7113V10.2887Z" />
      </svg>
    </Link>
  );
}
