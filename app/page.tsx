import Image from "next/image";
import Link from "next/link";
import LikeButton from "./ui/LikeButton";

export default function Home() {
  return (
    <h1>
      Hi This is the home page of the project-nextjs-press-frontend <br />
      Blog Page :{" "}
      <Link href={"/blogs"} className="underline hover:text-blue-600">
        {" "}
        Blogs
      </Link> <br />
      <LikeButton></LikeButton>
    </h1>
  );
}
