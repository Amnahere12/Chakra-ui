"use client"
import { SimpleGrid } from "@chakra-ui/react";
import { useLoaderData } from 'vite-plugin-react-router-dom';




export default function Home() {
  const tasks = useLoaderData()
  return (


    <SimpleGrid spacing={10} minChildWidth={'300px'}>
      {tasks && tasks.tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}

    </SimpleGrid>

  );
}
export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks');
  return res.json();
};


