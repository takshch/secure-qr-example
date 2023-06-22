import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex items-center px-7 py-2 bg-indigo-600 text-white border-none">
      <span className="mr-auto font-medium text-lg">Secure QRs</span>
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/user-key">User Key Approach</Link>
          </li>
          <li>
            <Link href="/fixed-key">Fixed Key Approach</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
