"use client";

import Link from "next/link";
import {
  IconPhone,
  IconMail,
  IconBolt,
  IconNetwork,
  IconBrain,
  IconHash,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
              CHGR+
            </h1>
          </div>
          <p className="text-base text-left">
            CHGR+ LLC creates an environment through which high-quality firms
            from diverse backgrounds can achieve their EV Charging Station
            investment goals.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-white font-semibold mb-4">FEATURED SOLUTIONS</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <IconBolt className="w-4 h-4 text-green-400" />
              <Link href="/silverback1000" className="hover:text-white">
                Silverback 1000 – Industrial-Grade Fast Charger
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <IconNetwork className="w-4 h-4 text-green-400" />
              <Link href="/network-setup" className="hover:text-white">
                Custom EV Network Deployment Services
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <IconBrain className="w-4 h-4 text-green-400" />
              <Link href="/consulting" className="hover:text-white">
                Infrastructure Planning & Investment Consulting
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <IconHash className="w-4 h-4 text-green-400" />
              <Link href="/partner" className="hover:text-white">
                Strategic Partnership Opportunities
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/partner" className="hover:text-white">
                Partner With Us
              </Link>
            </li>
            <li>
              <Link href="/purchasebulkchargers" className="hover:text-white">
                Purchase Bulk Chargers
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="text-green-400 hover:text-green-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">CONTACT US</h3>
          <div className="text-sm mb-2 space-y-2">
            <div className="flex items-center gap-2">
              <IconPhone className="w-5 h-5 text-green-400" />
              <span>+1 (213) 373 - 6015</span>
            </div>
            <div className="flex items-center gap-2">
              <IconMail className="w-5 h-5 text-green-400" />
              <a href="mailto:wilson@chgrplus.com" className="hover:underline">
                wilson@chgrplus.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        CHGR+ , LLC ©. All rights reserved.
      </div>
    </footer>
  );
}
