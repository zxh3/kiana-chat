"use server";

import { AccessToken, VideoGrant, RoomServiceClient } from "livekit-server-sdk";

const LIVEKIT_URL = process.env.NEXT_PUBLIC_LIVEKIT_URL!;
const API_KEY = process.env.LIVEKIT_API_KEY!;
const API_SECRET = process.env.LIVEKIT_API_SECRET!;

const roomService = new RoomServiceClient(LIVEKIT_URL, API_KEY, API_SECRET);

export async function generateToken({
  userId,
  roomId,
}: {
  roomId: string;
  userId: string;
}) {
  const roomName = roomId;
  const accessToken = new AccessToken(API_KEY, API_SECRET, {
    identity: userId,
  });
  const videoGrant: VideoGrant = {
    room: roomName,
    roomJoin: true,
    canPublish: true,
    canSubscribe: true,
  };
  accessToken.addGrant(videoGrant);
  const token = await accessToken.toJwt();
  return token;
}

export async function listRooms() {
  const rooms = await roomService.listRooms();
  return rooms;
}

export async function createRoom() {}
