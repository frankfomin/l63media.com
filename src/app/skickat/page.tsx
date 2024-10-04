import SuccessAndError from "@/components/SuccessAndError";
import React from "react";

export default function SuccessPage() {
  return (
    <SuccessAndError
      paragraphText="Jag återkommer snart!"
      title="Tack för ditt meddelande"
      buttonTitle="Startsidan"
    />
  );
}
