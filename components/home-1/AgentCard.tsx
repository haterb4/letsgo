import Image from "next/image";
import Link from "next/link";

const AgentCard = (props: any) => {
  const { img, name, address } = props.item;
  return (
    <div className="group">
      <div className="relative flex justify-center">
        <Image
          width={306}
          height={306}
          src={img}
          alt="image"
          className="rounded-full group-hover:grayscale duration-300"
        />
        <Link
          href="#"
          className="bg-white h-16 w-16 rounded-full absolute -bottom-7 left-[40%] shadow-lg flex items-center justify-center">
          <i className="las la-plus text-3xl text-primary"></i>
        </Link>
        <ul className="hidden group-hover:block duration-500">
          <li>
            <Link
              href="#"
              className="bg-white h-16 w-16 text-primary hover:bg-primary hover:text-white rounded-full absolute group-hover:bottom-5 duration-300 group-hover:left-2 shadow-lg flex items-center justify-center">
              <i className="lab la-facebook-f text-3xl "></i>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-white h-16 w-16 text-primary hover:bg-primary hover:text-white rounded-full absolute -bottom-7 left-[40%] shadow-lg flex duration-300 items-center justify-center">
              <i className="lab la-twitter text-3xl "></i>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-white h-16 w-16 text-primary hover:bg-primary hover:text-white rounded-full absolute  group-hover:bottom-5 duration-300 group-hover:right-4  shadow-lg flex items-center justify-center">
              <i className="lab la-linkedin-in text-3xl "></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-15 text-center">
        <h4 className="text-[24px] font-semibold mt-12">{name}</h4>
        <p className="text-lg mb-4"> {address}</p>
      </div>
    </div>
  );
};

export default AgentCard;
