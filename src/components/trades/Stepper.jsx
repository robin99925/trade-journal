const steps = [
  {
    id: 1,
    title: "Trade Details",
    subtitle: "Basic info",
  },
  {
    id: 2,
    title: "Psychology",
    subtitle: "Mindset & emotions",
  },
  {
    id: 3,
    title: "Strategy",
    subtitle: "Setup & plan",
  },
  {
    id: 4,
    title: "Review",
    subtitle: "Reflection",
  },
];

const Stepper = ({ currentStep }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-6">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold
                ${
                  currentStep >= step.id
                    ? "bg-violet-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {step.id}
              </div>

              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">{step.title}</h3>

                <p className="text-sm text-gray-500">{step.subtitle}</p>
              </div>
            </div>

            {index !== steps.length - 1 && (
              <div className="hidden lg:block flex-1 h-[2px] bg-gray-200 mx-6"></div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-600 transition-all duration-300"
          style={{
            width: `${(currentStep / 4) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Stepper;
