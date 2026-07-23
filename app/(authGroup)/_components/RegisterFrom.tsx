"use client";

import type React from "react";

import { useActionState, useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { registerAction } from "../_actions/registerAction";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [state , action, isPending] = useActionState(registerAction, false);
  const route = useRouter();

  useEffect(() => {
    if (!state) {
        return;
    }

    if (!state.success) {
        toast.error(state.message || "Registration Failed");
    }
    if (state.success) {
        toast.success(state.message || "Registration Successful");
        route.push("/login");
    }

  }, [state, route])

  return (
    <form action={action} className="space-y-4">
      <Card className="p-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          {/* Name input */}
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          {/* Email input */}
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            {/* Password input */}
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="profilePhoto">Profile Photo</Label>
            {/* Profile Photo input */}
          <Input
            id="profilePhoto"
            name="profilePhoto"
            type="text"
            placeholder="Your profile photo URL"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          {isPending ? "Registering..." : "Register"}
        </Button>
        <p className="text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </Card>
    </form>
  );
}
