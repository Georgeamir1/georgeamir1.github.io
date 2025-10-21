import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Calendar } from 'lucide-react'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'AI Engineer',
    company: 'Ruangguru (Engineering Academy)',
    period: 'Oct 2024 - Present',
    description:
      'Developed an AI chatbot using Google Gemini API to enhance automated customer support and user engagement.',
    achievements: [
      'Increased intent recognition accuracy to 95% by training an NLP model on 10,000+ user intents using custom datasets.',
      'Improved conversational success rates by 30% by implementing dynamic NLU modules to handle multilingual inputs and ambiguous queries.',
      'Reduced user query resolution time by 40% by designing efficient dialogue management algorithms for faster and more coherent responses.',
    ],
  },
  {
    title: 'Project Manager',
    company: 'Ruangguru',
    period: 'January 2024 - December 2024',
    description:
      'Developed an AI-driven learning platform to enhance education through personalized content, real-time analytics, and user engagement tools.',
    achievements: [
      'Delivered project 15% faster by leading a cross-functional team of 10+ through efficient planning, development, and testing.',
      'Increased user engagement by 30% and reduced dropout rates by 20% by integrating an AI recommendation engine and real-time analytics.',
      'Achieved a 40% adoption rate in 3 months by managing stakeholder alignment, marketing strategies, and post-launch user training.',
    ],
  },
  {
    title: 'Product and Project Management',
    company: 'Grab',
    period: 'January 2024 - March 2024',
    description:
      'Optimized the GrabFood promo code experience to improve user satisfaction and conversion rates through UI enhancements and data-driven solutions.',
    achievements: [
      'Increased user satisfaction by 20% by leading product initiatives to address issues like delivery fees, inaccurate menu descriptions, and promo code restrictions.',
      'Reduced customer complaints by 25% by conducting user research and data analysis to implement targeted solutions for price sensitivity and delivery delays.',
      'Boosted promo usage by 15% by enhancing promo code usability with a filtering system for participating restaurants and a promo validation feature.',
    ],
  },
  {
    title: 'Product Manager',
    company: 'E-Commerce Platforms',
    period: '2014 - 2016',
    description:
      'Led the development of the KPR Sales Page feature for an E-Commerce platform, ensuring seamless execution from concept to launch.',
    achievements: [
      'Ensured on-time project delivery by employing product prioritization techniques to define and execute critical milestones.',
      'Created a comprehensive product roadmap, aligning team efforts and facilitating clear communication from ideation to realization.',
      'Enhanced user experience by designing high-fidelity prototypes and a user-centric design flow, incorporating early-stage feedback for optimal functionality.',
    ],
  },
  {
    title: 'Brand and Product Analyst',
    company: 'Nat Nat Cashew Nuts',
    period: '2014 - 2016',
    description:
      "Drove digital marketing strategies for Nat Nat's Cashew Kingdom, enhancing brand visibility and engagement across platforms.",
    achievements: [
      'Increased followers by 59.12% by conducting comprehensive brand and product analysis to optimize marketing strategies.',
      "Boosted engagement by 18.77% by creating targeted content that effectively communicated the brand's value proposition.",
      'Achieved a 923.33% increase in profile visits by leveraging data-driven insights to develop innovative content and marketing solutions.',
    ],
  },
  {
    title: 'Product Development Specialist Manager',
    company: 'Muamalat Bank',
    period: 'June 2023 - October 2024',
    description:
      'Led product development initiatives at Muamalat Bank, driving user acquisition, engagement, and business growth through data-driven strategies.',
    achievements: [
      'Increased user acquisition by 30% by conducting in-depth research and utilizing the RICE framework to prioritize and implement impactful product initiatives.',
      'Improved user engagement by 20% by developing and optimizing a Referral System, which contributed to a 25% increase in referrals.',
      'Achieved a 15% increase in conversions by collaborating with cross-functional teams to refine the referral system and continuously monitor performance.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through diverse roles and industries, shaping products and experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 border-4 border-white dark:border-gray-900 z-10" />

                {/* Content */}
                <div className="md:w-1/2">
                  <Card className="h-full border-none shadow-lg">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">
                            {experience.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.company}</span>
                            <span>•</span>
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {experience.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {experience.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mt-2" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
