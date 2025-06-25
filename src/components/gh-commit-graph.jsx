import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import axios from "axios";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function GitHubContributionHeatmap() {
  const [contributions, setContributions] = useState([]);
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const username = "vishnumohanan404";
  useEffect(() => {
    const fetchContributions = async () => {
      const query = `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

      const res = await axios.post(
        "https://api.github.com/graphql",
        { query },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const days =
        res.data.data.user.contributionsCollection.contributionCalendar.weeks
          .flatMap((week) => week.contributionDays)
          .map((day) => ({
            date: day.date,
            count: day.contributionCount,
          }));
      setContributions(days);
    };

    fetchContributions();
  }, [username, token]);

  return (
    <motion.div
      className="bg-white border-zinc-200 border rounded-lg flex flex-col"
      transition={transition}
      variants={variants}
    >
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <p className="font-sans font-medium ">Contributions</p>
      </div>
      <div className="p-3 space-y-2 text-gray-600  font-extralight text-sm">
        <CalendarHeatmap
          startDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 1))
          }
          endDate={new Date()}
          values={contributions}
          classForValue={(value) => {
            if (!value) return "color-empty";
            if (value.count >= 10) return "color-github-4";
            if (value.count >= 5) return "color-github-3";
            if (value.count >= 2) return "color-github-2";
            return "color-github-1";
          }}
          tooltipDataAttrs={(value) => {
            if (!value || !value.date) return null;
            return {
              "data-tooltip": `${value.count} contributions on ${value.date}`,
            };
          }}
          showWeekdayLabels={false}
          gutterSize={1.5}
          showOutOfRangeDays
        />
      </div>
    </motion.div>
  );
}
