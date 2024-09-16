import Image from "next/image";
import { Profile } from "../profile/profile";
import { UiButton } from "../uikit/ui-button";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import logoSrc from "./logo.png";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="image" className="w-20" />

      <div className="w-px h-8 bg-slate-300 mx-6" />

      <UiButton size="lg" variant="primary" className="w-44">
        Play
      </UiButton>

      <button className="ml-auto flex items-center gap-2">
        <Profile name="Powder" rating="1488" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
