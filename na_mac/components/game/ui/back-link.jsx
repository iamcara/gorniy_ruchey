import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";

export function BackLink() {
  return (
    <Link href="#" className="flex items-center gap-2 text-teal-600 text-xs">
      <ArrowLeftIcon className="w-4" />
      На главную
    </Link>
  );
}
