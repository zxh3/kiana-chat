"use client";
import { Button } from "@/components/ui/button";
import { GoogleLogin } from "@/components/auth/google-login";
import { useSession, signOut } from "@/lib/auth-client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

export function Header() {
  const { data: session, isPending } = useSession();
  const maybeUserAbbreviation = (
    session?.user?.name
      .split(" ")
      .map((n) => n[0])
      .join("") || ""
  )
    .slice(0, 2)
    .toUpperCase();

  if (isPending) {
    return null;
  }

  return (
    <header className="flex h-16 items-center justify-between gap-4 border-b px-4">
      <Link href="/" className="flex items-center gap-x-4">
        <svg fill="none" viewBox="0 0 44 44" className="size-9" aria-hidden>
          <path
            fill="currentColor"
            d="M38 0a6 6 0 0 1 6 6v32a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h32ZM22.982 9.105c-.208-1.081-1.756-1.081-1.964 0l-.85 4.421a1 1 0 0 1-1.666.541l-3.287-3.077c-.804-.752-2.056.158-1.589 1.155l1.911 4.077a1 1 0 0 1-1.03 1.417l-4.467-.558c-1.093-.136-1.571 1.336-.607 1.868l3.942 2.175a1 1 0 0 1 0 1.752l-3.942 2.175c-.964.532-.486 2.004.607 1.868l4.468-.558a1 1 0 0 1 1.03 1.417l-1.912 4.077c-.467.997.785 1.907 1.589 1.155l3.287-3.077a1 1 0 0 1 1.666.54l.85 4.422c.208 1.081 1.756 1.081 1.964 0l.85-4.421a1 1 0 0 1 1.666-.541l3.287 3.077c.804.752 2.056-.158 1.589-1.155l-1.911-4.077a1 1 0 0 1 1.03-1.417l4.467.558c1.093.136 1.572-1.336.607-1.868l-3.942-2.175a1 1 0 0 1 0-1.752l3.942-2.175c.965-.532.486-2.004-.607-1.868l-4.468.558a1 1 0 0 1-1.03-1.417l1.912-4.077c.467-.997-.785-1.907-1.589-1.155l-3.287 3.077a1 1 0 0 1-1.666-.54l-.85-4.422Z"
          />
        </svg>
        <span className="font-semibold">Kiana Chat</span>
      </Link>
      <div className="flex items-center gap-x-4">
        {!session?.user ? (
          <GoogleLogin />
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{maybeUserAbbreviation}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {session.user.name || "User"}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {session.user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
