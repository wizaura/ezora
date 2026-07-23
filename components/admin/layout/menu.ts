import {
  LayoutDashboard,
  CarFront,
  MapPinned,
  Newspaper,
  Mail,
  Settings,
  Image,
  Package,
} from "lucide-react";

export const adminMenu = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Fleet",
    href: "/admin/fleet",
    icon: CarFront,
  },
  {
    title: "Tour Packages",
    href: "/admin/packages",
    icon: Package,
  },
  {
    title: "Rental Services",
    href: "/admin/rental-services",
    icon: CarFront,
  },
  {
    title: "Kerala Tourism",
    href: "/admin/tourism",
    icon: MapPinned,
  },
  {
    title: "Blogs",
    href: "/admin/blogs",
    icon: Newspaper,
  },
  {
    title: "Enquiries",
    href: "/admin/enquiries",
    icon: Mail,
  },
  {
    title: "Media",
    href: "/admin/media",
    icon: Image,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];