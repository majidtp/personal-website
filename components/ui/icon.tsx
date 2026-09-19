import type { SVGProps } from "react";

const paths = {
  compass: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-6-3-2 4-4 2 2-4 4-2Z",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18",
  collaborate: "M10 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm10 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 21v-3a5 5 0 0 1 10 0v3m2-7a5 5 0 0 1 8 4v3",

  sun: "M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42M5.64 18.36l1.42-1.42m9.88-9.88 1.42-1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  moon: "M20.5 13a8.5 8.5 0 0 1-9.5-9.5A8.5 8.5 0 1 0 20.5 13Z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "m6 6 12 12M6 18 18 6",
  telegram: "m21 3-4 18-6-5-4 3v-6L21 3ZM7 13l-5-2L21 3M7 13l10-6-6 9",
  email: "M3 5h18v14H3V5Zm0 0 9 8 9-8",
  youtube: "M21 7a3 3 0 0 0-2-2c-4-.5-10-.5-14 0a3 3 0 0 0-2 2 27 27 0 0 0 0 10 3 3 0 0 0 2 2c4 .5 10 .5 14 0a3 3 0 0 0 2-2 27 27 0 0 0 0-10ZM10 9l5 3-5 3V9Z",
  instagram: "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm1-5h.01",
  x: "m4 3 16 18h-5L4 3h5l11 18M20 3l-7 8M4 21l7-8",
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name]} /></svg>;
}
