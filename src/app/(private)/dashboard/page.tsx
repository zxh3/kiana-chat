import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircle, Users, Video, Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to Kiana Chat. Start a conversation or join a room.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Browse Rooms</CardTitle>
              </div>
              <CardDescription>
                Join existing chat rooms and connect with others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/rooms" className="w-full">
                <Button variant="outline" className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  View All Rooms
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Create Room</CardTitle>
              </div>
              <CardDescription>
                Start a new chat room and invite others to join
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/rooms" className="w-full">
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Room
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Kiana Chat</CardTitle>
              </div>
              <CardDescription>Start a video chat with Kiana</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                <Video className="mr-2 h-4 w-4" />
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center text-muted-foreground py-8">
                <MessageCircle className="mx-auto h-12 w-12 mb-4 opacity-50" />
                <p>No recent activity yet</p>
                <p className="text-sm">Join a room to start chatting!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
