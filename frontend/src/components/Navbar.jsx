import {
  Button,
  Container,
  Group,
  Burger,
  Collapse,
  Stack,
  Paper,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Container size={{ base: "xs", sm: "lg" }}>
      <Group justify="space-between">
        <h1>File Uploader</h1>
        <Link to="/log-in">
          <Button visibleFrom="sm" variant="default">
            Log In
          </Button>
        </Link>
        <Burger hiddenFrom="sm" opened={opened} onClick={toggle} size="sm" />
      </Group>
      <Collapse hiddenFrom="sm" in={opened}>
        <Container>
          <Paper withBorder p="md" radius="md" shadow="xs">
            <Stack align="stretch">
              <Link to="/log-in" style={{ textDecoration: "none" }}>
                <Button variant="white" fullWidth color="black">
                  Log In
                </Button>
              </Link>
            </Stack>
          </Paper>
        </Container>
      </Collapse>
    </Container>
  );
};

export default Navbar;
