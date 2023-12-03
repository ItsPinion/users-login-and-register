"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { hash } from "@/lib/noob-hashing";

const minLength = 2;
const maxLength = 50;
const passMinLength = 2;
const passMaxLength = 50;

const formSchema = z.object({
  email: z
    .string()
    .min(minLength, {
      message: `Email must be at least ${minLength} characters.`,
    })
    .max(maxLength, {
      message: `Email can't be more than ${maxLength} characters`,
    }),

  password: z
    .string()
    .min(passMinLength, {
      message: `Password must be at least ${passMinLength} characters.`,
    })
    .max(passMaxLength, {
      message: `Password can't be more than ${passMaxLength} characters`,
    }),
});

export function ProfileForm() {
  // 1. Define your form.
  const [loggedIN, setLoggIN] = useState(false);
  const [Message, setMessage] = useState("false");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(hash(values.password))
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      const result: Result = await response.json();

      if (result.success) {
        setMessage(result.message);
        setLoggIN(true);
      }

      console.log(result.message );
    } catch (error) {
      console.error();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-8 ${loggedIN ? "hidden" : ""}`}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input placeholder="Your email" {...field} />
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
      {loggedIN && <p>{Message}</p>}
    </Form>
  );
}
