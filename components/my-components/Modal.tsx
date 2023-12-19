import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Modal = ({ onClose }: { onClose: any }) => {
  return (
    <div className="w-full h-full bg-green-600 backdrop-blur">
      <Card>
        <Button onClick={onClose}>Click me</Button>
        Modal
      </Card>
    </div>
  );
};

export default Modal;
