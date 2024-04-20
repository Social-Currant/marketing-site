import startup from "~/assets/images/Startup.png";
import growth from "~/assets/images/growth.png";
import union from "~/assets/images/union.png";
import enterprise from "~/assets/images/enterprise.png";

export const plans = [
    {
      name: "STARTER PLAN",
      description:"Suggested for those new to influencer marketing",
      image: startup,
      features: [
        { name: "Creator Access (Limited)", value: true },
        { name: "Campaign Tools", value: false },
        { name: "Creator Matching", value: false },
        { name: "Custom Metrics Report", value: false },
        { name: "Creator Spend", value: false },
        { name: "Campaign Check-ins", value: false },
        { name: "Customer Support", value: "Standard" },
      ],
    },
    {
      name: "GROWTH PLAN",
      description:"Perfect for small or medium-sized organizations",
      image: growth,
      features: [
        { name: "Advanced Creator Database", value: true },
        { name: "Campaign Tools", value: true },
        { name: "Creator Matching", value: true },
        { name: "Custom Metrics Report", value: true },
        { name: "Creator Spend", value: true },
        { name: "Campaign Check-ins", value: true },
        { name: "Customer Support", value: "Priority - 24h Response" },
      ],
    },
    {
      name: "SCALE PLAN",
      description:"Best for long-running or repeated campaigns",
      image: union,
      features: [
        { name: "Advanced Creator Database", value: true },
        { name: "Campaign Tools", value: true },
        { name: "Creator Matching", value: true },
        { name: "Custom Metrics Report", value: true },
        { name: "Creator Spend", value: true },
        { name: "Campaign Check-ins", value: true },
        { name: "Customer Support", value: "Dedicated Slack Channel" },
      ],
    },
    {
      name: "ENTERPRISE PLAN",
      image: enterprise,
      description:"Best for long-running or repeated campaigns",
      features: [
        { name: "Advanced Creator Database", value: true },
        { name: "Campaign Tools", value: true },
        { name: "Creator Matching", value: true },
        { name: "Custom Metrics Report", value: true },
        { name: "Creator Spend", value: true },
        { name: "Campaign Check-ins", value: true },
        { name: "Customer Support", value: "Dedicated Slack Channel" },
      ],
    },
  ];

export const plansTable = [
  {
    name: "Starter Plan",
    features: [
      {
        name: "Creator Database",
        features: [
          { name: "Creator Profile", value: "25 Profiles" },
          { name: "Add to Campaign", value: "no" },
          { name: "Campaign Creator Matches", value: "no" },
          { name: "Profile Access", value: "Limited" },
          { name: "Save Creators", value: "no" },
          { name: "Advanced Search Filters", value: "Limited" },
          { name: "Creator Spend", value: "No" },
        ],
      },
      {
        name: "Campaign Tools",
        features: [
          { name: "Campaign Draft", value: "yes" },
          { name: "Campaign Creation", value: "no" },
          { name: "Creator Proposal", value: "no" },
          { name: "Content Management", value: "no" },
          { name: "Custom Campaign Metrics Report", value: "no" },
        ],
      },
      {
        name: "Additional Services",
        features: [
          { name: "Customer Support", value: "Standard" },
          { name: "Campaign Check-ins", value: "no" },
        ],
      },
    ],
  },
  {
      name: "Growth Plan",
      features: [
        {
          name: "Creator Database",
          features: [
            { name: "Creator Profile", value: "Up to 100 Profiles" },
            { name: "Add to Campaign", value: "no" },
            { name: "Campaign Creator Matches", value: "3 Rounds of Matches" },
            { name: "Profile Access", value: "yes" },
            { name: "Save Creators", value: "10 Creators" },
            { name: "Advanced Search Filters", value: "yes" },
            { name: "Creator Spend", value: "8% Transaction Fee" },
          ],
        },
        {
          name: "Campaign Tools",
          features: [
            { name: "Campaign Draft", value: "yes" },
            { name: "Campaign Creation", value: "yes" },
            { name: "Creator Proposal", value: "Up to 25 Proposals" },
            { name: "Content Management", value: "yes" },
            { name: "Custom Campaign Metrics Report", value: "Limited" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Priority (24h response)" },
            { name: "Campaign Check-ins", value: "Bi-Weekly" },
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
            { name: "Creator Profile", value: "Unlimited" },
            { name: "Add to Campaign", value: "yes" },
            { name: "Campaign Creator Matches", value: "Unlimited" },
            { name: "Profile Access", value: "yes" },
            { name: "Save Creators", value: "25 Creators" },
            { name: "Advanced Search Filters", value: "yes" },
            { name: "Creator Spend", value: "5% Transaction Fee" },
          ],
        },
        {
          name: "Campaign Tools",
          features: [
            { name: "Campaign Draft", value: "yes" },
            { name: "Campaign Creation", value: "yes" },
            { name: "Creator Proposal", value: "Up to 50 Proposals" },
            { name: "Content Management", value: "yes" },
            { name: "Custom Campaign Metrics Report", value: "yes" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Dedicated Slack Channel" },
            { name: "Campaign Check-ins", value: "Weekly" },
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
            { name: "Creator Profile", value: "Unlimited" },
            { name: "Add to Campaign", value: "Unlimited" },
            { name: "Campaign Creator Matches", value: "yes" },
            { name: "Profile Access", value: "yes" },
            { name: "Save Creators", value: "yes" },
            { name: "Advanced Search Filters", value: "yes" },
            { name: "Creator Spend", value: "No Transaction Fee" },
          ],
        },
        {
          name: "Campaign Tools",
          features: [
            { name: "Campaign Draft", value: "yes" },
            { name: "Campaign Creation", value: "yes" },
            { name: "Creator Proposal", value: "100 Proposals" },
            { name: "Content Management", value: "yes" },
            { name: "Custom Campaign Metrics Report", value: "yes" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Dedicated Slack Channel" },
            { name: "Campaign Check-ins", value: "Dedicated Account Manager" },
          ],
      },
    ],
  },
];