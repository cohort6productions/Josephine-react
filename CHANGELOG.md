Date: 2019-05-01
Branch: master

This version aims to complete pages under `how to start`, providing all the services page that was required to drive sales from customers. Currently the team is researching on the level of difficulity to implement Stripe payment into the website. The current focus of this iteration is to complete the sytle of the entire website and consolidate the contents of the entire site

## Added

## Changed

-   `Testimonial` section spacing

## Need to work on

-   Mailchimp account linkage

---

Date: 2019-04-18
Branch: master

This version aims to complete pages under `how to start`, providing all the services page that was required to drive sales from customers. Currently the team is researching on the level of difficulity to implement Stripe payment into the website. The current focus of this iteration is to complete the sytle of the entire website and consolidate the contents of the entire site

## Added

-   Service page template: `2T-serviceTemplates`
-   Pages scroll to the top when `<Link>` is clicked
-   Images (resized and optimized for web) for all service pages

## Changed

-   Refactored service pages, now using data array to map routes in `defaultRoutes`
-   Resized background images for homepage

## Need to work on

-   Styling of all pages

---

Date: 2019-04-13
Branch: master

This version aims to create a clickable prototype for the final version of the website, also where the "incorporation form" is clickable and workable for testing.
Also, focusing on modulating "Atoms" from Figma design, creating a reusable pattern for future development. Most contents are filled in under the structure, styling is what is missing from the current design.

## Added

-   `CustomButton` under src/components/Atom
-   `CustomButton` now has 4 different instance: `primitive`, `theme`, `affirmative`, and `alertwarning`, reusable at anywhere a button is required
-   component structure referencing Atomic design (check Figma)

## Need to work on

-   Styling of all pages

---

Date: 2019-04-11
Branch: master

This version aims to create a clickable prototype for the final version of the website, also where the "incorporation form" is clickable and workable for testing.

## Added

-   `testimonial` contents
-

## Need to work on

-   Styling: `homepage`, `conference room booking`

---

Date: 2019-04-09
Branch: clickable-demo

This version aims to create a clickable prototype for the final version of the website, also where the "incorporation form" is clickable and workable for testing.

## Added

-   `homepage` contents
-   `conference room booking` contents

## Need to work on

-   Styling: `homepage`, `conference room booking`

---

Date: 2019-04-08
Branch: indi-footer-header

This version is part of the work to make the footer and header independent from pages, making it reusable for all the other pages.

## Added

-   Scss: font, color, spacing cardAndShads

## Changed

-   Isolated the header and footer from the original folder under "Form"

---

Date: 2019-04-05
Branch: add-routes
Dev: Ivan

This version is part of the work to make clicking to other pages work in conjunction with the current incorporation pages. To achieve this, I've added "React-router-dom", which allows the frontend to expand with the capacity of accepting more pages.

## Added

-   React-router-dom
-   Changelog to reflect iterations of changes
-   error page for testing

## Changed

-   branch name from "non_incorporation_pages" to "add-routes"
-   Moved incorporation into a page nested under "DefaultRoutes"

## Removed
