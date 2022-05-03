import { Task } from "src/interfaces/task";
import { Grid, Button, Card } from "semantic-ui-react";
import { useRouter } from "next/router";
import TaskList from "./components/taskList";
import Layout from "./components/Layout";

interface Props {
  tasks: Task[];
}

export default function index({ tasks }: Props) {
  const router = useRouter();

  return (
    <Layout>
      {tasks.length === 0 ? (
        <Grid
          centered
          columns={3}
          verticalAlign="middle"
          style={{ height: "70%" }}
        >
          <Grid.Row>
            <Grid.Column>
              <Card>
                <Card.Content style={{margin: "0 auto"}}>
                  <Card.Header>
                    <h1 style={{textAlign: "center"}}>No tasks yet</h1>
                  </Card.Header>
                  <Button onClick={() => router.push("tasks/new")} style={{marginLeft: "1.5rem"}}>
                    Create one
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ) : (
        <TaskList tasks={tasks}></TaskList>
      )}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();

  return {
    props: {
      tasks: tasks,
    },
  };
};
