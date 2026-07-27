import { headers } from 'next/headers';
import { format, isAfter } from 'date-fns';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import React from "react";
import PayButton from "./PayButton";

const PricingSection = async () => {
  await headers();

  const statusResult = {
    success: true,
    data: {
      isSubscribed: true,
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
  };

  const isActive = Boolean(
    statusResult?.success &&
    statusResult.data?.isSubscribed &&
    isAfter(new Date(statusResult.data.currentPeriodEnd), new Date()),
  );
  return (
    <Card className="mx-auto max-w-md">
        <CardHeader>
            <CardTitle className="flex items-center justify-between">
                Premium Plan
                {isActive && <Badge >Active</Badge>}
            </CardTitle>
            <CardDescription>
                {
                    isActive && statusResult.data?.currentPeriodEnd ?
                    `Renews on ${format(new Date(statusResult.data.currentPeriodEnd), 'MMM d, yyyy')}` : "Unlock exclusive content and insights with our premium plan."
                }
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-green-500" />
                        <span>Exclusive content</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-green-500" />
                        <span>Early access to new features</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-green-500" />
                        <span>Priority support</span>
                    </li>
                </ul>
                {!isActive && <PayButton />}
        </CardContent>

    </Card>
  )
};

export default PricingSection;
