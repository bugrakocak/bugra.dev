import cx from "classnames";

interface ContactProps {
  className?: string;
}

const items = [
  {
    name: "GitHub",
    icon: "/github.svg",
    link: "https://github.com/bugrakocak",
  },
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
    link: "https://www.linkedin.com/in/bugra-kocak",
  },
  {
    name: "Twitter",
    icon: "/twitter.svg",
    link: "https://twitter.com/wrstsrnm",
  },
];

export default function Contact({ className }: ContactProps): JSX.Element {
  return (
    <ul className={cx("flex items-center gap-8", className)}>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.icon} alt={item.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}
