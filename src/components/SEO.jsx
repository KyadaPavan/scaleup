import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>ScaleUp by TrustoPay</title>

      <meta
        name="description"
        content="A well-defined Scope of Work (SOW) ensures clarity, smooth execution, and successful project outcomes. Set clear expectations, define deliverables, and stay on track. "
      />

      <meta
        name="keywords"
        content="Scope of Work template, Free SOW document, Project scope template, IT project SOW sample, Freelancer contract template, SOW format for IT projects, Website development SOW, Software development Scope of Work, Business proposal template, Digital marketing Scope of Work, Writing a Scope of Work, Free project documentation template, IT project roadmap template, Web development proposal template, SEO service agreement template, Mobile app development Scope of Work, Free contract templates for freelancers, Project deliverables document sample, How to define project scope effectively, IT project timeline and milestones template, How to write a Scope of Work for IT projects, Free Scope of Work template for freelancers, Best SOW format for web development projects, IT project contract and scope document, Download free SOW template for agencies, How to structure a Scope of Work for clients, Sample SOW for digital marketing services, Best contract templates for software developers, Free project proposal template for IT businesses, How to create a project timeline and budget breakdown"
      />

      <meta name="author" content="Scope of Work" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta
        property="og:title"
        content="ScaleUp by TrustoPay – Set Clear Expectations & Ensure Project Success"
      />
      <meta
        property="og:description"
        content="A well-defined Scope of Work (SOW) ensures clarity, smooth execution, and successful project outcomes. Set clear expectations, define deliverables, and stay on track. "
      />
      <meta property="og:image" content="/icon.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sow.trustopay.com/" />

      <link rel="canonical" href="https://sow.trustopay.com/" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content=" – Set Clear Expectations & Ensure Project Success"
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="twitter:description"
        content="A well-defined Scope of Work (SOW) ensures clarity, smooth execution, and successful project outcomes. Set clear expectations, define deliverables, and stay on track. "
      />
      <meta name="twitter:image" content="/icon.png" />
    </Helmet>
  );
}
