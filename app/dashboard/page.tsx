import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Dashbaord</h1>
      <Link href={"/photos/1"}>Go To Photo</Link>
    </main>
  );
}
