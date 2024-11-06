// src/vite-env.d.ts

/// <reference types="vite/client" />

declare module "/assets/*" {
  const value: { [key: string]: string };
  export = value;
}
