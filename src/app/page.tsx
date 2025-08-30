import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold p-8 bg-indigo-600">
        Welcome to My Portfolio
      </h1>
      <p className="mt-4 text-lg">
        This is a showcase of my work and projects.
      </p>
    </>
  );
}
