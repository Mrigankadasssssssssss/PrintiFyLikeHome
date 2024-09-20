// import React from 'react'
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  AtSign,
} from "lucide-react";

const footerLinks = [
  {
    title: "Integrations",
    links: [
      "Shopify",
      "Etsy",
      "eBay",
      "Amazon",
      "TikTok Shop",
      "PrestaShop",
      "BigCommerce",
      "Wix",
      "WooCommerce",
      "Squarespace",
    ],
  },
  {
    title: "Discover",
    links: [
      "Blog",
      "Guides",
      "Products",
      "Etsy print-on-demand",
      "Shopify print-on-demand",
      "Woocommerce print-on-demand",
      "Wix print-on-demand",
      "Squarespace print-on-demand",
      "Make Your Own Shirt",
    ],
  },
  {
    title: "Start selling",
    links: [
      "Custom T-shirts",
      "Custom Hoodies",
      "Custom Mugs",
      "Custom Socks",
      "Custom Backpacks",
      "Custom Branding",
      "Sell on Etsy",
      "Sell on Social Media",
      "Free T-shirt Designs",
      "Custom Products",
    ],
  },
  {
    title: "Printify",
    links: [
      "Print on Demand",
      "Print Providers",
      "Experts Program",
      "Printify Express Delivery",
      "Become a Partner",
      "About",
      "Printify Quality Promise",
      "Jobs",
      "Webinars",
      "Printing Profits Podcast",
    ],
  },
];

const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Youtube, href: "#" },

  { Icon: AtSign, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-indigo-600">
              Logo
            </a>
          </div>
          <div className="flex space-x-6">
            {socialIcons.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{Icon.name}</span>
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 Printify, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
