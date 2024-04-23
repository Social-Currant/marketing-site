import startup from "~/assets/images/Startup.png";
import growth from "~/assets/images/growth.png";
import union from "~/assets/images/union.png";
import enterprise from "~/assets/images/enterprise.png";

export const plans = [
    {
      name: "STARTER PLAN",
      description:"Exclusive Entry Level Access to Social Currant's Creator Database",
      image: startup,
      features: [
        { name: "Creator Database", value: true },
        { name: "Sort and Filter", value: true },
        { name: "Search", value: true },
        { name: "Save Creators", value: true },
        { name: "Profile Analytics", value: true },
        { name: "Customer Support", value: "Standard" },
      ],
    },
    {
      name: "GROWTH PLAN",
      description:"Perfect for small or medium-sized organizations running smaller campaigns",
      image: growth,
      features: [
        { name: "Everything in Starter Plan", value: true },
        { name: "Campaign Tools", value: true },
        { name: "Creator Matching", value: true },
        { name: "Metrics Report", value: true },
        { name: "Creator Spend", value: true },
        { name: "Campaign Check-ins", value: true },
        { name: "Customer Support", value: "Priority - 24h Response" },
      ],
    },
    {
      name: "SCALE PLAN",
      description:"Best for organizations running long-term campaigns at scale",
      image: union,
      features: [
        { name: "Everything in Growth Plan", value: true },
        { name: "Dedicated Slack Channel", value: true },
        { name: "Weekly Campaign Check-Ins", value: true },
        { name: "Advanced Metrics Report", value: true },
        { name: "Unlimited Creator Matches", value: true },
        { name: "Unlimited Analytics Access", value: true },
        { name: "Customer Support", value: "Dedicated Slack Channel" },
      ],
    },
    {
      name: "ENTERPRISE PLAN",
      image: enterprise,
      description:"For organizations looking for custom support, strategy and done for you services",
      features: [
        { name: "Everything in Scale Plan", value: true },
        { name: "Dedicated Account Manager", value: true },
        { name: "Managed Campaigns", value: true },
        { name: "Creator Communication", value: true },
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
          { name: "Profile Access", value: "yes" },
          { name: "Save Creators", value: "5" },
          { name: "Search Filters", value: "Basic" },
          { name: "Creator Spend", value: "no" },
        ],
      },
      {
        name: "Campaign Tools",
        features: [
          { name: "Campaign Draft", value: "yes" },
          { name: "Campaign Creation", value: "no" },
          { name: "Creator Proposal", value: "no" },
          { name: "Content Management", value: "no" },
          { name: "Campaign Metrics Report", value: "no" },
        ],
      },
      {
        name: "Additional Services",
        features: [
          { name: "Customer Support", value: "Standard" },
          { name: "Campaign Check-ins", value: "no" },
          { name: "Dedicated Account Manager", value: "no" },
          { name: "Managed Campaigns", value: "no" },
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
            { name: "Creator Profile", value: "Unlimited" },
            { name: "Add to Campaign", value: "yes" },
            { name: "Campaign Creator Matches", value: "3 Rounds" },
            { name: "Profile Access", value: "yes" },
            { name: "Save Creators", value: "10" },
            { name: "Search Filters", value: "Advanced" },
            { name: "Creator Spend", value: "8% Transaction Fee" },
          ],
        },
        {
          name: "Campaign Tools",
          features: [
            { name: "Campaign Draft", value: "yes" },
            { name: "Campaign Creation", value: "yes" },
            { name: "Creator Proposal", value: "25 Proposals" },
            { name: "Content Management", value: "yes" },
            { name: "Campaign Metrics Report", value: "Limited" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Priority (24h response)" },
            { name: "Campaign Check-ins", value: "Bi-Weekly" },
            { name: "Dedicated Account Manager", value: "no" },
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
            { name: "Creator Profile", value: "Unlimited" },
            { name: "Add to Campaign", value: "yes" },
            { name: "Campaign Creator Matches", value: "Unlimited" },
            { name: "Profile Access", value: "yes" },
            { name: "Save Creators", value: "25" },
            { name: "Search Filters", value: "Advanced" },
            { name: "Creator Spend", value: "5% Transaction Fee" },
          ],
        },
        {
          name: "Campaign Tools",
          features: [
            { name: "Campaign Draft", value: "yes" },
            { name: "Campaign Creation", value: "yes" },
            { name: "Creator Proposal", value: "50 Proposals" },
            { name: "Content Management", value: "yes" },
            { name: "Campaign Metrics Report", value: "Advanced" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Dedicated Slack Channel" },
            { name: "Campaign Check-ins", value: "Weekly" },
            { name: "Dedicated Account Manager", value: "no" },
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
            { name: "Creator Profile", value: "Unlimited" },
            { name: "Add to Campaign", value: "yes" },
            { name: "Campaign Creator Matches", value: "Unlimited" },
            { name: "Profile Access", value: "yes" },
            { name: "Save Creators", value: "Unlimited" },
            { name: "Search Filters", value: "Advanced" },
            { name: "Creator Spend", value: "No Transaction Fee" },
          ],
        },
        {
          name: "Campaign Tools",
          features: [
            { name: "Campaign Draft", value: "yes" },
            { name: "Campaign Creation", value: "yes" },
            { name: "Creator Proposal", value: "Unlimited" },
            { name: "Content Management", value: "yes" },
            { name: "Campaign Metrics Report", value: "Advanced" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Dedicated Slack Channel" },
            { name: "Campaign Check-ins", value: "Weekly" },
            { name: "Dedicated Account Manager", value: "yes" },
            { name: "Managed Campaigns", value: "yes" },
          ],
      },
    ],
  },
];