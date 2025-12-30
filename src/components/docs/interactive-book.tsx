"use client";

import InteractiveBook from "@/components/ui/interactive-book";

export function InteractiveBookDemo() {
    const pages = [
        {
            title: "Chapter 1: The Beginning",
            content: (
                <div className="space-y-4">
                    <p>
                        "The most important characteristics of good design are discoverability and understanding. Discoverability: Is it possible to even figure out what actions are possible?"
                    </p>
                    <p>
                        "Understanding: What does it all mean? How is the product supposed to be used? What do all the different controls and settings mean?"
                    </p>
                </div>
            ),
            pageNumber: 1
        },
        {
            title: "Chapter 2: The Psychology",
            content: (
                <div className="space-y-4">
                    <p>
                        "When people try to use something, they first form a goal, then they plan an action, then they execute the action. Then they perceive what happened, interpret the result, and compare it with the goal."
                    </p>
                    <p>
                        "This is the seven stages of action. It forms the core of human-computer interaction psychology."
                    </p>
                </div>
            ),
            pageNumber: 2
        },
        {
            title: "Chapter 3: Knowledge",
            content: (
                <div className="space-y-4">
                    <p>
                        "Knowledge is in the head and in the world. Precise behavior can emerge from imprecise knowledge for four reasons:"
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Information is in the world</li>
                        <li>Great precision is not required</li>
                        <li>Natural constraints are present</li>
                        <li>Cultural constraints are present</li>
                    </ul>
                </div>
            ),
            pageNumber: 3
        },
        {
            title: "Chapter 4: Constraints",
            content: (
                <div className="space-y-4">
                    <p>
                        "Constraint: specific limits on possible actions. Constraints guide our behavior by limiting the possible options."
                    </p>
                    <p>
                        "Physical constraints rely on the properties of the physical world for their operation. Semantic constraints rely on the meaning of the situation."
                    </p>
                </div>
            ),
            pageNumber: 4
        },
        {
            title: "Chapter 5: Error and Mistake",
            content: (
                <div className="space-y-4">
                    <p>
                        "Human error is defined as any deviance from 'appropriate' behavior. Errors are divided into two categories: slips and mistakes."
                    </p>
                    <p>
                        "A slip occurs when a person intends to do one action and ends up doing something else. A mistake occurs when the wrong goal is established."
                    </p>
                </div>
            ),
            pageNumber: 5
        },
        {
            title: "Conclusion",
            content: (
                <div className="space-y-4 flex flex-col justify-center h-full text-center italic">
                    <p>
                        "Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible."
                    </p>
                    <p className="font-bold mt-4">- Don Norman</p>
                </div>
            ),
            pageNumber: 6
        }
    ];

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center bg-gray-100 dark:bg-neutral-900 border rounded-lg">
            <InteractiveBook
                coverImage="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop"
                bookTitle="The Design of Everyday Things"
                bookAuthor="Don Norman"
                pages={pages}
            />
        </div>
    );
}
