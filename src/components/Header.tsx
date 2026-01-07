"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-15 bg-amber-100 fixed w-full">
      <div className="h-full container flex items-center gap-6">
        <div>
          <Link href="/">AI问答</Link>
        </div>
        <div>
          <Link href="/">文件上传</Link>
        </div>
      </div>
    </div>
  );
}
