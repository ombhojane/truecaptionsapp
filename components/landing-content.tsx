"use client";

// Import necessary components from your UI library
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Text Validator",
    description: "Input texts and check if they are true or not.",
  },
  {
    title: "Image Insights",
    description: "Input an image, and we generate image captions and search about the image over the internet.",
  },
  {
    title: "Content Analyzer",
    description: "Analyze the content of articles and documents to ensure accuracy and credibility.",
  },
  {
    title: "Social Media Fact-Checker",
    description: "Validate information shared on social media platforms, preventing the spread of misinformation.",
  },
  // Add more features as needed
];


export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{feature.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {feature.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
