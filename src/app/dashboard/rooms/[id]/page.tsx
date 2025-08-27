import { currentUser } from "@clerk/nextjs/server";
import { generateToken } from "@/lib/livekit";
import { redirect } from "next/navigation";
import { Room } from "@/components/rooms/room";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await currentUser();
  if (!user) {
    return redirect("/sign-in");
  }

  const id = (await params).id;
  const token = await generateToken({ roomId: id, userId: user.id });

  return (
    <div>
      <Room roomId={id} token={token} />
    </div>
  );
}
