
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

// Social Icons
import FacebookIcon from "../public/footer/Facebook.png";
import InstagramIcon from "../public/footer/Instagram.png";
import LinkedinIcon from "../public/footer/Linkedin.png";
import YoutubeIcon from "../public/footer/Youtube.png";

// Other Assets
import DoorImage from "../public/footer/DoorIcon.svg";
import FooterBg from "../public/footer/bg.png";
import Logo from "../public/Nuvaro_homes.png";
import LocationIcon from "../public/footer/location_9068765 2.svg";
import CallIcon from "../public/footer/call.png";
import EmailIcon from "../public/footer/email.svg";

const Footer = () => {
    return (
        <footer className="relative bg-[#112240] text-white overflow-hidden text-sm xl:text-base">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <Image
                    src={FooterBg}
                    alt="Background Pattern"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-8">

                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700/50 pb-16 mb-16 relative">
                    <div className="w-full md:w-1/2 flex flex-col items-start gap-8 mb-10 md:mb-0">
                        <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-white mb-4">
                            Ready to Transform <br /> Your Space?
                        </h2>
                        <Link
                            href="/quote"
                            className="group inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-400 hover:border-white transition-colors duration-300 text-lg"
                        >
                            Get a Quote
                            <MoveUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-end relative h-[250px] md:h-[350px] lg:h-[400px]">
                        <Image
                            src={DoorImage}
                            alt="Sliding Door Frame"
                            className="object-contain object-right h-full w-auto"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

                    <div className="lg:col-span-4 flex flex-col gap-6 pr-0 lg:pr-8">
                        <div className="w-48">
                            <Image src={Logo} alt="Nuvaro" className="w-full h-auto brightness-0 invert" />
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm max-w-sm">
                            Precision in doors and windows. From premium distribution today to
                            branded manufacturing tomorrow.
                        </p>

                        <div className="flex items-center gap-4 mt-4">
                            {[
                                { icon: InstagramIcon, href: "#" },
                                { icon: LinkedinIcon, href: "#" },
                                { icon: FacebookIcon, href: "#" },
                                { icon: YoutubeIcon, href: "#" },
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gray-600 flex items-center justify-center transition-colors"
                                >
                                    <Image src={social.icon} alt="social" className="w-5 h-5 object-contain opacity-80" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-6">Company</h3>
                        <ul className="flex flex-col gap-4 text-gray-300 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Projects</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-6">Products</h3>
                        <ul className="flex flex-col gap-4 text-gray-300 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Bi-Fold</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Casement</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Sliding Systems</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Façade</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-6">Resources</h3>
                        <ul className="flex flex-col gap-4 text-gray-300 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Blog / Insights</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Download Brochure</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Media</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 flex flex-col gap-6 text-right lg:text-right items-start lg:items-end">
                        <div className="flex flex-col lg:items-end gap-1">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <span>NUVARO</span>
                                <Image src={LocationIcon} alt="location" className="w-5 h-5" />
                            </div>
                            <p className="text-gray-300 text-sm lg:text-right">
                                Experience Centre — Kannur <br />
                                Thalassery Road, Thottada, <br />
                                Kannur, Kerala 670007
                            </p>
                        </div>

                        <div className="flex flex-col lg:items-end gap-4 mt-2">
                            <div className="flex items-center gap-3 justify-end">
                                <span className="font-semibold text-white">+91 9037 259393</span>
                                <Image src={CallIcon} alt="phone" className="w-5 h-5 bg-white rounded-full p-0.5" />
                            </div>
                            <div className="flex items-center gap-3 justify-end">
                                <span className="font-semibold text-white">info@nuvaro.com</span>
                                <Image src={EmailIcon} alt="email" className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <Link
                                href="/locations"
                                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 hover:border-white transition-colors duration-300 text-sm"
                            >
                                View all Locations
                                <MoveUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© 2025 NUVARO. All Rights Reserved. Powered by Onbyz</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;