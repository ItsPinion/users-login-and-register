"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./input";
import { useState } from "react";
import { Result } from "@/lib/types";
import { RoleRequestSchema } from "@/lib/zSchema";
import { z } from "zod";
import { PopUp } from "./alert";



export function RoleCreate() {
  const [result, setResult] = useState({ success: false, message: "" });

  const form = useForm<z.infer<typeof RoleRequestSchema>>({
    resolver: zodResolver(RoleRequestSchema),
    defaultValues: {
      userID: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof RoleRequestSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await fetch("/api/role", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      const result: Result = await response.json();

      setResult(result);
    } catch (error) {
      console.error();
    }
  }

  return (
    <Form {...form}>
      {result.message !== "" && <PopUp result={result}></PopUp>}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="userID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User ID</FormLabel>

              <FormControl>
                <Input placeholder="The User ID" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>

              <FormControl>
              <Input placeholder="The Role" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export function RoleRead() {
  const [result, setResult] = useState({ success: false, message: "" });

  const form = useForm<z.infer<typeof RoleRequestSchema>>({
    resolver: zodResolver(RoleRequestSchema),
    defaultValues: {
      userID: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof RoleRequestSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await fetch("/api/role", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      const result: Result = await response.json();

      setResult(result);
    } catch (error) {
      console.error();
    }
  }

  return (
    <Form {...form}>
      {result.message !== "" && <PopUp result={result}></PopUp>}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="userID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User ID</FormLabel>

              <FormControl>
                <Input placeholder="The User ID" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>

              <FormControl>
              <Input placeholder="The Role" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export function RoleUpdate() {
  const [result, setResult] = useState({ success: false, message: "" });

  const form = useForm<z.infer<typeof RoleRequestSchema>>({
    resolver: zodResolver(RoleRequestSchema),
    defaultValues: {
      userID: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof RoleRequestSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await fetch("/api/role", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      const result: Result = await response.json();

      setResult(result);
    } catch (error) {
      console.error();
    }
  }

  return (
    <Form {...form}>
      {result.message !== "" && <PopUp result={result}></PopUp>}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="userID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User ID</FormLabel>

              <FormControl>
                <Input placeholder="The User ID" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>

              <FormControl>
              <Input placeholder="The Role" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export function RoleDelete() {
  const [result, setResult] = useState({ success: false, message: "" });

  const form = useForm<z.infer<typeof RoleRequestSchema>>({
    resolver: zodResolver(RoleRequestSchema),
    defaultValues: {
      userID: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof RoleRequestSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await fetch("/api/role", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      const result: Result = await response.json();

      setResult(result);
    } catch (error) {
      console.error();
    }
  }

  return (
    <Form {...form}>
      {result.message !== "" && <PopUp result={result}></PopUp>}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="userID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User ID</FormLabel>

              <FormControl>
                <Input placeholder="The User ID" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>

              <FormControl>
              <Input placeholder="The Role" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
