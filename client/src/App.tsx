// STYLE NOTE: Evi is a single-page personal signal-zine. Keep the public route focused on her TikTok and avoid inventing other accounts.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  const pagesBase = import.meta.env.BASE_URL.replace(/\/$/, "");
  const homePath = pagesBase || "/";
  const homePathWithSlash = pagesBase ? `${pagesBase}/` : "/";

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path={homePath} component={Home} />
      <Route path={homePathWithSlash} component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
