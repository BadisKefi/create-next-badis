import { ModeSwitcher } from "@/components/demo-theme/mode-switcher";
import { ModeToggle } from "@/components/demo-theme/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="container mx-auto py-10 space-y-10">
        <div className="space-y-4">
          <Button className="w-full" size={"lg"} asChild>
            <Link href={"/demo-tables"}>Demo Tables</Link>
          </Button>
          <Button className="w-full" size={"lg"} asChild>
            <Link href={"/demo-forms"}>Demo Forms</Link>
          </Button>
          <Button className="w-full" size={"lg"} asChild>
            <Link href={"/demo-sidebars/demo-sidebar-14"}>Demo Sidebar 14</Link>
          </Button>
          <Button className="w-full" size={"lg"} asChild>
            <Link href={"/demo-sidebars/demo-sidebar-16"}>Demo Sidebar 16</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <ModeSwitcher />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
