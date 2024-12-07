import {
  Container,
  Title,
  Card,
  TextInput,
  PasswordInput,
  Stack,
  Group,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";

const schema = z
  .object({
    email: z.string().trim().email(),
    password: z
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = () => {
    console.log(form.getValues());
  };
  return (
    <Container size="xs" px={0}>
      <Card>
        <Title order={2} ta="center">
          Sign Up
        </Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              placeholder="your@email.com"
              label="Email"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm Password"
              key={form.key("confirmPassword")}
              {...form.getInputProps("confirmPassword")}
            />
            <Group>
              <Button type="submit">Log In</Button>
            </Group>
          </Stack>
        </form>
      </Card>
    </Container>
  );
};

export default SignUp;
