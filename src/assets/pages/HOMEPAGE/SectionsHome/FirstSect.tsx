import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../../../App.css";

const accordionData = [
  {
    id: "panel1",
    title: "Cost of delivery",
    summary:
      "This service will help you find out the estimated cost of your shipment delivery.",
    content: "Content for panel 1. Customize this based on your data.",
  },
  {
    id: "panel2",
    title: "Delivery terms",
    summary:
      "Learn more about the approximate date of arrival of your departure.",
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
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleTrack = () => {
    if (!inputValue.trim()) {
      alert("Please enter a valid invoice phone number.");
      return;
    }
  };

  return (
    <section
      className="
      w-full
      bg-[#FFE400]
      flex
      justify-center
      relative
      "
    >
      <div
        className="
        w-full
        max-w-[1400px]
        min-h-[650px]
        md:min-h-[560px]
        px-5
        sm:px-8
        md:px-10
        flex
        flex-col
        items-center
        justify-center
        "
      >
        {/* HEADER */}

        <div
          className="
          w-full
          flex
          flex-col
          items-center
          text-center
          gap-5
          "
        >
          <h1
            className="
            font-semibold
            text-[32px]
            sm:text-[38px]
            md:text-[45px]
            leading-tight
            "
          >
            Track Your Shipment
          </h1>

          <p
            className="
            text-[15px]
            sm:text-[17px]
            md:text-[18px]
            text-gray-800
            "
          >
            Tracking made easy with Lintense
          </p>
          <div
            className="
            flex
            flex-col
            md:flex-row
            w-full
            max-w-[550px]
            gap-3
            md:gap-0
            "
          >
            <input
              type="text"
              placeholder="Enter invoice phone number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="
              h-[48px]
              w-full
              px-4
              outline-none
              rounded-lg
              md:rounded-l-lg
              md:rounded-r-none
              "
            />

            <button
              onClick={handleTrack}
              className="
              h-[48px]
              w-full
              md:w-[160px]
              bg-black
              text-white
              rounded-lg
              md:rounded-l-none
              md:rounded-r-lg
              transition
              duration-300
              hover:bg-[#333333]
              "
            >
              Track Now
            </button>
          </div>
        </div>

        <div
          className="
          w-full
          max-w-[1100px]
          mt-16
          md:mt-20
          shadow-xl
          rounded-xl
          overflow-hidden
          "
        >
          {accordionData.map(({ id, title, summary, content }) => (
            <Accordion
              key={id}
              expanded={expanded === id}
              onChange={handleChange(id)}
              className="!shadow-none"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${id}-content`}
                id={`${id}-header`}
                sx={{
                  padding: {
                    xs: "12px 15px",
                    sm: "15px 20px",
                    md: "15px 25px",
                  },

                  "& .MuiAccordionSummary-content": {
                    flexDirection: {
                      xs: "column",
                      md: "row",
                    },

                    gap: {
                      xs: "8px",
                      md: "20px",
                    },

                    alignItems: {
                      xs: "flex-start",
                      md: "center",
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    width: {
                      xs: "100%",
                      md: "25%",
                    },

                    flexShrink: 0,

                    fontWeight: 600,

                    fontSize: {
                      xs: "14px",
                      md: "16px",
                    },
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",

                    fontSize: {
                      xs: "13px",
                      md: "15px",
                    },
                  }}
                >
                  {summary}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  padding: {
                    xs: "15px",
                    md: "25px",
                  },
                }}
              >
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
