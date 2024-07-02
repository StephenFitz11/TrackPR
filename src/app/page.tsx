import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "./movements/data-table";
import { columns } from "./movements/columns";

export type Movement = {
  id: number;
  name: string;
};

const movements = [
  { id: 1, name: "Deadlifts" },
  { id: 2, name: "Back Squats" },
  { id: 3, name: "Bench Press" },
  { id: 4, name: "Overhead Press" },
  { id: 5, name: "Bent Over Rows" },
  { id: 6, name: "Front Squats" },
  { id: 7, name: "Barbell Curls" },
  { id: 8, name: "Barbell Lunges" },
  { id: 9, name: "Barbell Hip Thrusts" },
  { id: 10, name: "Barbell Clean and Press" },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full">
        <div className="flex justify-between items-center mt-10 px-4 ">
          <h1 className="text-4xl font-bold ">Workouts</h1>
          <Button className="mr-4">+ Add</Button>
        </div>
        <Separator className="w-full mt-8" />
        <DataTable columns={columns} data={movements} />
      </div>
    </main>
  );
}
