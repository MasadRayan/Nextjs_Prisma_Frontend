"use client";
import { Button } from '@/components/ui/button';
import React, { useActionState, useEffect } from 'react'
import { toast } from 'sonner';

const PayButton = () => {
    const [state, action, pending] = useActionState(() : any => {}, null)

    useEffect(() => {
        if (!state) {
            return
        }
        if (!state.success) {
            toast.error(state.message || "Payment failed. Please try again.");
        }
    }, [state])
  return (
    <form action={action}>
        <Button type='submit' disabled={pending} className="w-full bg-primary text-white py-2 rounded-md">
            {pending ? "Processing..." : "Subscribe Now"}
        </Button>
    </form>
  )
}

export default PayButton
