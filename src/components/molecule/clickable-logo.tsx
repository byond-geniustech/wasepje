import { env } from "@/env.mjs";
import Image from "next/image";
import Link from "next/link";

export default function ClickableLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        width={40}
        height={40}
        className="h-9 w-9"
        src="/logo.png"
        alt={`${env.NEXT_PUBLIC_APP_DOMAIN} logo`}
      />
      <p className="text-sm font-bold">{env.NEXT_PUBLIC_APP_DOMAIN}</p>
    </Link>
  );
}
