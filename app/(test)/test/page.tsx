export const revalidate = 10;

export default async function ISRPage() {
  const time = new Date().toISOString();
  const random = Math.random();
  console.log("Page regenerated at:", new Date().toISOString());

  return (
    <div className="p-10">
      <h1>ISR without API</h1>
      <p>Time: {time}</p>
      <p>Random: {random}</p>
    </div>
  );
}
