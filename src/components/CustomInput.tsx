import { Input } from "@mui/material";

interface CustomInputFieldProps {
  label: string;
  placeholder: string;
  width: string;
}

export const CustomInputField: React.FC<CustomInputFieldProps> = ({
  label,
  placeholder,
  width,
}) => {
  return (
    <div>
      <p className="font-semibold">{label}</p>
      <Input placeholder={placeholder} sx={{ width: width }} />{" "}
    </div>
  );
};
