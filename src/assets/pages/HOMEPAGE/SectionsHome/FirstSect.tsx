import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../../../App.css"
const accordionData = [
  {
    id: "panel1",
    title: "Cost of delivery",
    summary: "This service will help you find out the estimated cost of your shipment delivery.",
    content: "Content for panel 1. Customize this based on your data.",
  },
  {
    id: "panel2",
    title: "Delivery terms",
    summary: "Learn more about the approximate date of arrival of your departure.",
    content: "Content for panel 2. Customize this based on your data.",
  },
  {
    id: "panel3",
    title: "The nearest branch",
    summary: "Locate the nearest branch office of Lintense Delivery.",
    content: "Content for panel 3. Customize this based on your data.",
  },
];

const FirstSect = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleTrack = () => {
    if (!inputValue.trim()) {
      alert("Please enter a valid invoice phone number.");
      return;
    }
  };

  return (
    <section className="w-full relative bg-[#FFE400] flex items-center justify-center">
      <div className="w-[80%] h-[500px] flex flex-col items-center justify-center">
        <div className="flex flex-col gap-[20px] items-center h-[70%]">
          <span className="text-[45px] font-semibold">Track Your Shipment</span>
          <span className="text-[18px]">Tracking made easy with Lintense</span>
          <div className="h-[45px] w-[500px] flex">
            <input
              className="rounded-l-lg outline-none h-full w-full px-3"
              type="text"
              placeholder="Enter invoice phone number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="bg-black h-full text-white px-3 w-[150px] hover:bg-[#333333] rounded-r-lg"
              onClick={handleTrack}
            >
              Track Now
            </button>
          </div>
        </div>
        <div className="w-[70rem] absolute bottom-[-80px] shadow-xl">
          {accordionData.map(({ id, title, summary, content }) => (
            <Accordion
              key={id}
              expanded={expanded === id}
              onChange={handleChange(id)}
              className="py-2 pl-6 lists"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${id}-content`}
                id={`${id}-header`}
              >
                <Typography className="title" sx={{ width: "25%", flexShrink: 0 }}>{title}</Typography>
                <Typography sx={{ color: "text.secondary" }}>{summary}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSect;
