"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card, Button, Spinner } from "@heroui/react";
import Image from "next/image";

export default function MyProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Spinner size="lg" color="primary" label="Loading profile..." />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold text-neutral-800">You are not logged in</h2>
        <p className="text-neutral-500 text-sm">Please log in to view your profile.</p>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="max-w-2xl mx-auto my-12 px-4">
      <Card className="p-8 bg-white border border-neutral-200 rounded-3xl shadow-sm text-center">
        <Image
          src={user.image}
          alt={user.name}
          width={120}
          height={120}
          className="rounded-3xl mx-auto border-2 border-primary shadow-sm  object-cover"
          />
        <h1 className="text-2xl font-bold text-neutral-900">{user.name}</h1>
        <p className="text-neutral-500 mb-6 text-sm">{user.email}</p>

        <Link href="/my-profile/update">
          <Button color="primary" radius="full" className="font-semibold px-6">
            Update Information
          </Button>
        </Link>
      </Card>
    </div>
  );
}