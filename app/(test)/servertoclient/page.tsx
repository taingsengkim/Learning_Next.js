import ServerToClientCard from "./ServerToClientCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getData = async function () {
  const res = await fetch(`${API_URL}/api/v1/cateogires`);
  return res.json();
};

export default function Page() {
  const cate = getData();
  return <ServerToClientCard categories={cate} />;
}
