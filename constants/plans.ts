import startup from "~/assets/images/Startup.png";
import growth from "~/assets/images/growth.png";
import union from "~/assets/images/union.png";
import enterprise from "~/assets/images/enterprise.png";

export const plans = [
    {
      name: "STARTER",
      description:"Starter plan for organizations new to creator work",
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
      name: "GROWTH",
      description:"Our self service plan is perfect for small or medium-sized organizations running smaller campaigns",
      image: growth,
      features: [
        { name: "Creator Database", value: true},
        { name: "Campaign Tools", value: true },
        { name: "Creator Sourcing", value: true },
        { name: "Metrics Report", value: true },
        { name: "Creator Spend", value: true },
        { name: "Customer Support", value: "Standard" },
      ],
    },
    {
      name: "SCALE",
      description:"Best for organizations running long-term campaigns at scale with Social Currant support",
      image: union,
      features: [
        { name: "Everything in Growth Plan", value: true },
        { name: "Campaign Check-ins", value: true },
        { name: "Dedicated Campaign Strategist", value: true },
        { name: "Dedicated Slack Channel", value: true },
        { name: "Campaign Check-Ins", value: "true" },
        { name: "Advanced Metrics Report", value: true },
        { name: "Creator Introductions", value: true },
        { name: "Customer Support", value: "Priority" },
      ],
    },
    {
      name: "ENTERPRISE",
      image: enterprise,
      description:"For organizations looking for custom support, strategy and managed services for their creator work",
      features: [
        { name: "Everything in Scale Plan", value: true },
        { name: "Managed Campaigns", value: true },
        { name: "Creator Communication", value: true },
      ],
    },
  ];

export const plansTable = [
  {
    name: "Starter",
    features: [
      {
        name: "Creator Database",
        features: [
          { name: "Add to Campaign", value: "yes" },
          { name: "Save Creators", value: "5" },
          { name: "Search Filters", value: "Limited" },
          { name: "Creator Sourcing", value: "no"},
        ],
      },
      {
        name: "Campaigns",
        features: [
          { name: "Campaign Metrics Report", value: "Limited" },
          { name: "Creator Applications", value: 'no'},
          { name: "Creator Spend", value: "10% Transaction Fee" },
          { name: "Social Currant Managed Campaigns", value: "no" },
          { name: "Campaign Check-ins", value: "no" },
          { name: "Dedicated Campaign Strategist", value: "no" },
        ],
      },
      {
        name: "Additional Services",
        features: [
          { name: "Customer Support", value: "Standard" },
          { name: "Creator Introductions", value: 'no'},
          { name: "User Seats", value: '1'},
        ],
      },
    ],
  },
  {
      name: "Growth",
      features: [
        {
          name: "Creator Database",
          features: [
            { name: "Add to Campaign", value: "yes" },
            { name: "Save Creators", value: "10" },
            { name: "Search Filters", value: "Limited" },
            { name: "Creator Sourcing", value: "no"},
          ],
        },
        {
          name: "Campaigns",
          features: [
            { name: "Campaign Metrics Report", value: "Limited" },
            { name: "Creator Applications", value: 'yes'},
            { name: "Creator Spend", value: "10% Transaction Fee" },
            { name: "Social Currant Managed Campaigns", value: "no" },
            { name: "Campaign Check-ins", value: "no" },
            { name: "Dedicated Campaign Strategist", value: "no" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Standard" },
            { name: "Creator Introductions", value: 'no'},
            { name: "User Seats", value: '2'},
          ],
        },
      ],
    },
    {
      name: "Scale",
      features: [
        {
          name: "Creator Database",
          features: [
            { name: "Add to Campaign", value: "yes" },
            { name: "Save Creators", value: "25" },
            { name: "Search Filters", value: "Advanced" },
            { name: "Creator Sourcing", value: "yes"},
          ],
        },
        {
          name: "Campaigns",
          features: [
            { name: "Campaign Metrics Report", value: "Advanced" },
            { name: "Creator Applications", value: 'yes'},
            { name: "Creator Spend", value: "8% Social Currant Fee" },
            { name: "Social Currant Managed Campaigns", value: "no" },
            { name: "Campaign Check-ins", value: "Bi-Weekly" },
            { name: "Dedicated Campaign Strategist", value: "yes" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Priority" },
            { name: "Creator Introductions", value: 'yes'},
            { name: "User Seats", value: '3'},
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
            { name: "Save Creators", value: "Unlimited" },
            { name: "Search Filters", value: "Advanced" },
            { name: "Creator Sourcing", value: "yes"},
          ],
        },
        {
          name: "Campaigns",
          features: [
            { name: "Campaign Metrics Report", value: "Advanced" },
            { name: "Creator Applications", value: 'yes'},
            { name: "Creator Spend", value: "No Fee" },
            { name: "Social Currant Managed Campaigns", value: "yes" },
            { name: "Campaign Check-ins", value: "As Requested" },
            { name: "Dedicated Campaign Strategist", value: "yes" },
          ],
        },
        {
          name: "Additional Services",
          features: [
            { name: "Customer Support", value: "Dedicated Slack Channel" },
            { name: "Creator Introductions", value: 'yes'},
            { name: "User Seats", value: '5'},
          ],
      },
    ],
  },
];