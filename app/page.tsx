import { FormTabs } from "@/components/brand/tabs";
import { UserButton, currentUser } from "@clerk/nextjs";
import { Annie_Use_Your_Telescope } from "next/font/google";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <FormTabs />
    </main>
  );
}
