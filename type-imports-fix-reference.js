// This is a script to fix all type-only imports
// Run via terminal or manually apply changes based on output

const filesToFix = [
    // Trainers
    { file: "src/components/sections/trainers/Trainers.tsx", line: 2, from: "import { TrainersProps } from './TrainersTypes';", to: "import type { TrainersProps } from './TrainersTypes';" },
    { file: "src/components/sections/trainers/TrainerCard.tsx", line: 2, from: "import { TrainerCardProps } from './TrainersTypes';", to: "import type { TrainerCardProps } from './TrainersTypes';" },

    // Schedule
    { file: "src/components/sections/schedule/DaySelector.tsx", line: 1, from: "import { DaySelectorProps } from './ScheduleTypes';", to: "import type { DaySelectorProps } from './ScheduleTypes';" },
    { file: "src/components/sections/schedule/Schedule.tsx", line: 3, from: "import { ScheduleProps } from './ScheduleTypes';", to: "import type { ScheduleProps } from './ScheduleTypes';" },
    { file: "src/components/sections/schedule/ClassCard.tsx", line: 2, from: "import { ClassCardProps } from './ScheduleTypes';", to: "import type { ClassCardProps } from './ScheduleTypes';" },

    // Testimonials
    { file: "src/components/sections/testimonials/TestimonialCard.tsx", line: 2, from: "import { TestimonialCardProps } from './TestimonialsTypes';", to: "import type { TestimonialCardProps } from './TestimonialsTypes';" },
    { file: "src/components/sections/testimonials/Testimonials.tsx", line: 1, from: "import { TestimonialsProps } from './TestimonialsTypes';", to: "import type { TestimonialsProps } from './TestimonialsTypes';" },

    // Programs
    { file: "src/components/sections/programs/ProgramCard.tsx", line: 1, from: "import { ProgramCardProps } from './ProgramsTypes';", to: "import type { ProgramCardProps } from './ProgramsTypes';" },

    // Hero
    { file: "src/components/sections/hero/ScrollIndicator.tsx", line: 1, from: "import { ScrollIndicatorProps } from './HeroTypes';", to: "import type { ScrollIndicatorProps } from './HeroTypes';" },
    { file: "src/components/sections/hero/Hero.tsx", line: 1, from: "import { HeroProps } from './HeroTypes';", to: "import type { HeroProps } from './HeroTypes';" },
    { file: "src/components/sections/hero/CTAButtons.tsx", line: 2, from: "import { CTAButtonsProps } from './HeroTypes';", to: "import type { CTAButtonsProps } from './HeroTypes';" },

    // Contact
    { file: "src/components/sections/contact/SocialLinks.tsx", line: 2, from: "import { SocialLinksProps } from './ContactTypes';", to: "import type { SocialLinksProps } from './ContactTypes';" },
    { file: "src/components/sections/contact/SignupForm.tsx", line: 1, from: "import { SignupFormProps } from './ContactTypes';", to: "import type { SignupFormProps } from './ContactTypes';" },
    { file: "src/components/sections/contact/ContactInfoItem.tsx", line: 1, from: "import { ContactInfoItemProps } from './ContactTypes';", to: "import type { ContactInfoItemProps } from './ContactTypes';" },
    { file: "src/components/sections/contact/Contact.tsx", line: 1, from: "import { ContactProps } from './ContactTypes';", to: "import type { ContactProps } from './ContactTypes';" },
];

console.log("Files needing type import fixes:");
filesToFix.forEach(({ file }) => console.log(file));
