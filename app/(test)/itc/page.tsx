import Image from "next/image";
import { animalList } from "./animalPhoto";
import Link from "next/link";

export default async function Page() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("test loading");
    }, 500);
  });
  return (
    <div className="h-screen">
      <div className="flex justify-around">
        {animalList.map((a, index) => (
          <Link href={`/itc/${a.id}`} key={a.id}>
            <div className="mt-10 bg-amber-400 p-5 rounded-2xl">
              <Image
                src={a.src}
                alt={a.title}
                className="w-20 h-20 rounded-2xl "
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
