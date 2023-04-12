import React from "react";

export default function PrivacyPolicy() {
  const privacyPolicy = {
    // Define the content of the privacy policy here
    // For example:
    title: "Privacy Policy",
    sections: [
      {
        title: "Information we collect",
        content:
          "We collect your name, email address, and other contact information when you create an account. We also collect information about your use of our service and your device and internet connection.",
      },
      {
        title: "How we use your information",
        content:
          "We use your personal information to provide and improve our service, to communicate with you about our service and respond to your inquiries, to analyze and understand how our service is being used, and to comply with legal obligations and enforce our policies.",
      },
      {
        title: "How we share your information",
        content:
          "We share your personal information with service providers who help us provide our service, and with legal authorities and other third parties when required by law or to protect our rights and interests.",
      },
      {
        title: "Security",
        content:
          "We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security measures are foolproof, and we cannot guarantee the security of your information.",
      },
      {
        title: "Your choices",
        content:
          "You can review and update your account information at any time, and you can unsubscribe from our marketing communications at any time.",
      },
      {
        title: "Contact us",
        content:
          "If you have any questions or concerns about our Privacy Policy or how we handle your personal information, please contact us at [contact email address].",
      },
    ],
  };

  return (
    <div className="px-5 py-5 mt-16 mb-1 text-white ">
      <h1 className="text-lg font-extrabold">{privacyPolicy.title}</h1>
      {privacyPolicy.sections.map((section, index) => (
        <div key={index} className="px-3 py-2 mt-2">
          <h2 className="font-bold text-blue-500">{section.title}</h2>
          <p className="px-3 py-2">{section.content}</p>
        </div>
      ))}
    </div>
  );
}
