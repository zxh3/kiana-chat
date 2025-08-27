"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export function RoomEntry() {
  const router = useRouter();
  const [value, setValue] = useState("");

  return (
    <div
      className="mb-4"
      onKeyDown={(e) => {
        if (e.key === "Enter" && value.trim() !== "") {
          router.push(`/dashboard/rooms/${value}`);
        }
      }}
    >
      <Input
        type="text"
        placeholder="Enter room..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
