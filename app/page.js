import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  console.log("executing..");
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
      <p><Link href="/blog">Blog</Link></p>
    </main>
  );
}


// localhot:3000/about