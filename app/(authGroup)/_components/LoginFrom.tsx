"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useActionState, useEffect } from "react";
import { loginAction } from "../_actions/loginAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginFrom = () => {
  const [state, action, pending] = useActionState(loginAction, false);
  const router = useRouter();

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state.success) {
      toast.success(state.message || "Login Successful");
      router.push("/");
    } else {
      toast.error(state.message || "Login Failed");
    }
  }, [state]);

  return (
    <form action={action}>
      <Card className="p-5 ">
        <Input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
          className="mb-4"
        ></Input>
        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
          className="mb-4"
        ></Input>
        <Button type="submit">{pending ? "Logging in..." : "Login"}</Button>
        <p className="mt-0 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </Card>
    </form>
  );
};

export default LoginFrom;
