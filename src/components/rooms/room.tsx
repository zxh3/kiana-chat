"use client";

import React, { useState, useEffect } from "react";
import { Room as LivekitRoom, Track } from "livekit-client";
import {
  ControlBar,
  GridLayout,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
  RoomContext,
  useRoomContext,
} from "@livekit/components-react";
import "@livekit/components-styles";

export const Room: React.FC<{ roomId: string; token: string }> = ({
  token,
}) => {
  const [roomInstance] = useState(
    () =>
      new LivekitRoom({
        // Optimize video quality for each participant's screen
        adaptiveStream: true,
        // Enable automatic audio/video quality optimization
        dynacast: true,
      })
  );

  useEffect(function connect() {
    roomInstance.connect(process.env.NEXT_PUBLIC_LIVEKIT_URL!, token);
    return () => {
      roomInstance.disconnect();
    };
  }, []);

  return (
    <div>
      <RoomContext.Provider value={roomInstance}>
        <div data-lk-theme="default" style={{ height: "80vh" }}>
          {/* Your custom component with basic video conferencing functionality. */}
          <MyVideoConference />
          {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
          <RoomAudioRenderer />
          {/* Controls for the user to start/stop audio, video, and screen share tracks */}
          <ControlBar />
        </div>
      </RoomContext.Provider>
    </div>
  );
};

function MyVideoConference() {
  const room = useRoomContext();
  console.log("Room state:", room.state);
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );
  return (
    <GridLayout
      tracks={tracks}
      style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
    >
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}
