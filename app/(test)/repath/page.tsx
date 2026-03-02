import { revalidatePath } from "next/cache";

export const revalidate = 10000; // optional automatic ISR

export default async function ISRTestPage() {
  const time = new Date().toISOString();

  return (
    <div className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">ISR Test</h1>
      <p>Time: {time}</p>

      {/* Server Action Form */}
      <form
        action={async function handleRevalidate() {
          "use server"; // <-- this is required
          revalidatePath("/isr-test"); // triggers regeneration
        }}
      >
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Revalidate Page
        </button>
      </form>
    </div>
  );
}
