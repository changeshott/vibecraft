const { Project } = require("ts-morph");

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const sourceFile = project.getSourceFileOrThrow("src/components/landing/client-components.tsx");

// Definition of what goes where
const sections = [
  { name: "HeroSection", file: "hero-section.tsx", helpers: ["IDESimulator"] },
  { name: "ProblemSection", file: "problem-section.tsx", helpers: [] },
  { name: "HowItWorksSection", file: "how-it-works-section.tsx", helpers: [] },
  { name: "ResultShowcaseSection", file: "result-showcase-section.tsx", helpers: [] },
  { name: "VibeShowcaseSection", file: "vibe-showcase-section.tsx", helpers: [] },
  { name: "FeaturesSection", file: "features-section.tsx", helpers: [] },
  { name: "PricingSection", file: "pricing-section.tsx", helpers: ["PricingCard", "PricingCardProps"] },
  { name: "TestimonialSection", file: "testimonial-section.tsx", helpers: [] },
  { name: "FAQSection", file: "faq-section.tsx", helpers: [] },
  { name: "CTASection", file: "cta-section.tsx", helpers: [] },
  { name: "FreeSampleSection", file: "free-sample-section.tsx", helpers: [] },
];

const indexFile = project.createSourceFile("src/components/landing/index.ts", "", { overwrite: true });

// Copy imports
const importDecls = sourceFile.getImportDeclarations().map(d => d.getText()).join("\n");

for (const section of sections) {
  const newFilePath = `src/components/landing/${section.file}`;
  const newFile = project.createSourceFile(newFilePath, "", { overwrite: true });
  
  newFile.addStatements(`"use client";\n\n${importDecls}\n\n`);

  for (const helper of section.helpers) {
    const fn = sourceFile.getFunction(helper);
    if (fn) {
      newFile.addStatements(fn.getText() + "\n\n");
      continue;
    }
    const intf = sourceFile.getInterface(helper);
    if (intf) {
      newFile.addStatements(intf.getText() + "\n\n");
      continue;
    }
  }

  const mainFn = sourceFile.getFunction(section.name);
  if (mainFn) {
    newFile.addStatements(mainFn.getText() + "\n\n");
  }

  indexFile.addExportDeclaration({
    moduleSpecifier: `./${section.file.replace(".tsx", "")}`,
    namedExports: [section.name]
  });
}

project.saveSync();
console.log("Splitting complete!");
