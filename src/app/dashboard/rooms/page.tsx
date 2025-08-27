import { listRooms } from "@/lib/livekit";
import { RoomEntry } from "@/components/rooms/room-entry";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function RoomsPage() {
  const rooms = await listRooms();
  const roomsCount = rooms.length;

  return (
    <div>
      <RoomEntry />

      <div>Total rooms: {roomsCount}</div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {rooms.map((room) => (
          <Card key={room.sid}>
            <CardHeader>
              <CardTitle>Room {room.name}</CardTitle>
              <CardAction>
                <Link
                  href={`/dashboard/rooms/${room.name}`}
                  className="hover:text-amber-400"
                >
                  Join
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent className="text-xs text-neutral-400">
              <p>Room SID: {room.sid}</p>
              <p>Participants: {room.numParticipants}</p>
              <p>
                Created At:{" "}
                {new Date(Number(room.creationTime) * 1000).toLocaleString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
