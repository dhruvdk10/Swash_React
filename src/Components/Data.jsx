import React from "react";
import {
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";


// Home Page Data
export const banner = [
  { img: "https://images.unsplash.com/photo-1695050049047-54e27a908898?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2073D", alt: "Banner 1" },
  { img: "https://images.unsplash.com/photo-1624492235740-c283aab78e45?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070", alt: "Banner 2" },
  { img: "https://images.unsplash.com/photo-1644613537735-a0226e8f865d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070", alt: "Banner 3" }

];


export const contactInfo = [
  {
    id: 1,
    icon: faLocationDot,
    iconSize: "45px",
    link: "#",
    text: "271, xx, xx, xx, New Delhi, India",
  },
  {
    id: 2,
    icon: faWhatsapp,
    iconSize: "40px",
    link: ".", // replace with actual WhatsApp link
    text: "+91 xxxxxxxx | xxxxxxxxxx",
  },
  {
    id: 3,
    icon: faEnvelope,
    iconSize: "35px",
    link: "mailto:swashjwellers@gmail.com",
    text: "swashjwellers@gmail.com",
  },
  {
    id: 4,
    icon: faInstagram,
    iconSize: "35px",
    link: "#", // replace with actual Insta link
    text: "@swashjwellers",
  },
  {
    id: 5,
    icon: faFacebookF,
    iconSize: "35px",
    link: "#", // replace with actual FB link
    text: "swashjwellers",
  },
];


export const categories = [
  { name: "Rings", img: "ring_icon.png" },
  { name: "Earrings", img: "earrings_icon.png" },
  { name: "Bracelets & Bangles", img: "bracelet_icon.png" },
  { name: "Wedding Jewellery", img: "wedding jwellery_icon.png" },
  { name: "Plated Jewellery", img: "mangalsutra_icon.png" },
  // { name: "Necklaces & Pendants", img: "necklace_icon.png" },
  { name: "Gifting", img: "gift_icon.png" },
];

export const products = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    name: "Crystal Stud Earrings",
    price: 399,
    oldPrice: 1299,
    material: "Sterling Silver",
    gemstone: "Freshwater Pearl"

  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1751429108950-cadfb7d034eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900",
    name: "Diamond Solitaire Engagement Ring",
    price: 399,
    oldPrice: 1299,
    material: "18K Gold",
    gemstone: "Diamond"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1708390250220-803af1100d31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900",
    name: "Pearl Drop Pendant Necklace",
    price: 399,
    oldPrice: 1299,
    material: "White Gold Plated",
    gemstone: "Cubic Zirconia"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1708390072106-1bc30ad12120?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900g",
    name: "Rose Gold Chain Bracelet",
    price: 399,
    oldPrice: 1299,
    material: "Rose Gold Plated",
    gemstone: "Gold"
  },
];
