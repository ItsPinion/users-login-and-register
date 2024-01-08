import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { LoginForm, RegisterForm } from "./userForms"

export function FormTabs() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              I just lost half my brain cells because of this ****.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <LoginForm></LoginForm>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              It feels like my brain has lost some weight.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <RegisterForm></RegisterForm>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
