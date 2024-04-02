import Image from "next/image";
import userImage from "../app/../../public/images/avatar-jessica.jpeg";
import CustomLink from "@/components/CustomLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className=" max-w-72 w-full text-sm text-white bg-darkGrey rounded-md px-5 pt-5 pb-4 flex flex-col items-center">
        <div className="w-16 h-16">
          <Image
            src={userImage}
            alt="user profile image"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center gap-1 mt-3">
          <h2 className="font-bold text-2xl">Jessica Randall</h2>
          <h3 className="font-bold text-sm text-green">
            London, United Kingdom
          </h3>
        </div>
        <p className="mt-3 text-xs">
          &quot;Front-end developer and avid reader.&quot;
        </p>

        <ul className="mt-3 w-full flex flex-col gap-2">
          <li>
            <CustomLink path={"github"}>GitHub</CustomLink>
          </li>
          <li>
            <CustomLink path={"frontend-mentor"}>Frontend Mentor</CustomLink>
          </li>
          <li>
            <CustomLink path={"linkedin"}>LinkedIn</CustomLink>
          </li>
          <li>
            <CustomLink path={"twitter"}>Twitter</CustomLink>
          </li>
          <li>
            <CustomLink path={"instagram"}>Instagram</CustomLink>
          </li>
        </ul>
      </div>
    </main>
  );
}
