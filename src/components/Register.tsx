"use client";
import { NoteAccountType } from "@/types/global";
import { SetStateAction, Dispatch } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { registeAction } from "@/actions/users";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({ message: "请输入邮箱" }),
  name: z
    .string()
    .min(2, { message: "最少两个字符" })
    .max(8, { message: "最多8个字符" }),
  password: z.string().min(6, { message: "最小六个字符" }),
});

export default function Login({
  setNotAccountType,
}: {
  setNotAccountType: Dispatch<SetStateAction<NoteAccountType>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await registeAction(values.email, values.name, values.password);
    if (res.status === 200) {
      toast.success(res.body);
      setNotAccountType('login')
    } else {
      toast.error(res.body);
    }
  }

  return (
    <div className="container2 my-20">
      <h1 className="text-xl mb-3 text-center font-bold">Register</h1>
      <p className="text-center mb-6">
        create your e-shop store mebmer profile
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <Input placeholder="请输入用户名" {...field} />
                </FormControl>
                <FormDescription>This is your name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input placeholder="请输入邮箱" {...field} />
                </FormControl>
                <FormDescription>This is your email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="请输密码" {...field} />
                </FormControl>
                <FormDescription>This is your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Join
          </Button>
        </form>
      </Form>
      <p className="text-center text-sm mt-3">
        Already a member?
        <span
          className="underline text-orange-400 cursor-pointer"
          onClick={() => {
            setNotAccountType("login");
          }}
        >
          Sign in.
        </span>
      </p>
    </div>
  );
}
