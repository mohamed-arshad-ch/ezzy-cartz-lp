"use client";
"use strict";
exports.__esModule = true;
exports.SiteHeader = void 0;
var react_1 = require("react");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var framer_motion_1 = require("framer-motion");
var navigation_menu_1 = require("@/components/ui/navigation-menu");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var mobile_menu_1 = require("./mobile-menu");
function SiteHeader() {
    var _a = react_1.useState(false), mobileMenuOpen = _a[0], setMobileMenuOpen = _a[1];
    var pathname = navigation_1.usePathname();
    var isAuthPage = pathname === "/signin" || pathname === "/register";
    var toggleMobileMenu = function () {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (React.createElement(framer_motion_1.motion.header, { initial: { y: -100 }, animate: { y: 0 }, transition: { duration: 0.5 }, className: "fixed px-6 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" },
        React.createElement("div", { className: "container flex h-20 items-center justify-between" },
            React.createElement(link_1["default"], { href: "/", className: "flex items-center space-x-2" },
                React.createElement(framer_motion_1.motion.img, { src: "/logo-fav-main.png", alt: "Ezzy Cartz Logo", width: 80, height: 40, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5 } })),
            React.createElement(navigation_menu_1.NavigationMenu, { className: "hidden md:flex" },
                React.createElement(navigation_menu_1.NavigationMenuList, null,
                    React.createElement(navigation_menu_1.NavigationMenuItem, null,
                        React.createElement(link_1["default"], { href: "/", legacyBehavior: true, passHref: true },
                            React.createElement(navigation_menu_1.NavigationMenuLink, { className: "h-10 px-4 py-2" }, "Home"))),
                    React.createElement(navigation_menu_1.NavigationMenuItem, null,
                        React.createElement(link_1["default"], { href: "/about", legacyBehavior: true, passHref: true },
                            React.createElement(navigation_menu_1.NavigationMenuLink, { className: "h-10 px-4 py-2" }, "About"))),
                    React.createElement(navigation_menu_1.NavigationMenuItem, null,
                        React.createElement(link_1["default"], { href: "/services", legacyBehavior: true, passHref: true },
                            React.createElement(navigation_menu_1.NavigationMenuLink, { className: "h-10 px-4 py-2" }, "Services"))),
                    React.createElement(navigation_menu_1.NavigationMenuItem, null,
                        React.createElement(link_1["default"], { href: "/pricing", legacyBehavior: true, passHref: true },
                            React.createElement(navigation_menu_1.NavigationMenuLink, { className: "h-10 px-4 py-2" }, "Pricing"))))),
            !isAuthPage && (React.createElement("div", { className: "hidden md:flex items-center space-x-4" },
                React.createElement(button_1.Button, { variant: "ghost", size: "sm", asChild: true },
                    React.createElement(link_1["default"], { href: "/signin" }, "Log in")),
                React.createElement(button_1.Button, { size: "sm", asChild: true },
                    React.createElement(link_1["default"], { href: "/register" }, "Get Started")))),
            React.createElement("div", { className: "md:hidden" },
                React.createElement(button_1.Button, { variant: "outline", size: "icon", onClick: toggleMobileMenu },
                    React.createElement(lucide_react_1.Menu, { className: "h-6 w-6" })))),
        React.createElement(mobile_menu_1.MobileMenu, { isOpen: mobileMenuOpen, onClose: toggleMobileMenu })));
}
exports.SiteHeader = SiteHeader;
