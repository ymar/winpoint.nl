import { 
  BarChart3, RotateCw, Swords, FileText, Users2, Shield, AlertTriangle, Eye, MessageSquare, Clock,
  Target, Calendar, Clipboard, Search, Users,
  TrendingUp, DollarSign, Zap, RefreshCw,
  UserPlus, Award, BookOpen, Settings,
  LucideIcon
} from "lucide-react"

export interface UseCase {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  outcome: string
}

export interface Problem {
  title: string
  description: string
  icon: LucideIcon
}

export interface StageOverview {
  headline: string
  description: string
  mentalState: string
  challenge: string
  callout?: {
    type: 'warning' | 'info'
    title: string
    description: string
    icon: LucideIcon
  }
}

export interface Navigation {
  prev?: {
    title: string
    slug: string
  }
  next?: {
    title: string
    slug: string
  }
}

export interface StageData {
  title: string
  subtitle: string
  description: string
  overview: StageOverview
  problems: Problem[]
  useCases: UseCase[]
  navigation: Navigation
}

export const stageData: Record<string, StageData> = {
  awareness: {
    title: "Awareness",
    subtitle: "Generate initial brand awareness and recognition",
    description: "Getting on their radar",
    overview: {
      headline: "Build Initial Brand Recognition",
      description: "Generate awareness and establish your presence in the market when prospects are just beginning to recognize their problems.",
      mentalState: "Your prospects are just starting to realize they have a problem or opportunity. They're not actively searching for solutions yet, but they're beginning to pay attention to information that relates to their challenges.",
      challenge: "The key is to be present and helpful during these early moments of awareness without being pushy or sales-focused."
    },
    problems: [
      {
        title: "Low Brand Visibility",
        description: "Prospects don't know you exist or what you do",
        icon: Eye
      },
      {
        title: "Generic Messaging",
        description: "Your content doesn't resonate with specific audience segments",
        icon: MessageSquare
      },
      {
        title: "Inconsistent Presence",
        description: "Sporadic content creation and social media activity",
        icon: Clock
      }
    ],
    useCases: [
      {
        title: "Content Marketing Strategy",
        description: "Create valuable, educational content that attracts your ideal prospects during their research phase.",
        icon: FileText,
        features: [
          "Blog posts addressing common industry challenges",
          "Whitepapers and research reports for thought leadership",
          "Video content explaining complex concepts simply",
          "Podcast appearances and guest content opportunities"
        ],
        outcome: "Establish thought leadership and attract qualified prospects organically"
      },
      {
        title: "Social Media Automation",
        description: "Maintain consistent presence across social platforms with automated posting and engagement.",
        icon: Users,
        features: [
          "Automated LinkedIn content distribution",
          "Social listening for engagement opportunities",
          "Employee advocacy program automation",
          "Social proof collection and amplification"
        ],
        outcome: "Increase brand visibility and social proof without manual effort"
      }
    ],
    navigation: {
      next: {
        title: "Education",
        slug: "education"
      }
    }
  },
  
  education: {
    title: "Education",
    subtitle: "Help prospects understand their problem and potential solutions",
    description: "Building understanding",
    overview: {
      headline: "Educate and Build Trust",
      description: "Help prospects understand their problems more deeply and introduce them to potential solutions without being pushy.",
      mentalState: "Your prospects now recognize they have a challenge and are actively seeking to understand it better. They're consuming educational content and trying to learn from experts in the space.",
      challenge: "You need to provide genuine value and education while subtly positioning your expertise and solution approach."
    },
    problems: [
      {
        title: "Information Overload",
        description: "Too much generic advice without specific, actionable insights",
        icon: AlertTriangle
      },
      {
        title: "Trust Deficit",
        description: "Prospects are skeptical of vendor-created educational content",
        icon: Shield
      },
      {
        title: "Wrong Timing",
        description: "Presenting solutions before prospects understand the problem",
        icon: Clock
      }
    ],
    useCases: [
      {
        title: "Educational Email Sequences",
        description: "Multi-part email courses that educate prospects about their challenges and potential solutions.",
        icon: BookOpen,
        features: [
          "Problem-focused email series with actionable insights",
          "Industry benchmarking and assessment tools",
          "Educational webinars with follow-up materials",
          "Case study series showing problem-to-solution journeys"
        ],
        outcome: "Build trust and establish expertise while nurturing prospects toward purchase readiness"
      },
      {
        title: "Interactive Learning Tools",
        description: "Calculators, assessments, and tools that help prospects understand their situation better.",
        icon: Settings,
        features: [
          "ROI calculators and cost-benefit analysis tools",
          "Maturity assessments and benchmarking surveys",
          "Interactive decision trees and recommendation engines",
          "Problem identification questionnaires"
        ],
        outcome: "Increase engagement and capture valuable qualification data during education"
      }
    ],
    navigation: {
      prev: {
        title: "Awareness",
        slug: "awareness"
      },
      next: {
        title: "Selection",
        slug: "selection"
      }
    }
  },

  selection: {
    title: "Selection",
    subtitle: "Guide prospects through solution evaluation and comparison",
    description: "Evaluating options",
    overview: {
      headline: "Guide the Evaluation Process",
      description: "Help prospects navigate their options and make informed decisions while positioning your solution favorably.",
      mentalState: "Your prospects are actively evaluating different solutions and vendors. They're comparing features, prices, and approaches while trying to build internal consensus around the best path forward.",
      challenge: "You need to provide helpful comparison information while subtly highlighting your unique advantages without appearing biased."
    },
    problems: [
      {
        title: "Analysis Paralysis",
        description: "Too many options leading to delayed decisions",
        icon: Target
      },
      {
        title: "Biased Comparisons",
        description: "Prospects struggle to find objective vendor comparisons",
        icon: BarChart3
      },
      {
        title: "Feature Fixation",
        description: "Focus on features rather than business outcomes",
        icon: Clipboard
      }
    ],
    useCases: [
      {
        title: "Comparison Resources",
        description: "Objective comparison content that helps prospects evaluate options while highlighting your strengths.",
        icon: BarChart3,
        features: [
          "Vendor comparison matrices with objective criteria",
          "Buyer's guide with evaluation frameworks",
          "Feature-to-outcome mapping documents",
          "Total cost of ownership calculators"
        ],
        outcome: "Position your solution favorably while helping prospects make informed decisions"
      },
      {
        title: "Evaluation Support Automation",
        description: "Automated workflows that guide prospects through structured evaluation processes.",
        icon: Clipboard,
        features: [
          "RFP response automation and templates",
          "Demo scheduling and preparation workflows",
          "Reference customer connection automation",
          "Proof of concept planning and execution guides"
        ],
        outcome: "Streamline the sales process and improve win rates through better evaluation support"
      }
    ],
    navigation: {
      prev: {
        title: "Education",
        slug: "education"
      },
      next: {
        title: "Onboarding",
        slug: "onboarding"
      }
    }
  },

  onboarding: {
    title: "Onboarding",
    subtitle: "Ensure successful customer onboarding and early wins",
    description: "Getting started",
    overview: {
      headline: "Deliver Early Success",
      description: "Ensure new customers get value quickly and build momentum for long-term success.",
      mentalState: "Your new customers are excited but also anxious about getting started. They want to see value quickly and prove to themselves (and others) that they made the right decision.",
      challenge: "You need to deliver quick wins while also setting the foundation for long-term success and adoption."
    },
    problems: [
      {
        title: "Slow Time-to-Value",
        description: "Customers don't see results quickly enough after purchase",
        icon: Clock
      },
      {
        title: "Implementation Confusion",
        description: "Unclear processes leading to delayed or failed implementations",
        icon: AlertTriangle
      },
      {
        title: "Resource Constraints",
        description: "Customers lack time or expertise to implement properly",
        icon: Users
      }
    ],
    useCases: [
      {
        title: "Welcome Automation",
        description: "Comprehensive onboarding sequences that guide new customers through initial setup and early wins.",
        icon: UserPlus,
        features: [
          "Progressive welcome email sequences with clear next steps",
          "Implementation milestone tracking and celebration",
          "Resource delivery based on customer profile and needs",
          "Early warning systems for onboarding delays"
        ],
        outcome: "Reduce time-to-value and increase customer satisfaction during critical early period"
      },
      {
        title: "Success Milestone Tracking",
        description: "Automated systems to track and celebrate customer success milestones during onboarding.",
        icon: Award,
        features: [
          "Milestone-based communication triggers",
          "Success metric dashboard and reporting",
          "Escalation workflows for at-risk implementations",
          "Success story collection and sharing automation"
        ],
        outcome: "Increase implementation success rates and build positive momentum"
      }
    ],
    navigation: {
      prev: {
        title: "Selection",
        slug: "selection"
      },
      next: {
        title: "Adoption",
        slug: "adoption"
      }
    }
  },

  adoption: {
    title: "Adoption",
    subtitle: "Increase product adoption and customer success",
    description: "Driving usage",
    overview: {
      headline: "Drive Deep Product Adoption",
      description: "Ensure customers are getting full value from your solution through systematic adoption programs.",
      mentalState: "Your customers have completed basic onboarding but may be using only a fraction of your solution's capabilities. They're focused on their daily work and need gentle encouragement to explore more advanced features.",
      challenge: "You need to expand usage without overwhelming customers or appearing pushy about feature adoption."
    },
    problems: [
      {
        title: "Feature Underutilization",
        description: "Customers only use basic features, missing advanced value",
        icon: Settings
      },
      {
        title: "Engagement Decline",
        description: "Usage drops off after initial enthusiasm wanes",
        icon: TrendingUp
      },
      {
        title: "Value Realization Gaps",
        description: "Customers don't connect feature usage to business outcomes",
        icon: Target
      }
    ],
    useCases: [
      {
        title: "Usage-Based Engagement",
        description: "Automated campaigns that encourage deeper product adoption based on customer behavior.",
        icon: BarChart3,
        features: [
          "Behavioral trigger campaigns for feature introduction",
          "Usage analytics and personalized recommendations",
          "Progressive feature rollout based on adoption readiness",
          "Gamification elements to encourage exploration"
        ],
        outcome: "Increase product stickiness and customer lifetime value through deeper adoption"
      },
      {
        title: "Success Coaching Automation",
        description: "Automated coaching and guidance systems that help customers achieve their goals.",
        icon: Target,
        features: [
          "Goal-setting and tracking automation",
          "Best practice recommendations based on usage patterns",
          "Peer comparison and benchmarking insights",
          "Success coaching content delivery based on customer journey"
        ],
        outcome: "Improve customer outcomes and reduce churn through proactive success coaching"
      }
    ],
    navigation: {
      prev: {
        title: "Onboarding",
        slug: "onboarding"
      },
      next: {
        title: "Expansion",
        slug: "expansion"
      }
    }
  },

  expansion: {
    title: "Expansion",
    subtitle: "Identify and execute upsell and cross-sell opportunities",
    description: "Growing the account",
    overview: {
      headline: "Grow Account Value",
      description: "Systematically identify and pursue expansion opportunities with existing customers.",
      mentalState: "Your successful customers are seeing value from your solution and may be ready for additional products, users, or advanced features. They're focused on optimizing and scaling their operations.",
      challenge: "You need to identify the right expansion opportunities at the right time without appearing opportunistic or pushy."
    },
    problems: [
      {
        title: "Missed Opportunities",
        description: "Expansion signals go unnoticed until it's too late",
        icon: Eye
      },
      {
        title: "Poor Timing",
        description: "Approaching customers with expansion offers at wrong moments",
        icon: Clock
      },
      {
        title: "Generic Offers",
        description: "One-size-fits-all expansion approaches that don't resonate",
        icon: Target
      }
    ],
    useCases: [
      {
        title: "Expansion Signal Detection",
        description: "Automated systems to identify when customers are ready for upsell or cross-sell opportunities.",
        icon: TrendingUp,
        features: [
          "Usage-based expansion trigger identification",
          "Success milestone-based upsell campaigns",
          "Team growth and organizational change detection",
          "Competitive intelligence and market opportunity alerts"
        ],
        outcome: "Increase revenue per customer through timely, relevant expansion offers"
      },
      {
        title: "Cross-Sell Automation",
        description: "Systematic approaches to introduce complementary products and services to existing customers.",
        icon: RefreshCw,
        features: [
          "Product affinity analysis and recommendation engines",
          "Cross-sell campaign automation based on customer profile",
          "Bundle optimization and dynamic pricing",
          "Referral program automation for additional departments"
        ],
        outcome: "Maximize customer lifetime value through strategic cross-selling"
      }
    ],
    navigation: {
      prev: {
        title: "Adoption",
        slug: "adoption"
      }
    }
  },

  // Legacy stages for backward compatibility
  interest: {
    title: "Interest Stage",
    subtitle: "Systematically capture, qualify, and nurture prospects showing initial interest",
    description: "Turn awareness into qualified interest",
    overview: {
      headline: "Turn Awareness Into Qualified Interest",
      description: '"They\'re paying attention" - Now it\'s time to separate real prospects from tire-kickers. Here\'s how to qualify effectively and schedule meaningful conversations.',
      mentalState: "Your prospects have moved beyond just being aware of their problem. They're actively paying attention to potential solutions and evaluating whether it's worth their time to engage.",
      challenge: "This is the critical junction where most sales processes fail - by treating all leads equally instead of qualifying effectively.",
      callout: {
        type: 'info',
        title: "Key Focus",
        description: "Separate real prospects from tire-kickers through systematic qualification.",
        icon: Target
      }
    },
    problems: [
      {
        title: "Spray and Pray Approach",
        description: "Treating all leads the same, wasting time on unqualified prospects",
        icon: Target
      },
      {
        title: "No Systematic Qualification",
        description: "Relying on gut feel instead of structured qualification frameworks",
        icon: Clipboard
      },
      {
        title: "Meeting Booking Friction",
        description: "Complicated scheduling processes that lose prospects",
        icon: Calendar
      }
    ],
    useCases: [
      {
        title: 'Lead Scoring & Qualification',
        description: 'Automatically score and qualify leads based on demographic data, behavioral signals, and engagement patterns.',
        icon: Target,
        features: [
          'Behavioral scoring based on website activity and email engagement',
          'Progressive profiling to gradually collect qualification data',
          'Automatic lead routing to appropriate sales representatives',
          'Lead nurturing workflows for prospects not yet sales-ready'
        ],
        outcome: 'Increase qualified lead conversion and reduce sales time waste'
      },
      {
        title: 'Meeting Booking Automation',
        description: 'Streamline the scheduling process with automated booking sequences and follow-up reminders.',
        icon: Calendar,
        features: [
          'Calendar integration with automatic availability syncing',
          'Meeting confirmation and reminder email sequences',
          'No-show recovery campaigns with alternative scheduling options',
          'Meeting preparation materials sent automatically to attendees'
        ],
        outcome: 'Reduce scheduling friction and decrease no-show rates'
      },
      {
        title: 'Lead Capture Optimization',
        description: 'Maximize conversion from visitors to leads using smart forms and progressive disclosure.',
        icon: Clipboard,
        features: [
          'Smart forms that adapt based on known contact information',
          'Progressive profiling to avoid form abandonment',
          'Thank you page optimization with next-step guidance',
          'Immediate follow-up sequences for new lead captures'
        ],
        outcome: 'Improve form conversion rates and reduce bounce rates'
      },
      {
        title: 'First-Touch Attribution',
        description: 'Track and optimize the channels and campaigns that generate the highest-quality prospects.',
        icon: BarChart3,
        features: [
          'Multi-touch attribution tracking across channels',
          'Campaign performance reporting with lead quality metrics',
          'Automatic budget allocation recommendations',
          'Channel-specific nurturing workflows based on lead source'
        ],
        outcome: 'Optimize marketing spend allocation and improve lead quality'
      },
      {
        title: 'Prospect Research Automation',
        description: 'Automatically gather and surface relevant prospect information to personalize outreach.',
        icon: Search,
        features: [
          'Company and contact data enrichment from external sources',
          'Social media activity monitoring and alerts',
          'News and company update notifications',
          'Personalization token population for outreach campaigns'
        ],
        outcome: 'Increase personalized outreach efficiency and response rates'
      },
      {
        title: 'Interest-Based Segmentation',
        description: 'Automatically segment prospects based on their interests and engagement patterns for targeted messaging.',
        icon: Users,
        features: [
          'Content consumption tracking and interest scoring',
          'Dynamic list building based on engagement behaviors',
          'Interest-specific email sequences and content recommendations',
          'Product/service interest identification and routing'
        ],
        outcome: 'Improve email engagement rates through better targeting'
      }
    ],
    navigation: {
      next: {
        title: "Consideration",
        slug: "consideration"
      }
    }
  },

  consideration: {
    title: "Consideration Stage",
    subtitle: "Maintain engagement and momentum during the critical consideration phase",
    description: "Keep engaged prospects moving forward",
    overview: {
      headline: "Keep Engaged Prospects Moving Forward",
      description: '"They\'re actively evaluating" - This is where most deals stall. Here\'s how to maintain momentum and track real engagement during the critical consideration phase.',
      mentalState: "Your prospects are actively comparing solutions, evaluating options, and trying to build internal consensus. They're engaged but cautious.",
      challenge: "This is the make-or-break stage. Without proper engagement tracking and systematic follow-up, even hot prospects go cold.",
      callout: {
        type: 'warning',
        title: "Critical Stat",
        description: "Most deals stall during the consideration phase due to lack of systematic engagement tracking.",
        icon: AlertTriangle
      }
    },
    problems: [
      {
        title: "No Engagement Visibility",
        description: "Can't tell who's genuinely interested vs. going through motions",
        icon: Eye
      },
      {
        title: "Inconsistent Follow-Up",
        description: "Ad-hoc communication that lets prospects slip away",
        icon: MessageSquare
      },
      {
        title: "Wrong Timing",
        description: "Either too pushy or not persistent enough",
        icon: Clock
      }
    ],
    useCases: [
      {
        title: 'Engagement Scoring & Tracking',
        description: 'Monitor prospect engagement across all touchpoints to identify hot opportunities and at-risk deals.',
        icon: BarChart3,
        features: [
          'Email engagement scoring with opens, clicks, and time spent',
          'Website behavior tracking with content consumption patterns',
          'Proposal and document interaction monitoring',
          'Multi-channel engagement aggregation and scoring'
        ],
        outcome: 'Identify more sales-ready opportunities and prevent deal stalling'
      },
      {
        title: 'Nurture Campaign Sequences',
        description: 'Automated drip campaigns that educate prospects and maintain momentum through the evaluation process.',
        icon: RotateCw,
        features: [
          'Multi-touch educational email sequences based on prospect interests',
          'Content recommendations based on engagement history',
          'Automated follow-up scheduling based on engagement levels',
          'Dynamic content personalization for different buyer personas'
        ],
        outcome: 'Increase email engagement and reduce sales cycle length'
      },
      {
        title: 'Competitive Intelligence',
        description: 'Automatically surface competitive information and arm sales teams with battle cards.',
        icon: Swords,
        features: [
          'Competitor mention detection in prospect communications',
          'Automated competitive battle card delivery to sales team',
          'Competitive content recommendations for prospects',
          'Market positioning message optimization based on competitive landscape'
        ],
        outcome: 'Improve win rates against competitors through better positioning'
      },
      {
        title: 'Proposal Automation',
        description: 'Streamline proposal creation and delivery with automated templates and tracking.',
        icon: FileText,
        features: [
          'Dynamic proposal generation based on prospect requirements',
          'Automated proposal delivery with engagement tracking',
          'Follow-up sequences for proposal reviews and feedback',
          'ROI calculator integration with personalized value propositions'
        ],
        outcome: 'Reduce proposal creation time and improve acceptance rates'
      },
      {
        title: 'Stakeholder Mapping',
        description: 'Identify and engage all decision-makers and influencers in the buying process.',
        icon: Users2,
        features: [
          'Automatic stakeholder identification from email signatures and interactions',
          'Role-based content delivery for different stakeholder types',
          'Multi-stakeholder engagement campaigns',
          'Buying committee influence mapping and alerts'
        ],
        outcome: 'Increase deal size through better stakeholder engagement'
      },
      {
        title: 'Objection Handling Automation',
        description: 'Proactively address common objections with automated content delivery and sales alerts.',
        icon: Shield,
        features: [
          'Objection pattern recognition from prospect communications',
          'Automatic delivery of objection-handling content',
          'Sales alert triggers for common objection patterns',
          'Success story and case study recommendations based on objections'
        ],
        outcome: 'Reduce objection-related deal loss through proactive handling'
      }
    ],
    navigation: {
      prev: {
        title: "Interest Stage",
        slug: "interest"
      },
      next: {
        title: "Purchase",
        slug: "purchase"
      }
    }
  },

  purchase: {
    title: "Purchase Stage",
    subtitle: "Convert consideration into closed deals",
    description: "Convert prospects at the decision point",
    overview: {
      headline: "Close More Deals",
      description: "Convert engaged prospects into customers with systematic closing processes and deal rescue campaigns.",
      mentalState: "Your prospects are ready to make a decision but may need final reassurance or help overcoming last-minute objections and internal hurdles.",
      challenge: "Close deals efficiently while maintaining relationships and setting the stage for successful customer outcomes."
    },
    problems: [
      {
        title: "Decision Delays",
        description: "Prospects get stuck in analysis paralysis",
        icon: Clock
      },
      {
        title: "Last-Minute Objections",
        description: "New concerns arise just before signing",
        icon: AlertTriangle
      },
      {
        title: "Internal Approval Processes",
        description: "Complex buying processes within prospect organizations",
        icon: Users
      }
    ],
    useCases: [
      {
        title: 'Deal Acceleration',
        description: 'Urgency campaigns and decision support materials to move prospects toward closing.',
        icon: Zap,
        features: [
          'Time-sensitive offer campaigns with clear deadlines',
          'Decision support materials and business case templates',
          'Internal champion enablement with presentation materials',
          'Approval process guidance and stakeholder mapping'
        ],
        outcome: 'Reduce sales cycle length and improve close rates'
      },
      {
        title: 'Objection Prevention',
        description: 'Proactively address common closing objections before they arise.',
        icon: Shield,
        features: [
          'Pre-emptive objection handling content delivery',
          'Risk mitigation documentation and guarantees',
          'Social proof and reference customer introductions',
          'Implementation success stories and case studies'
        ],
        outcome: 'Reduce deal loss due to unaddressed concerns'
      }
    ],
    navigation: {
      prev: {
        title: "Consideration",
        slug: "consideration"
      },
      next: {
        title: "Retention",
        slug: "retention"
      }
    }
  },

  retention: {
    title: "Retention Stage",
    subtitle: "Onboard and retain customers effectively",
    description: "Keep customers successful and satisfied",
    overview: {
      headline: "Ensure Customer Success",
      description: "Systematic onboarding and success programs to reduce churn and build lasting relationships.",
      mentalState: "Your new customers are excited but also nervous about getting started. They want to see quick wins and validate their purchase decision.",
      challenge: "Deliver early value while building the foundation for long-term success and loyalty."
    },
    problems: [
      {
        title: "Onboarding Gaps",
        description: "Customers struggle to get started effectively",
        icon: AlertTriangle
      },
      {
        title: "Low Engagement",
        description: "Customers don't adopt key features or best practices",
        icon: BarChart3
      },
      {
        title: "Success Tracking",
        description: "Difficult to identify at-risk customers before they churn",
        icon: Eye
      }
    ],
    useCases: [
      {
        title: 'Onboarding Automation',
        description: 'Systematic onboarding sequences and milestone tracking to ensure customer success.',
        icon: UserPlus,
        features: [
          'Progressive onboarding email sequences with clear milestones',
          'Resource delivery based on customer profile and use case',
          'Implementation checkpoint tracking and follow-up',
          'Success metric definition and tracking setup'
        ],
        outcome: 'Reduce time-to-value and increase customer satisfaction'
      },
      {
        title: 'Health Score Monitoring',
        description: 'Early warning systems for churn prevention through engagement tracking.',
        icon: BarChart3,
        features: [
          'Multi-factor customer health scoring algorithms',
          'Behavioral trigger alerts for at-risk customers',
          'Proactive outreach campaigns for declining engagement',
          'Success coaching and best practice sharing automation'
        ],
        outcome: 'Reduce churn through early intervention and proactive success management'
      }
    ],
    navigation: {
      prev: {
        title: "Purchase",
        slug: "purchase"
      },
      next: {
        title: "Expansion",
        slug: "expansion"
      }
    }
  }
}