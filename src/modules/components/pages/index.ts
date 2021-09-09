/**
 * Pages
 * ---
 *
 * This directory contains module Pages.
 * A page is primary construct (a scaffold) onto which
 * other components and helpers are placed.
 *
 * Pages are directly linked with Router. Essentially,
 * each module or subModule can have it's own page and
 * own unique url route.
 *
 * At least 1 page is mandatory since that will act as
 * landing or primary page for the module. This page
 * should be called `MainPage.tsx`.
 *
 * 1 page is added as a sample. It can be edited or
 * replaced as per requirement.
 */

export { MainPage } from "./MainPage";
export const components = [
  "Accordion",
  "Breadcrumb",
  "Button",
  "Card",
  "Editor",
  "Form",
  "Form1",
  "Form2",
  "GraphiQL",
  "Menu",

  "Skeleton",
  "SummaryView",
  "TextField",
  "Table",
  "Tabs",
  "Tags",
];
