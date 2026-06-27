"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is VBox?",
        answer:
            "VBox is a browser-based workspace platform that launches isolated Linux desktops and applications inside Docker containers. No installation is required.",
    },
    {
        question: "How long does it take to launch a workspace?",
        answer:
            "Most workspaces are available within a few seconds depending on the selected image and server load.",
    },
    {
        question: "Are my workspaces isolated?",
        answer:
            "Yes. Every session runs inside its own isolated Docker container, ensuring complete separation from other users.",
    },
    {
        question: "Do I need to install anything?",
        answer:
            "No. Everything runs directly inside your browser. Simply launch a workspace and start working.",
    },
    {
        question: "Can I choose different operating systems?",
        answer:
            "Yes. VBox supports multiple Linux distributions and browser-based environments. More templates will be added over time.",
    },
    {
        question: "How is VBox different from a virtual machine?",
        answer:
            "VBox provisions lightweight containerized environments that start much faster and consume fewer resources than traditional virtual machines.",
    },
];

export function FAQSection() {
    return (
        <section className="w-full px-6 py-24 md:px-12 lg:px-16">

            <div className="mx-auto max-w-4xl">

                <div className="mb-14 text-center">

                    <h2 className="text-4xl font-bold tracking-tight text-white">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-4 text-zinc-400">
                        Everything you need to know about launching and using VBox.
                    </p>

                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-md
                px-6
              "
                        >
                            <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent className="pb-5 text-zinc-400 leading-7">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>

        </section>
    );
}