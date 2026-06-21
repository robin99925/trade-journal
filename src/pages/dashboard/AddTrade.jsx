import { useState } from "react";
import Swal from "sweetalert2";
import DashboardLayout from "../../layouts/DashboardLayout";

import { createTrade } from "../../services/tradeService";

// Step 1
import TradeDetailsForm from "../../components/trades/TradeDetailsForm";
import QuickSelect from "../../components/trades/QuickSelect";
import TradePreview from "../../components/trades/TradePreview";

// Step 2
import PsychologyForm from "../../components/trades/PsychologyForm";
import PsychologyTips from "../../components/trades/PsychologyTips";
import PsychologyQuote from "../../components/trades/PsychologyQuote";

// Step 3
import StrategyForm from "../../components/trades/StrategyForm";
import StrategyChecklist from "../../components/trades/StrategyChecklist";
import StrategyTips from "../../components/trades/StrategyTips";

// Step 4
import ReviewForm from "../../components/trades/ReviewForm";
import ReviewSummary from "../../components/trades/ReviewSummary";
import ReviewChecklist from "../../components/trades/ReviewChecklist";

import Stepper from "../../components/trades/Stepper";

const initialTrade = {
  symbol: "",
  type: "Long",
  date: "",
  time: "",
  entry: "",
  exit: "",
  lots: "",
  lotSize: 0,
};

const initialPsychology = {
  mindset: "",
  emotion: "",
  confidence: 3,
  discipline: "",
  thoughts: "",
  distraction: "",
};

const initialStrategy = {
  setup: "",
  timeframe: "",
  plans: [],
  reason: "",
  entryType: "",
  expectedOutcome: "",
  marketCondition: "",
  exitStrategy: "",
  riskManagement: "",
  tools: [],
};

const initialReview = {
  rating: 3,
  wentWell: "",
  improvement: "",
  learning: "",
  notes: "",
};

