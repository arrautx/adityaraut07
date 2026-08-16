"use client";
import { useState } from "react";

export function Avatar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Avatar */}
      <div
        onClick={() => setOpen(true)}
        className="border border-border rounded-[12px] p-[4px] cursor-pointer hover:brightness-90 transition duration-300"
      >
        <img
          src="/Avatar.png"
          alt="Profile"
          className="rounded-[8px] size-[90px] object-cover select-none"
          draggable={false}
        />
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="border border-border rounded-[12px] p-[4px]"
            style={{ backgroundColor: "var(--background)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/Avatar.png"
              alt="Profile"
              className="rounded-[8px] max-w-[400px] max-h-[400px] w-full h-full object-cover select-none"
              draggable={false}
            />
          </div>
        </div>
      )}
    </>
  );
}