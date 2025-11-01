import { headers } from "next/headers";

import { auth } from "@/lib/auth";

export async function getServerSession() {
  const result = await auth.api.getSession({
    headers: headers(),
  });

  return result?.data ?? result;
}
