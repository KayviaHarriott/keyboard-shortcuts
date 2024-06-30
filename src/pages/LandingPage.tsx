import { Box } from "@mui/material";
import { CustomInputField } from "../components/CustomInput";

export const LandingPage = () => {
  // #01172F
  // #C6EBBE
  //  #FFFFF
  return (
    <div className="h-dvh">
      <div
        style={{ letterSpacing: "4px" }}
        className="flex text-[32px] font-[800] py-[56px] flex justify-center"
      >
        <p className="">useful</p>
        <p className="">shortcuts</p>
      </div>
      <div className="flex justify-center items-center text-center">
        <CustomInputField
          label="Search for a shortcut by name"
          placeholder="Copy, paste, mirror, etc."
          width="280px"
        />
      </div>
      <Box></Box>
    </div>
  );
};
