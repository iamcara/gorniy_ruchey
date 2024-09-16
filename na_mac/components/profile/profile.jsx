import Image from "next/image";
import avaSrc from "./ava2.png";

export function Profile({ className, name, rating, avatar = avaSrc }) {
  return (
    <div className={`flex items-center gap-2 text-start ${className}`}>
      <Image
        src={avatar}
        className="w-14 rounded-full"
        alt="avatar"
        width={48}
        height={48}
        unoptimized
      />
      <div className="overflow-hidden">
        <div className="text-teal-600 hover:text-teal-400 text-xl transition-colors truncate">
          {name}
        </div>
        <div className="text-slate-800 text-sm">Rate : {rating}</div>
      </div>
    </div>
  );
}
