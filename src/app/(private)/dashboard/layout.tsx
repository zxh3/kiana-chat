"use client";
import { redirect } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();

  if (session.isPending) {
    return null;
  }

  if (!session?.data?.user) {
    return redirect("/");
  }

  return <div className="p-4">{children}</div>;
}
