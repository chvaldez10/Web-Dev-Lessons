"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { aiAssistantsList } from "@/services/AiAssistantsList";
import { Checkbox } from "@/components/ui/checkbox";

export type Assistant = {
  id: number;
  name: string;
  title: string;
  image: string;
  instruction: string;
  userInstruction: string;
  sampleQuestions: string[];
};

function AiAssistantsPage() {
  const [selectedAssistants, setSelectedAssistants] = useState<Assistant[]>([]);

  const toggleAssistant = (assistant: Assistant) => {
    setSelectedAssistants((prev) =>
      prev.includes(assistant)
        ? prev.filter((assistantId) => assistantId !== assistant)
        : [...prev, assistant]
    );
    console.log(`selectedAssistants: ${JSON.stringify(selectedAssistants)}`);
  };

  return (
    <>
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

      {/* AI Assistants List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Available Assistants
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {aiAssistantsList.map((assistant) => (
            <div
              key={assistant.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                    {assistant.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {assistant.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {assistant.title}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {assistant.instruction}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`assistant-${assistant.id}`}
                      checked={selectedAssistants.includes(assistant)}
                      onCheckedChange={() => toggleAssistant(assistant)}
                    />
                    <label
                      htmlFor={`assistant-${assistant.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Select
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AiAssistantsPage;
