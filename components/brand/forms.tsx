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
import { hash } from "@/lib/hashing";
import { loginRequestSchema } from "@/lib/schema";
import { z } from "zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PopUp } from "./alert";

export function LoginForm() {

  const [result, setResult] = useState({success:false,message:""})

  const form = useForm<z.infer<typeof loginRequestSchema>>({
    resolver: zodResolver(loginRequestSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginRequestSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      const result: Result = await response.json();

      setResult(result)

      
    } catch (error) {
      console.error();
    }
  }

  return (
    <Form {...form}>

      {(result.message !== "") && <PopUp result={result}></PopUp>}

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-8 ${result.success ? "hidden" : ""}`}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input type="email" placeholder="Your email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>

              <FormControl>
                <PasswordInput
                  type="password"
                  placeholder="Your password"
                  {...field}
                />
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


export function RegisterForm() {
  const [result, setResult] = useState({success:false,message:""})

  const form = useForm<z.infer<typeof loginRequestSchema>>({
    resolver: zodResolver(loginRequestSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginRequestSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      const result: Result = await response.json();

      setResult(result)

    } catch (error) {
      console.error();
    }
  }

  return (
    <Form {...form}>

      {(result.message !== "") && <PopUp result={result}></PopUp>}

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-8 ${result.success ? "hidden" : ""}`}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input type="email" placeholder="Your email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>

              <FormControl>
                <PasswordInput
                  type="password"
                  placeholder="Your password"
                  {...field}
                />
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


