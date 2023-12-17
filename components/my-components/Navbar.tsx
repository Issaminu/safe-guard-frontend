import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-900 px-80 border-gray-800 border-xl border-b shadow-md text-white">
      <div className="flex justify-between items-center py-2">
        <div className="text-2xl font-bold ml-3">SafeGuard</div>
        <Button className="mx-4" variant={"ghost"}>
          Issam Boubcher
          <ChevronDown className="h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
