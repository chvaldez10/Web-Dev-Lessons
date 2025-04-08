import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function AiAssistantsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-0"></div>

      {/* Jumbotron content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            AI Assistants
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-gray-500 dark:text-gray-300">
            Discover and interact with our powerful AI assistants designed to
            help you with various tasks and boost your productivity.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" variant="outline" className="rounded-full">
              Learn More
            </Button>
            <Button size="lg" className="rounded-full">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiAssistantsPage;
