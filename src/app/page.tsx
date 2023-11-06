import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="grid place-items-center">
        <div className="m-auto text-center">
          <h2 className="text-3xl font-bold my-10">Go to Dashboard</h2>
          <Link href="/dashboard" className="underline italic ">
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
