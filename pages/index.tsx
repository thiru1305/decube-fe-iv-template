import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function Home() {
  return (
    <main
      className={cn(
        "min-h-screen flex flex-col items-center justify-center p-24 gap-4",
        inter.className
      )}
    >
      <Image
        src="https://i.giphy.com/l3BwSPbqx3QGKEgpp2.webp"
        alt="Gif"
        width={400}
        height={400}
      />
      <p>You can start your project here. Good luck!</p>
    </main>
  );
}
