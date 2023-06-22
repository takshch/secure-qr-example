import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center my-6 mx-5">
      <h1 className="text-2xl text-center mb-8">Choose approach by clicking</h1>
      <div className="flex flex-col items-center gap-7">
        <Link href="/user-key">
          <button className="text-lg bg-purple-500 px-3 py-0.5 rounded text-white">
            User Key Approach
          </button>
        </Link>
        <Link href="/fixed-key">
          <button className="text-lg bg-purple-500 px-3 py-0.5 rounded text-white">
            Fixed Key Approach
          </button>
        </Link>
      </div>
    </div>
  );
}
