import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function Profile() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data) {
    alert("Profile Updated");
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Profile</CardTitle>
        <CardDescription>
          You can update your profile and password using email
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="pic">Profile Photo</Label>
            </div>
            <Input accept="image/*" id="pic" type="file" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="email">Email</Label>
            </div>
            <Input
              id="email"
              type="email"
              placeholder="hello@example.com"
              required
            />
          </div>
          <hr />
          <div className="grid gap-2">
            <div className="flex m-auto items-center">
              <Label htmlFor="password">Want to change password ?</Label>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Old Password</Label>
            </div>
            <Input id="oldpassword" type="password" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">New Password</Label>
            </div>
            <Input id="newpassword" type="password" required />
          </div>
          <Button type="submit" className="w-full bg-slate-800">
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
export default Profile;
