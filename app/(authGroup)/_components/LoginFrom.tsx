"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useActionState, useEffect } from "react";
import { loginAction } from "../_actions/loginAction";
import { toast } from "sonner";

const LoginFrom = () => {
  const [state, action, pending] = useActionState(loginAction, false);

  useEffect(() => {

    if (!state) {
        return
    }

    if (state.success) {
        toast.success(state.message || "Login Successful")
    } else {
        toast.error(state.message || "Login Failed")
    }

  }, [state]) 

  return (
    <form action={action} className="space-y-4">
      <Card className="p-5 space-y-4">
        <Input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        ></Input>
        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
        ></Input>
        <Button type="submit">{pending ? "Logging in..." : "Login"}</Button>
      </Card>
    </form>
  );
};

export default LoginFrom;
