import Landing from "./pages/landing/Landing";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";

export const routes = [
    {
        path: '/',
        component: Landing,
        exact: true,
    },
    {
        path: '/pricing',
        component: Pricing
    },
    {
        path: '/features',
        component: Features
    }
  ]