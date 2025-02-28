import { columns as columns_1 } from "@/components/demo-tables/table-demo-1/columns";
import { Payment, payments } from "@/components/demo-tables/table-demo-1/data";
import { DataTableDemo as DataTable_1 } from "@/components/demo-tables/table-demo-1/data-table";

import { columns as columns_2 } from "@/components/demo-tables/table-demo-2/columns";
import { Task } from "@/components/demo-tables/table-demo-2/schema";
import tasks from "@/components/demo-tables/table-demo-2/tasks.json";
import { DataTableDemo as DataTable_2 } from "@/components/demo-tables/table-demo-2/data-table";
import BackButton from "@/components/custom-made/LinkBack";

async function getData_1(): Promise<Payment[]> {
  return payments;
}

async function getData_2(): Promise<Task[]> {
  return tasks;
}

export default async function DemoTablesPage() {
  const data_1 = await getData_1();
  const data_2 = await getData_2();

  return (
    <div className="container mx-auto py-10">
      <BackButton className="w-full" size={"lg"}>
        Return
      </BackButton>
      <DataTable_1 columns={columns_1} data={data_1} />
      <DataTable_2 columns={columns_2} data={data_2} />
    </div>
  );
}
