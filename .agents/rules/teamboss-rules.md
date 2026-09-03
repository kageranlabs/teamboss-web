# TEAM BOSS WORKSPACE RULES
Project-Specific Guidelines for the Team Boss CBO Platform

## 1. Project Context & Audience
*   **Organization:** Team Boss is a youth-led Community Based Organization (CBO) operating in Nyeri, Kenya.
*   **Mission:** Restoring hope, promoting dignity, and empowering vulnerable community members (orphans, elderly, hospital patients, street families, and persons with disabilities).
*   **Target Audience:** International and local donors (corporate and individual), prospective volunteers, and community stakeholders.
*   **Tone:** Professional, trustworthy, compassionate, and highly credible. The site must look like a secure, established institution to attract high-ticket grants and CSR funds.

## 2. Brand Design System
Do not guess colors or fonts. Strictly adhere to these CSS variables established in `tailwind.config.ts` and `globals.css`.

**Color Palette:**
*   `brand-navy`: `#083A7A` (Primary brand color, used for text, dark backgrounds, and structural elements)
*   `brand-yellow`: `#F3A516` (Primary accent, used for primary Call-to-Action buttons like "Donate", and highlights)
*   `brand-lightblue`: `#039DCA` (Secondary accent, used for hover states, subtle backgrounds, and secondary icons)
*   `text-muted`: Use standard Tailwind slate/gray scales for secondary readable text.

**Typography:**
*   **Headings:** Poppins (`var(--font-poppins)`). Used for all `h1` through `h6` tags. Must convey strength and modern professionalism.
*   **Body Text:** Inter (`var(--font-inter)`). Global default for all paragraph text, standard links, and UI elements.

## 3. Development Philosophy (Design for Infinite Scale)
*   **Scope is Fluid:** The architecture must not be rigid. The organization will grow, and the platform will expand. 
*   **Modular Construction:** Build generic, highly reusable UI components (e.g., standard `<Card>`, `<SectionHeader>`, `<Hero>`) rather than hardcoding page-specific layouts. 
*   **Dynamic Readiness:** When building data-heavy sections (like impact stories or leadership profiles), structure the UI so it can easily be swapped from static arrays to dynamic Supabase database fetches in the future.
*   **Backend Anticipation:** All structural decisions must keep the future admin dashboard in mind. Public forms (contact, volunteer sign-up) should be built with clear state management, ready to be wired to Supabase tables.

## 4. Integration Guidelines
*   **Payments:** The primary local donation gateway will be Safaricom M-Pesa (Daraja API). Design donation flows to accommodate phone number inputs and STK push instructions.
*   **Assets:** Always check the `/public` directory for brand assets (logos, seals) before using generic placeholders.
