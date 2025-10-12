import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, User } from "lucide-react";
import { Link } from "react-router-dom"; 

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
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-center gap-90">
        
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold hidden sm:inline-block text-primary">AMAZONAS™</span>
        </Link>

        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/novidades">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Novidades
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem to="/categorias/camisetas" title="Camisetas">
                      As melhores estampas para expressar seu estilo.
                    </ListItem>
                    <ListItem to="/categorias/moletons" title="Moletons">
                      Conforto e aquecimento para os dias mais frios.
                    </ListItem>
                    <ListItem to="/categorias/acessorios" title="Acessórios">
                      Bonés, meias e muito mais para completar seu visual.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/promocoes">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Promoções
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden">
          </Button>
        </div>
      </div>
    </header>
  );
}

export default HeaderMenu;