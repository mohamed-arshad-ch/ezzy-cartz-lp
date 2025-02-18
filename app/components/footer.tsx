import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import { FaXTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa6"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex lg:px-24 px-4 flex-col gap-10 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Logo and Contact Column */}
          <div className="flex flex-col gap-6 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-fav-main.png" alt="Quinx Logo" width={120} height={40} />
            </Link>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>123 Business Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: contact@quinx.com</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <FaXTwitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <FaGithub size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <FaDiscord size={20} />
              </Link>
            </div>
          </div>

          {/* Product Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Changelog
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Documentation
            </Link>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Careers
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Licenses
            </Link>
          </div>
        </div>

        <Separator />
        
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Quinx. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

