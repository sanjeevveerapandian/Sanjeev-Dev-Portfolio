"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    // You can handle error logging or other logic here if needed
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
