import { columns, Payment } from "./columns";
import { DataTable } from "../../components/src/dashboard/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "m@example.com",
    },
    {
      id: "728ed52f1",
      amount: 100,
      status: "pending",
      email: "abc@gmail.com",
    },
    {
      id: "728ed52fb",
      amount: 100,
      status: "failed",
      email: "c@yahoo.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
