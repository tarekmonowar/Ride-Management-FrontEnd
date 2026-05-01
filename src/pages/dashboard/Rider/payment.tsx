/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import config from "@/config";
import {
  useCreatePaymentIntentMutation,
  useConfirmPaymentMutation,
} from "@/redux/features/payment/payment.api";
import { useActiveRideQuery } from "@/redux/features/ride/ride.api";
import { Banknote, CheckCircle, CreditCard, Loader2 } from "lucide-react";
import { toast } from "sonner";

const stripePromise = config.stripePublishableKey
  ? loadStripe(config.stripePublishableKey)
  : null;

function StripePaymentForm({
  rideId,
  amount,
  onSuccess,
}: {
  rideId: string;
  amount: number;
  onSuccess: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [createIntent] = useCreatePaymentIntentMutation();
  const [confirmPayment] = useConfirmPaymentMutation();
  const [loading, setLoading] = useState(false);

  const handleStripePayment = async () => {
    if (!stripe || !elements) return;
    setLoading(true);
    try {
      const intentResult = await createIntent(rideId).unwrap();
      const clientSecret = intentResult.data?.clientSecret;
      if (!clientSecret) throw new Error("Failed to create payment intent");

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("Card element not found");

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        { payment_method: { card: cardElement } },
      );

      if (error) {
        toast.error(error.message || "Payment failed");
        setLoading(false);
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        await confirmPayment({
          rideId,
          paymentMethod: "stripe",
          stripePaymentId: paymentIntent.id,
        }).unwrap();
        toast.success("Payment successful!");
        onSuccess();
      }
    } catch (err: any) {
      toast.error(err?.data?.message || err?.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="p-4 border rounded-lg bg-gray-50">
        <CardElement
          options={{
            style: {
              base: {
                "fontSize": "16px",
                "color": "#424770",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#9e2146" },
            },
          }}
        />
      </div>
      <div className="text-sm bg-blue-50 border border-blue-200 p-3 rounded-lg space-y-1">
        <p className="font-semibold text-blue-700">Test Card Details:</p>
        <p className="text-gray-600">
          Card Number:{" "}
          <span className="font-mono font-bold">4242 4242 4242 4242</span>
        </p>
        <p className="text-gray-600">Expiry: Any future date (e.g., 12/34)</p>
        <p className="text-gray-600">CVC: Any 3 digits (e.g., 123)</p>
      </div>
      <Button
        onClick={handleStripePayment}
        disabled={loading || !stripe}
        className="w-full bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] text-white py-3 font-semibold"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <CreditCard className="mr-2 h-4 w-4" />
            Pay ${amount?.toFixed(2)} with Stripe
          </>
        )}
      </Button>
    </div>
  );
}

export default function PaymentPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const rideId = searchParams.get("rideId");
  const { data } = useActiveRideQuery(undefined);
  const ride = data?.data;
  const [confirmPayment] = useConfirmPaymentMutation();
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "cash" | null>(
    null,
  );
  const [paid, setPaid] = useState(false);
  const [cashLoading, setCashLoading] = useState(false);

  const actualRideId = rideId || ride?._id;

  if (paid) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <Card className="w-full max-w-md text-center p-8">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
          <p className="text-gray-500 mb-6">
            Your payment has been processed. Thank you for riding with us!
          </p>
          <Button
            onClick={() => navigate("/rider-dashboard/history")}
            className="bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] text-white"
          >
            View Ride History
          </Button>
        </Card>
      </div>
    );
  }

  if (!actualRideId) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500">
          No ride found for payment. Please complete a ride first.
        </p>
      </div>
    );
  }

  const handleCashPayment = async () => {
    setCashLoading(true);
    try {
      await confirmPayment({
        rideId: actualRideId,
        paymentMethod: "cash",
      }).unwrap();
      toast.success("Cash payment confirmed! Driver will verify the payment.");
      setPaid(true);
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to confirm payment");
    } finally {
      setCashLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,rgba(0,102,153,0.1),rgba(230,204,0,0.1))] py-12 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Complete Payment
        </h1>

        {ride && (
          <Card className="mb-6 shadow-sm">
            <CardContent className="p-5 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Pickup</span>
                <span className="font-medium text-right max-w-[60%]">
                  {ride.pickupLocation?.address}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Destination</span>
                <span className="font-medium text-right max-w-[60%]">
                  {ride.destination?.address}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Distance</span>
                <span className="font-medium">{ride.distance} km</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Vehicle Type</span>
                <span className="font-medium capitalize">
                  {ride.vehicleType || "N/A"}
                </span>
              </div>
              <div className="flex justify-between text-lg border-t pt-3 mt-1">
                <span className="font-bold">Total Amount</span>
                <span className="font-bold text-green-600">
                  ${ride.estimatedCost?.toFixed(2)}
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setPaymentMethod("stripe")}
            className={`h-24 flex flex-col items-center justify-center gap-2 rounded-xl border-2 transition-all ${
              paymentMethod === "stripe"
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 bg-white text-gray-600 hover:border-blue-300"
            }`}
          >
            <CreditCard className="h-7 w-7" />
            <span className="font-medium text-sm">Pay with Stripe</span>
          </button>
          <button
            onClick={() => setPaymentMethod("cash")}
            className={`h-24 flex flex-col items-center justify-center gap-2 rounded-xl border-2 transition-all ${
              paymentMethod === "cash"
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-gray-200 bg-white text-gray-600 hover:border-green-300"
            }`}
          >
            <Banknote className="h-7 w-7" />
            <span className="font-medium text-sm">Cash on Delivery</span>
          </button>
        </div>

        {paymentMethod === "stripe" && (
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Card Payment
              </CardTitle>
            </CardHeader>
            <CardContent>
              {stripePromise ? (
                <Elements stripe={stripePromise}>
                  <StripePaymentForm
                    rideId={actualRideId}
                    amount={ride?.estimatedCost || 0}
                    onSuccess={() => setPaid(true)}
                  />
                </Elements>
              ) : (
                <p className="text-center text-gray-500 py-4">
                  Stripe is not configured. Please add
                  VITE_STRIPE_PUBLISHABLE_KEY to your .env file.
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {paymentMethod === "cash" && (
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Banknote className="h-5 w-5" />
                Cash Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Please pay{" "}
                <span className="font-bold text-green-600 text-xl">
                  ${ride?.estimatedCost?.toFixed(2)}
                </span>{" "}
                in cash to your driver. The driver will confirm receipt.
              </p>
              <Button
                onClick={handleCashPayment}
                disabled={cashLoading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold"
              >
                {cashLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Banknote className="mr-2 h-4 w-4" />
                    Confirm Cash Payment
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
