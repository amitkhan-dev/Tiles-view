"use client";

import React, { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Card, Button, Input, Spinner } from "@heroui/react";

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  if (isPending) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Spinner size="lg" color="primary" label="Loading..." />
      </div>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.updateUser({
        name: name,
        image: image,
      });
      alert("Profile updated successfully!");
      router.push("/my-profile");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 px-4">
      <Card className="p-6 bg-white border border-neutral-200 rounded-3xl shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-neutral-900 text-center">
          Update Information
        </h2>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase text-neutral-600 mb-1.5">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-neutral-600 mb-1.5">
              Image URL
            </label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="https://example.com/photo.jpg"
              required
            />
          </div>

          <Button
            type="submit"
            color="primary"
            radius="full"
            fullWidth
            isLoading={loading}
            className="font-bold py-6"
          >
            {loading ? "Updating..." : "Update Information"}
          </Button>
        </form>
      </Card>
    </div>
  );
}