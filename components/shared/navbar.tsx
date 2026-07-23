"use client";

import * as React from "react";
import Link from "next/link";
import {
  LayoutGridIcon,
  LogOutIcon,
  MenuIcon,
  SettingsIcon,
  UserIcon,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavLink = {
  label: string;
  href: string;
};

type MenuItem = {
  label: string;
  icon: LucideIcon;
  href: string;
  destructive?: boolean;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Reports", href: "/reports" },
];

const userMenuItems: MenuItem[] = [
  { label: "Profile", icon: UserIcon, href: "#" },
  { label: "Settings", icon: SettingsIcon, href: "#" },
];

const userMenuFooterItems: MenuItem[] = [
  { label: "Log out", icon: LogOutIcon, href: "#", destructive: true },
];

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-semibold tracking-tight text-foreground"
    >
      <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <LayoutGridIcon className="size-4" />
      </span>
      <span className="text-lg">Prisma Press</span>
    </Link>
  );
}

function UserMenu({ user }: { user: IUser }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          aria-label="Open user menu"
        >
          <Avatar className="size-8 cursor-pointer">
            <AvatarImage
              src={user.data.profile.profilePhoto || "/placeholder.svg"}
              alt=""
            />
            <AvatarFallback>
                      {user.data.name?.slice(0, 1) || "?"}
                    </AvatarFallback>{" "}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-foreground">
            {user.data.name}
          </span>
          <span className="text-xs font-normal text-muted-foreground">
            {user.data.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {userMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <DropdownMenuItem key={item.label}>
                <Icon />
                {item.label}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {userMenuFooterItems.map((item) => {
          const Icon = item.icon;
          return (
            <DropdownMenuItem
              key={item.label}
              variant={item.destructive ? "destructive" : "default"}
            >
              <Icon />
              {item.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type IUser = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    activeStatus: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    profile: {
      id: string;
      profilePhoto: string;
      bio: string;
      userId: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

type NavbarProps = {
  user: IUser;
};

export function Navbar({ user }: NavbarProps) {
  user = user;
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Left: logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        {/* Center: nav links (desktop) */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                  "hover:bg-[#1d786f] hover:text-white cursor-pointer transition-all",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: user menu (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-2 ">
          <div className="hidden md:block ">
            <UserMenu user={user} />
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 gap-0 p-0">
              <SheetHeader className="border-b">
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              {/* Links */}
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <SheetClose key={link.label} asChild>
                    <Link
                      href={link.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <Separator />

              {/* User block */}
              <div className="mt-auto flex flex-col gap-3 p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 cursor-pointer">
                    <AvatarImage
                      className="size-9 cursor-pointer"
                      src={user.data.profile.profilePhoto || "/placeholder.svg"}
                      alt=""
                    />
                    <AvatarFallback>
                      {user.data.name?.slice(0, 1) || "?"}
                    </AvatarFallback>{" "}
                  </Avatar>
                  <div className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-medium text-foreground">
                      {user.data.name}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {user.data.email}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  {[...userMenuItems, ...userMenuFooterItems].map((item) => {
                    const Icon = item.icon;
                    return (
                      <SheetClose key={item.label} asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                            item.destructive &&
                              "text-destructive hover:text-destructive",
                          )}
                        >
                          <Icon className="size-4" />
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
