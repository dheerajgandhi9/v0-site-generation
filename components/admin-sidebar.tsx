"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  Search,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard, current: true },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
    current: false,
    badge: "12",
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
    current: false,
    badge: "3",
  },
  { name: "Customers", href: "/admin/customers", icon: Users, current: false },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
    current: false,
  },
  { name: "Settings", href: "/admin/settings", icon: Settings, current: false },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <Link href="/admin" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="text-xl font-bold text-slate-900">EliteStore</span>
        </Link>
      </div>

      <Separator />

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start rounded-xl ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <item.icon className="h-4 w-4 mr-3" />
                <span className="flex-1 text-left">{item.name}</span>
                {item.badge && (
                  <Badge variant="secondary" className="ml-auto">
                    {item.badge}
                  </Badge>
                )}
              </Button>
            </Link>
          );
        })}
      </nav>

      <Separator />

      {/* User Section */}
      <div className="p-4 space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start rounded-xl text-slate-700"
        >
          <Bell className="h-4 w-4 mr-3" />
          Notifications
          <Badge variant="destructive" className="ml-auto">
            5
          </Badge>
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start rounded-xl text-slate-700"
        >
          <Search className="h-4 w-4 mr-3" />
          Search
        </Button>

        <Separator className="my-4" />

        <div className="flex items-center gap-3 p-2">
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-slate-700">A</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-900">Admin User</p>
            <p className="text-xs text-slate-600">admin@elitestore.com</p>
          </div>
        </div>

        <Button
          variant="ghost"
          className="w-full justify-start rounded-xl text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
