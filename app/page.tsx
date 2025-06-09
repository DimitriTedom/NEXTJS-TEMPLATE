import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
      <h1>NextJs Template Created with ❤️ by @Snowdev</h1>
      <Button>Code</Button>
    </div>
  );
};

export default Home;
