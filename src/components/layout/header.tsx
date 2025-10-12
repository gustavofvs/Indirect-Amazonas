import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; 
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type ListItemProps = {
  to: string;
  title: string;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<typeof Link>;

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  ListItemProps
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground${className ? ` ${className}` : ""}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold hidden sm:inline-block text-ring">AMAZONAS™</span>
        </Link>

        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/gallery">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Animais Fofinhos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/motivacao">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Motivação Real
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <Avatar className="cursor-target">
            <AvatarFallback className="text-[12px]">AM</AvatarFallback>
          </Avatar>
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden cursor-target">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
                  Home
                </Link>
                <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-lg">
                  Animais Fofinhos
                </Link>
                <Link to="/motivacao" onClick={() => setIsOpen(false)} className="text-lg">
                  Motivação Real
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default HeaderMenu;