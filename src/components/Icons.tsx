import { LucideProps } from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  underline: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 687 155">
      <g
        stroke="currentColor"
        strokeWidth="7"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M20 98c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"
          opacity=".3"
        ></path>
        <path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"></path>
      </g>
    </svg>
  ),

  check: (props: IconProps) => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 109.33019518852234 76.85432630410736"
      width="218.66039037704468"
      height="153.70865260821472"
      {...props}
    >
      <defs>
        <style>
          {`
          @font-face {
            font-family: "Virgil";
            src: url("https://excalidraw.com/Virgil.woff2");
          }
          @font-face {
            font-family: "Cascadia";
            src: url("https://excalidraw.com/Cascadia.woff2");
          }
          @font-face {
            font-family: "Assistant";
            src: url("https://excalidraw.com/Assistant-Regular.woff2");
          }
        `}
        </style>
      </defs>
      <g strokeLinecap="round">
        <g transform="translate(9.104188781231642 47.98757081361751) rotate(0 45 -9.28571428571425)">
          <path
            d="M0.9 0.9 C7.81 3.77, 26.12 24.08, 41.01 17.6 C55.9 11.12, 81.92 -28.98, 90.23 -37.99"
            stroke="#2f9e44"
            strokeWidth="7.5"
            fill="none"
            strokeDasharray="8 10"
          ></path>
        </g>
      </g>
      <mask></mask>
    </svg>
  ),
};
