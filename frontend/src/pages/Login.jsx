import {
  Container,
  Title,
  Card,
  Text,
  TextInput,
  PasswordInput,
  Stack,
  Group,
  Button,
  Anchor,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";
import { Link } from "react-router-dom";

const schema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(1),
});

const Login = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
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
          Log In
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
            <Group>
              <Text>
                Don&apos;t have an account?{" "}
                <Anchor component={Link} to="/sign-up">
                  Sign up here
                </Anchor>
              </Text>
            </Group>
            <Group>
              <Button type="submit">Log In</Button>
            </Group>
          </Stack>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
