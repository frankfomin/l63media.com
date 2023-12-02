import SuccessAndError from "@/components/SuccessAndError";

export default function notFound() {
  return <SuccessAndError paragraphText="Är du vilse?" title="Error 404" buttonTitle="Gå tillbaka" />;
}
