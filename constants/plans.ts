import startup from "~/assets/images/Startup.png";
import growth from "~/assets/images/growth.png";
import union from "~/assets/images/union.png";
import enterprise from "~/assets/images/enterprise.png";

export const plans = [
    {
      name: "GROWTH PLAN",
      description:"Perfect for small or medium-sized organizations running smaller campaigns",
      image: growth,
      features: [
        { name: "Everything in Starter Plan", value: true },
        { name: "Campaign Tools", value: true },
        { name: "Creator Outreach", value: true },
        { name: "Metrics Report", value: true },
        { name: "Creator Spend", value: true },
        { name: "Campaign Check-ins", value: true },
        { name: "Customer Support", value: "Standard" },
      ],
    },
    {
      name: "SCALE PLAN",
      description:"Best for organizations running long-term campaigns at scale",
      image: union,
      features: [
        { name: "Everything in Growth Plan", value: true },
        { name: "Dedicated Campaign Strategist", value: true },
        { name: "Dedicated Slack Channel", value: true },
        { name: "Weekly Campaign Check-Ins", value: true },
        { name: "Advanced Metrics Report", value: true },
        { name: "Creator Matches", value: true },
        { name: "Customer Support", value: "Priority - 24h response" },
      ],
    },
    {
      name: "ENTERPRISE PLAN",
      image: enterprise,
      description:"For organizations looking for custom support, strategy and managed services",
      features: [
        { name: "Everything in Scale Plan", value: true },
        { name: "Managed Campaigns", value: true },
        { name: "Creator Communication", value: true },
      ],
    },
  ];

export const plansTable = [
  {
      name: "Growth Plan",
      features: [
        {
          name: "Creator Database",
          features: [
            { name: "Add to Campaign", value: "yes" },
            { name: "Profile Access", value: "yes" },
            { name: "Save Creators", value: "10" },
          ],
        },
        {
          name: "Campaign Tools",
          features: [
            { name: "Campaign Creation", value: "yes" },
            { name: "Messaging", value: "yes" },
            { name: "Creator Outreach", value: "yes" },
            { name: "Content Management", value: "yes" },
            { name: "Campaign Metrics Report", value: "Limited" },
            { name: "Creator Spend", value: "8% Transaction Fee" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Standard" },
            { name: "Campaign Check-ins", value: "no" },
            { name: "Dedicated Campaign Strategist", value: "no" },
            { name: "Managed Campaigns", value: "no" },
          ],
        },
      ],
    },
    {
      name: "Scale Plan",
      features: [
        {
          name: "Creator Database",
          features: [
            { name: "Add to Campaign", value: "yes" },
            { name: "Profile Access", value: "yes" },
            { name: "Save Creators", value: "25" },
          ],
        },
        {
          name: "Campaign Tools",
          features: [
            { name: "Campaign Creation", value: "yes" },
            { name: "Messaging", value: "yes" },
            { name: "Creator Outreach", value: "yes" },
            { name: "Content Management", value: "yes" },
            { name: "Campaign Metrics Report", value: "Advanced" },
            { name: "Creator Spend", value: "5% Transaction Fee" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Priority - 24 hours" },
            { name: "Campaign Check-ins", value: "Bi-Weekly" },
            { name: "Dedicated Campaign Strategist", value: "yes" },
            { name: "Managed Campaigns", value: "no" },
          ],
      },
    ],
  },
  {
      name: "Enterprise",
      features: [
        {
          name: "Creator Database",
          features: [
            { name: "Add to Campaign", value: "yes" },
            { name: "Profile Access", value: "yes" },
            { name: "Save Creators", value: "Unlimited" },
          ],
        },
        {
          name: "Campaign Tools",
          features: [
            { name: "Campaign Creation", value: "yes" },
            { name: "Messaging", value: "yes" },
            { name: "Creator Outreach", value: "yes" },
            { name: "Content Management", value: "yes" },
            { name: "Campaign Metrics Report", value: "Advanced" },
            { name: "Creator Spend", value: "No Transaction Fee" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Dedicated Slack Channel" },
            { name: "Campaign Check-ins", value: "As Needed" },
            { name: "Dedicated Campaign Strategist", value: "yes" },
            { name: "Managed Campaigns", value: "yes" },
          ],
      },
    ],
  },
];