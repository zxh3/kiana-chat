import { auth } from "@/lib/auth";
import { generateToken } from "@/lib/livekit";
import { redirect } from "next/navigation";
import { Room } from "@/components/rooms/room";
import { headers } from "next/headers";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) {
    return redirect("/sign-in");
  }

  const id = (await params).id;
  const token = await generateToken({
    roomId: id,
    userId: session?.user.id,
  });

  return (
    <div>
      <Room roomId={id} token={token} />
    </div>
  );
}
