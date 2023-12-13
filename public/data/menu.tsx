import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
export const menus = [
  {
    title: "Home",
    submenu: [
      {
        title: "Real Estate",
        url: "/",
      },
      {
        title: "Property Listing",
        url: "/home-2",
      },
      {
        title: "Car Rental",
        url: "/home-3",
      },
      {
        title: "Hotel Booking",
        url: "/home-4",
      },
      {
        title: "Tour Booking",
        url: "/home-5",
      },
      {
        title: "Flight Booking",
        url: "/home-6",
      },
    ],
  },
  {
    title: "Listings",
    submenu: [
      {
        title: "property",
        submenu: [
          {
            title: "Property List",
            url: "/property-list",
          },
          {
            title: "Property Grid",
            url: "/property-grid",
          },
          {
            title: "Property Map",
            url: "/property-map",
          },
          {
            title: "Add Property",
            url: "/add-property",
          },
          {
            title: "Property Details 1",
            url: "/property-details-1",
          },
          {
            title: "Property Details 2",
            url: "/property-details-2",
          },
        ],
      },
      {
        title: "Cab",
        submenu: [
          {
            title: "Cab Listing",
            url: "/cab-listing",
          },
          {
            title: "Cab Listing Grid",
            url: "/cab-listing-grid",
          },
          {
            title: "Cab Listing Map",
            url: "/cab-listing-map",
          },
          {
            title: "Cab Listing Details",
            url: "/cab-listing-details",
          },
        ],
      },
      {
        title: "Hotel",
        submenu: [
          {
            title: "Hotel Listing",
            url: "/hotel-listing",
          },
          {
            title: "Hotel Listing Grid",
            url: "/hotel-listing-grid",
          },
          {
            title: "Hotel Listing Map",
            url: "/hotel-listing-map",
          },
          {
            title: "Hotel listing Details",
            url: "/hotel-listing-details",
          },
        ],
      },
      {
        title: "Tour",
        submenu: [
          {
            title: "Tour Listing",
            url: "/tour-listing",
          },
          {
            title: "Tour Listing Grid",
            url: "/tour-listing-grid",
          },
          {
            title: "Tour Listing Map",
            url: "/tour-listing-map",
          },
          {
            title: "Tour Listing Details",
            url: "/tour-listing-details",
          },
        ],
      },
      {
        title: "Flight",
        submenu: [
          {
            title: "Flight List",
            url: "/flight-list",
          },
          {
            title: "Flight Details",
            url: "/flight-details",
          },
        ],
      },
      {
        title: "Compare Listing",
        url: "/compare-listing",
      },
    ],
  },
  {
    title: "Pages",
    submenu: [
      {
        title: "Agent",
        submenu: [
          {
            title: "Agent",
            url: "/agent",
          },
          {
            title: "Agent Details List",
            url: "/agent-details-list",
          },
          {
            title: "Agent Details Grid",
            url: "/agent-details-grid",
          },
          {
            title: "Agent Details Review",
            url: "/agent-details-review",
          },
        ],
      },
      {
        title: "Service",
        submenu: [
          {
            title: "Service",
            url: "/service",
          },
          {
            title: "Service Details",
            url: "/service-details",
          },
        ],
      },
      {
        title: "About Us",
        url: "/about-us",
      },
      {
        title: "Payment Method",
        url: "/payment-method",
      },
      {
        title: "Pricing Plan",
        url: "/pricing-plan",
      },
    ],
  },
  {
    title: "Dashboard",
    submenu: [
      {
        title: "User Dashboard",
        url: "/personal-info",
      },
      {
        title: "Vendor Dashboard",
        url: "/vendor-dashboard",
      },
      {
        title: "Admin Dashboard",
        url: "/admin-dashboard",
      },
    ],
  },
  {
    // title: <i className="las la-ellipsis-h text-2xl flex items-center "></i>,
    title: <EllipsisHorizontalIcon className="w-7 h-7" />,
    submenu: [
      {
        title: "Blog",
        submenu: [
          { title: "Blog", url: "/blog-grid" },
          { title: "Blog Details", url: "/blog-details" },
        ],
      },
      { title: "Faq", url: "/faq" },
      { title: "Contact Us", url: "/contact" },
      { title: "Sign in", url: "/sign-in" },
      { title: "Sign up", url: "/signup" },
      { title: "Error", url: "/error" },
    ],
  },
];

export const newMenus = [
  {
    title: "Home",
    url: '/',
    submenu: [],
  },
  {
    title: "Listings",
    submenu: [
      {
        title: "Trips",
        url: "/trip-list",
      },
      {
        title: "Drivers",
        url: "/driver-listing-grid",
      },
      {
        title: "Planer",
        url: "/planer-listing",
      },
    ],
  },
  {
    title: "Become A Partner",
    url: "/become-a-partner",
    submenu: [],
  },
  {
    title: "Pricing Plans",
    url: "/pricing-plan",
    submenu: [],
  },
  {
    title: "About US",
    url: '/about-us',
  },
  {
    title: "Contact US",
    url: '/contact',
  },
];