import {
  Card,
  CardContent,
  CardDescription, CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { RoleCreate, RoleRead, RoleUpdate } from "./roleForm";

export function RoleTabs() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="create">Add</TabsTrigger>
        <TabsTrigger value="read">Info</TabsTrigger>
        <TabsTrigger value="update">Update</TabsTrigger>
        <TabsTrigger value="delete">Delete</TabsTrigger>
      </TabsList>
      <TabsContent value="create">
        <Card>
          <CardHeader>
            <CardTitle>Create</CardTitle>
            <CardDescription>Add new role to users.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <RoleCreate/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="read">
        <Card>
          <CardHeader>
            <CardTitle>Info</CardTitle>
            <CardDescription>Get all info about a user.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
    <RoleRead/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="update">
        <Card>
          <CardHeader>
            <CardTitle>Update</CardTitle>
            <CardDescription>Update role[s] of a user.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <RoleUpdate/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="delete">
        <Card>
          <CardHeader>
            <CardTitle>Delete</CardTitle>
            <CardDescription>Delete any role from a user.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <RoleUpdate/>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
