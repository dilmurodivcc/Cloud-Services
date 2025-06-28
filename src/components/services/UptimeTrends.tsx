import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dataA = [
  { day: "Day 1", value: 1.7 },
  { day: "Day 5", value: 99.75 },
  { day: "Day 10", value: 15.85 },
  { day: "Day 15", value: 70.9 },
  { day: "Day 20", value: -13.78 },
  { day: "Day 25", value: 99.88 },
  { day: "Day 30", value: 1.95 },
  { day: "Day 35", value: 90.5 },
];

const dataB = [
  { day: "Day 1", value: 1.7 },
  { day: "Day 5", value: 99.75 },
  { day: "Day 10", value: 15.85 },
  { day: "Day 15", value: 70.9 },
  { day: "Day 20", value: -13.78 },
  { day: "Day 25", value: 99.88 },
  { day: "Day 30", value: 1.95 },
  { day: "Day 35", value: 90.5 }, 
];

const UptimeTrends = () => (
  <div>
    <h3 className="font-semibold text-lg my-[32px]">
      Third-Party Service Uptime Trends
    </h3>
    <div className="flex  gap-4">
      {[
        {
          name: "Service A Uptime",
          value: "99.95%",
          diff: "+0.02%",
          color: "text-green-600",
          data: dataA,
        },
        {
          name: "Service B Uptime",
          value: "99.88%",
          diff: "-0.05%",
          color: "text-red-600",
          data: dataB,
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white border border-[#cfdbe8] rounded-[8px] p-6 w-[50%] h-[400px] flex flex-col justify-between"
        >
          <div className="top">
            <h6>{item.name}</h6>
            <div
              className="font-bold text-[32px] leading-[125%]
              my-[8px]
"
            >
              {item.value}
            </div>
            <div
              className={`font-normal text-[16px] leading-[150%] text-[#4a739c]
`}
            >
              Last 30 Days <span className={`${item.color}`}>{item.diff}</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={item.data}>
              <XAxis dataKey="day" hide />
              <YAxis domain={[99.7, 100]} hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4a739c"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <div
            className="flex justify-between font-bold text-[13px] leading-[154%] text-[#4a739c]
"
          >
            {item.data.map((d, i) => (
              <span key={i}>{d.day}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default UptimeTrends;
