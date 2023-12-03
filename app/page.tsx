import { LoginForm, RegisterForm } from "@/components/brand/forms";
import { FormTabs } from "@/components/brand/tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <FormTabs></FormTabs>
    </main>
  );
}
