import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero, Card, FeatureList } from "@/components/ui-elements"
import { UploadForm } from "@/components/upload-form"
import { Reveal } from "@/components/reveal-animation"

export const metadata: Metadata = {
  title: "File Upload | E PERFORMANCE",
  description: "Upload your original ECU file and vehicle details for a fast, professional tuning file request.",
}

export default function UploadPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Upload"
          title="Send your original file for review"
          description="Fill in the vehicle details and attach your original file. We will review it and get back to you with the next steps."
          breadcrumb="File Upload"
        />

        <section className="py-[72px]">
          <div className="w-[min(calc(100%-2rem),1200px)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <Reveal>
              <Card hover={false}>
                <h3 className="text-[1.25rem] font-semibold mb-4">What to include</h3>
                <FeatureList
                  items={[
                    { text: "Original stock read" },
                    { text: "Vehicle make, model, engine and year" },
                    { text: "Requested service: Stage 1, Stage 2, DSG, Eco or Custom" },
                    { text: "Hardware list and any specific notes" }
                  ]}
                />
              </Card>
            </Reveal>

            <Reveal delay={150}>
              <UploadForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
