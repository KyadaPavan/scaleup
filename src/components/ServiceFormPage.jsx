import { useLocation } from "react-router-dom";
import MultiStepForm from "./MultiStepFrom/MultiStepForm";
import Plan from "./Plan/Plan";
import Info from "./Info/Info";
import Summary from "./Summary/Summary";
import { Spotlight } from "./ui/Spotlight";
const ServiceFormPage = () => {
  const location = useLocation();
  const service = location.state;
  const { title, description, formFields } = service || {};

  const dynamicSteps = [
    {
      title: "About You",
      Component: Info,
    },
    {
      title: "Basic Information",
      Component: (props) => (
        <Plan {...props} formFields={formFields} errors={props.errors} />
      ),
    },

    {
      title: "Review & Submit",
      Component: (props) => <Summary {...props} service={service} />,
    },
  ];

  return (
    <div className="bg-radial">
      <div>
        <Spotlight
          className="h-screen top-8 left-10 md:-left-40 md:-top-20"
          fill="white"
        />
        <Spotlight className="h-screen left-20 -top-8" fill="#7D3DF9" />
      </div>
      <div className="w-full max-w-6xl mx-auto my-10 !mb-20 px-4 sm:px-6 lg:px-8 ">
        <div className="mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FFC979] via-[#F971BA] to-[#E57FFF] bg-clip-text text-transparent ">
            {title || "Service"}
          </h1>
          <p className="mt-2 text-sm text-white sm:text-base">
            {description ||
              "Fill out the form to get your disired service form out Free Suite of services"}
          </p>
        </div>

        <MultiStepForm steps={dynamicSteps} service={service} />
      </div>
    </div>
  );
};

export default ServiceFormPage;
