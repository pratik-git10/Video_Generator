import Header from "@/components/dashboard/header";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col max-w-3xl mx-auto mt-5 text-center">
        <h2 className="text-3xl mx-4">Welcome to the world of wizard..</h2>
        <p className="text-base text-muted-foreground">
          because magic happens everywhere in every form.
        </p>
      </div>
    </div>
  );
}
