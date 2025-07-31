"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const form = useRef(null);
  const [agreed, setAgreed] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_768hpjt", "template_21xat7e", form.current, {
        publicKey: "ks_EWp-bVml_VmdSN",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Message Successfully Sent!");
        },
        (error) => {
          console.error("FAILED...", error); // avoid error.text
          toast.error("Message failed to send, please check and try again.");
        }
      );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-400 to-purple-600 text-black">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative w-full h-64 md:h-80 lg:h-[10rem]"
        data-aos="fade-down"
      >
        <Image
          src="/images/advt-cont.png" // Update image as needed
          alt="EV charger background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-between px-6 md:px-12">
          <h1 className="text-3xl md:text-4xl text-white font-bold z-20">
            CONTACT US
          </h1>
          <div className="text-white text-sm z-20">
            <span>You Are Here: </span>
            <Link href="/" className="hover:underline">
              HOME
            </Link>{" "}
            / <span className="font-semibold text-purple-950">CONTACT US</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-6">
            HOW TO <span className="font-medium">FIND US</span>
          </h2>
          <p className="mb-6 text-black">
            If you have any questions, just fill in the contact form, and we
            will answer you shortly. If you are living nearby, come visit us.
          </p>

          <div className="space-y-4 text-black">
            <h3 className="font-bold text-lg">Support Center</h3>
            <p>CHGR+ , LLC</p>
            <p>1712 Pioneer Ave. Suite 935, Cheyenne, WY 82001</p>
            <p>
              <strong>Telephone:</strong> +1 (213) 373 - 6015
            </p>
            <p>
              <strong>E-mail:</strong>{" "}
              <a
                href="mailto:wilson@chgrplus.com"
                className="text-blue-600 underline"
              >
                wilson@chgrplus.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Section: Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
          data-aos="fade-right"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col text-left">
              <label htmlFor="user_name" className="text-sm font-medium mb-1">
                First name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                className="border border-slate-400 p-2 rounded w-full"
                required
              />
            </div>
            <div className="flex flex-col text-left">
              <label
                htmlFor="user_lastname"
                className="text-sm font-medium mb-1"
              >
                Last name
              </label>
              <input
                id="user_lastname"
                type="text"
                name="user_lastname"
                className="border border-slate-400 p-2 rounded w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="user_country" className="text-sm font-medium mb-1">
              Country
            </label>
            <input
              id="user_country"
              type="text"
              name="user_country"
              className="border border-slate-400 p-2 rounded w-full"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col text-left">
              <label htmlFor="user_email" className="text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                className="border border-slate-400 p-2 rounded w-full"
                required
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="user_phone" className="text-sm font-medium mb-1">
                Phone
              </label>
              <input
                id="user_phone"
                type="tel"
                name="user_phone"
                className="border border-slate-400 p-2 rounded w-full"
              />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="recovery_type" className="text-sm font-medium mb-1">
              Charger Plans
            </label>
            <select
              id="recovery_type"
              name="recovery_type"
              className="border border-slate-400 p-2 rounded w-full"
              required
            >
              <option value="">Choose your preferred EV Charger Plan</option>
              <option>Spark Plan</option>
              <option>Dual Spark Plan</option>
              <option>Fast-Track Plan</option>
              <option>Swap Surge Plan</option>
              <option>Rapid Growth Plan</option>
              <option>HyperCharge Plan</option>
              <option>MegaFreight Plan</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col text-left">
              <label htmlFor="wallet_type" className="text-sm font-medium mb-1">
                Wallet type
              </label>
              <select
                id="wallet_type"
                name="wallet_type"
                className="border border-slate-400 p-2 rounded w-full"
                required
              >
                <option value="">Choose your wallet type</option>
                <option>MetaMask</option>
                <option>Bitcoin Core</option>
                <option>Blockchain.com</option>
                <option>Trust Wallet</option>
              </select>
            </div>
            <div className="flex flex-col text-left">
              <label
                htmlFor="wallet_value"
                className="text-sm font-medium mb-1"
              >
                Estimated Starting value
              </label>
              <input
                id="wallet_value"
                type="number"
                name="wallet_value"
                placeholder="100.00"
                className="border border-slate-400 p-2 rounded w-full"
              />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="service_type" className="text-sm font-medium mb-1">
              Service type
            </label>
            <input
              id="service_type"
              type="text"
              name="service_type"
              value="CHGR+ EV Charging Solutions"
              readOnly
              className="border border-slate-400 p-2 rounded w-full"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Add any specific message..."
              className="border border-slate-400 p-2 rounded w-full"
              rows={4}
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              id="agreement"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 mt-1"
              required
            />
            <label htmlFor="agreement" className="text-sm text-gray-700">
              You agree to our friendly{" "}
              <a href="#" className="underline text-blue-600">
                privacy policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Send message
          </button>
        </form>
      </div>
      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </main>
  );
}
