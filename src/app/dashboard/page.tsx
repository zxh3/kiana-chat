import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <Link href="/dashboard/rooms" className="hover:text-amber-300">
        Rooms
      </Link>
    </div>
  );
}