const AddTrade = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [trade, setTrade] = useState({ ...initialTrade });
  const [psychology, setPsychology] = useState({ ...initialPsychology });
  const [strategy, setStrategy] = useState({ ...initialStrategy });
  const [review, setReview] = useState({ ...initialReview });

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetForm = () => {
    setTrade({ ...initialTrade });
    setPsychology({ ...initialPsychology });
    setStrategy({ ...initialStrategy });
    setReview({ ...initialReview });
    setCurrentStep(1);
  };

  const validateTrade = () => {
    if (!trade.symbol?.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Symbol required",
        text: "Please select a trading symbol.",
        confirmButtonColor: "#7c3aed",
      });

      setCurrentStep(1);
      return false;
    }

    if (!trade.date) {
      Swal.fire({
        icon: "warning",
        title: "Date required",
        text: "Please select trade date.",
        confirmButtonColor: "#7c3aed",
      });

      setCurrentStep(1);
      return false;
    }

    if (trade.entry === "" || Number(trade.entry) <= 0) {
      Swal.fire({
        icon: "warning",
        title: "Entry price required",
        text: "Please enter a valid entry price.",
        confirmButtonColor: "#7c3aed",
      });

      setCurrentStep(1);
      return false;
    }

    if (trade.exit === "" || Number(trade.exit) <= 0) {
      Swal.fire({
        icon: "warning",
        title: "Exit price required",
        text: "Please enter a valid exit price.",
        confirmButtonColor: "#7c3aed",
      });

      setCurrentStep(1);
      return false;
    }

    if (trade.lots === "" || Number(trade.lots) < 1) {
      Swal.fire({
        icon: "warning",
        title: "Lots required",
        text: "Lots must be at least 1.",
        confirmButtonColor: "#7c3aed",
      });

      setCurrentStep(1);
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (loading) return;

    if (!validateTrade()) return;

    try {
      setLoading(true);

      const tradeDate = trade.time
        ? new Date(`${trade.date}T${trade.time}`).toISOString()
        : new Date(`${trade.date}T00:00:00`).toISOString();

      const payload = {
        symbol: trade.symbol.trim(),
        type: trade.type,
        tradeDate,

        entryPrice: Number(trade.entry),
        exitPrice: Number(trade.exit),
        lots: Number(trade.lots),
        lotSize: Number(trade.lotSize),

        psychology: {
          mindset: psychology.mindset || "",
          emotion: psychology.emotion || "",
          confidence: Number(psychology.confidence || 3),
          discipline: psychology.discipline || "",
          thoughts: psychology.thoughts || "",
          distraction: psychology.distraction || "",
        },

        strategy: {
          setup: strategy.setup || "",
          timeframe: strategy.timeframe || "",
          plans: Array.isArray(strategy.plans) ? strategy.plans : [],
          reason: strategy.reason || "",
          entryType: strategy.entryType || "",
          expectedOutcome: strategy.expectedOutcome || "",
          marketCondition: strategy.marketCondition || "",
          exitStrategy: strategy.exitStrategy || "",
          riskManagement: strategy.riskManagement || "",
          tools: Array.isArray(strategy.tools) ? strategy.tools : [],
        },

        review: {
          rating: Number(review.rating || 3),
          wentWell: review.wentWell || "",
          improvement: review.improvement || "",
          learning: review.learning || "",
          notes: review.notes || "",
        },
      };

      console.log("Create Trade Payload:", payload);

      const response = await createTrade(payload);

      console.log("Create Trade Response:", response);

      if (response?.success) {
        resetForm();

        await Swal.fire({
          icon: "success",
          title: "Trade Saved!",
          text: "Your trade has been added successfully.",
          confirmButtonColor: "#7c3aed",
        });

        return;
      }

      Swal.fire({
        icon: "error",
        title: "Trade not saved",
        text: response?.message || "Something went wrong.",
        confirmButtonColor: "#7c3aed",
      });
    } catch (error) {
      console.error("Create Trade Error:", error);
      console.error("API Error Response:", error?.response?.data);

      const validationErrors = error?.response?.data?.errors;

      let errorMessage = "Something went wrong. Please try again.";

      if (Array.isArray(validationErrors) && validationErrors.length > 0) {
        errorMessage =
          validationErrors[0]?.msg ||
          validationErrors[0]?.message ||
          errorMessage;
      } else if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      }

      Swal.fire({
        icon: "error",
        title: "Unable to save trade",
        text: errorMessage,
        confirmButtonColor: "#7c3aed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Add Trade
            </h1>

            <p className="text-slate-500 mt-2">
              Log your trade in less than 30 seconds
            </p>
          </div>

          <Stepper currentStep={currentStep} />

          {currentStep === 1 && (
            <div className="grid lg:grid-cols-12 gap-6 mt-6">
              <div className="lg:col-span-8">
                <TradeDetailsForm
                  trade={trade}
                  setTrade={setTrade}
                  nextStep={nextStep}
                />
              </div>

              <div className="lg:col-span-4 space-y-6">
                <QuickSelect
                  selected={trade.symbol}
                  setSelected={(symbol) =>
                    setTrade((prev) => ({
                      ...prev,
                      symbol,
                    }))
                  }
                />

                <TradePreview trade={trade} />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid lg:grid-cols-12 gap-6 mt-6">
              <div className="lg:col-span-8">
                <PsychologyForm
                  psychology={psychology}
                  setPsychology={setPsychology}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              </div>

              <div className="lg:col-span-4 space-y-6">
                <PsychologyTips />
                <PsychologyQuote />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid lg:grid-cols-12 gap-6 mt-6">
              <div className="lg:col-span-8">
                <StrategyForm
                  strategy={strategy}
                  setStrategy={setStrategy}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              </div>

              <div className="lg:col-span-4 space-y-6">
                <StrategyChecklist strategy={strategy} />
                <StrategyTips />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="grid lg:grid-cols-12 gap-6 mt-6">
              <div className="lg:col-span-8">
                <ReviewForm
                  review={review}
                  setReview={setReview}
                  prevStep={prevStep}
                  handleSubmit={handleSubmit}
                  loading={loading}
                />
              </div>

              <div className="lg:col-span-4 space-y-6">
                <ReviewSummary trade={trade} />
                <ReviewChecklist />
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddTrade;
