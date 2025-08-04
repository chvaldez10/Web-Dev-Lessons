import React from "react";
import { CompanionCard, CompanionsList, CTA } from "@/components";
import { getCompanionsBySubject } from "@/constants/mockCompanions";

const Page = () => {
  const codingCompanions = getCompanionsBySubject("coding");

  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        {codingCompanions.map((companion) => (
          <CompanionCard key={companion.id} {...companion} />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
