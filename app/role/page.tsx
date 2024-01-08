import { RoleTabs } from "@/components/brand/roleTabs";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl  pb-10">Role</h1>
      <RoleTabs />
    </main>
  );
}
