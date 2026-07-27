import React, { Suspense } from "react";
import { PaymentSectionLoader } from "../_components/payment/PaymentSectionLoader";
import PricingSection from "../_components/payment/PricingSection";

const PaymentPage = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="z-10 max-w-lg text-center mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Go Premium and Unlock Exclusive Content
        </h1>
        <p className="text-muted-foreground">
          Upgrade to our premium membership to access exclusive content and features. Join our community of premium users and unlock a world of benefits.
        </p>
      </div>

      <Suspense fallback= {<PaymentSectionLoader />}>
            <PricingSection />
      </Suspense>

    </div>
  );
};

export default PaymentPage;
