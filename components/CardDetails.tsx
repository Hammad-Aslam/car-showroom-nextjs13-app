import { CarProps } from "@/types";

interface CardDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}
const CardDetails = ({ isOpen, closeModel, car }: CardDetailsProps) => {
  return <div>CardDetails</div>;
};

export default CardDetails;
