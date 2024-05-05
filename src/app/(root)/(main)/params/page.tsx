import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Link href="?action=save">
      {JSON.stringify(searchParams.action)}
      <Button>Save</Button>
    </Link>
  );
}
