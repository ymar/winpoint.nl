import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Share2, BookOpen, Clock, User, ChevronRight, CheckCircle, Users } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample playbook data - in a real app, this would come from a CMS or database
const playbooks = {
  "deal-recovery-playbook": {
    title: "Deal Recovery Playbook",
    subtitle: "A Systematic Approach to Winning Back Lost Opportunities",
    description: "Learn the proven framework used by top sales teams to recover millions in lost revenue",
    author: "Winpoint Team",
    readTime: "15 min read",
    downloadCount: "2,847",
    category: "Playbook",
    lastUpdated: "December 2024",
    content: `
# Deal Recovery Playbook

## Introduction

Most sales teams write off deals too early. The reality is that 70% of "lost" deals are still recoverable if you approach them systematically.

This playbook will teach you:
- How to identify truly recoverable opportunities
- The psychology behind deal stalls and losses
- Proven frameworks for re-engagement
- Timing strategies that actually work

## Chapter 1: The Recovery Mindset

### Why Most Recovery Attempts Fail

The biggest mistake sales teams make is treating deal recovery like a Hail Mary. They send generic "checking in" emails or make desperate phone calls.

**Real recovery requires:**
- Understanding the specific reason each deal stalled
- Timing your re-engagement correctly
- Addressing the actual blocker, not symptoms
- Having a systematic approach

### The 4 Types of "Lost" Deals

Not all lost deals are created equal. Understanding which type you're dealing with determines your recovery strategy:

#### 1. Timing Issues (40% of losses)
- Budget cycles don't align
- Internal priorities shifted
- Key stakeholder unavailable

**Recovery Probability:** High (60-80%)
**Best Approach:** Stay-in-touch campaigns with value-add content

#### 2. Feature/Product Gaps (25% of losses)
- Missing functionality
- Integration challenges
- Technical limitations

**Recovery Probability:** Medium (30-50%)
**Best Approach:** Product roadmap updates, workaround solutions

#### 3. Competitive Losses (20% of losses)
- Lost to a competitor
- Price/value concerns
- Relationship advantages

**Recovery Probability:** Low-Medium (20-40%)
**Best Approach:** Differentiation messaging, competitive intelligence

#### 4. Budget/Authority Issues (15% of losses)
- No budget allocated
- Wrong stakeholders engaged
- Economic buyer not identified

**Recovery Probability:** Medium-High (40-70%)
**Best Approach:** Stakeholder mapping, business case development

## Chapter 2: The Recovery Assessment Framework

### Step 1: Deal Categorization

For each lost deal, answer these questions:

**Timing Questions:**
- Was this a budget/timing issue?
- Did they have a specific timeline mentioned?
- What triggered the original buying process?

**Competitive Questions:**
- Did they choose a competitor?
- What was their stated reason for the decision?
- Do we know their decision criteria?

**Stakeholder Questions:**
- Who was our primary contact?
- Did we meet the economic buyer?
- What was the decision-making process?

### Step 2: Recovery Probability Scoring

Rate each deal on a scale of 1-10 for:

1. **Relationship Strength** (1-10)
   - How strong was our relationship with key stakeholders?
   - Did they respond positively to our communications?

2. **Problem Urgency** (1-10)
   - How urgent was their need when we first engaged?
   - Has the underlying problem been solved?

3. **Competitive Position** (1-10)
   - How did we compare to alternatives?
   - What were our unique advantages?

4. **Time Since Last Contact** (1-10)
   - Less than 30 days = 10
   - 30-60 days = 8
   - 60-90 days = 6
   - 90+ days = 4

**Total Score Interpretation:**
- 32-40: High priority recovery target
- 24-31: Medium priority, worth pursuing
- 16-23: Low priority, minimal effort
- Below 16: Move to nurture campaign

## Chapter 3: Recovery Strategies by Deal Type

### Timing-Based Recovery

**The Stay-in-Touch Campaign**

Month 1-2: Educational content
- Industry reports
- Best practice guides
- Relevant case studies

Month 3-4: Soft re-engagement
- "Thought you'd find this interesting"
- No sales pitch, pure value

Month 5-6: Direct re-engagement
- "Circling back on [specific project]"
- Reference original conversation
- Ask about current priorities

**Sample Email Template:**

\`\`\`
Subject: [Company] - Quick question about [specific project]

Hi [Name],

I was reviewing my notes from our conversation about [specific challenge] and remembered you mentioned [specific detail].

I'm curious - is [project/initiative] still on your roadmap for this year?

We've had some interesting developments that might be relevant:
- [Specific update related to their needs]
- [New capability or case study]

Worth a quick conversation to see if there's still a fit?

Best,
[Your name]
\`\`\`

### Competitive Recovery

**The Differentiation Play**

When you've lost to a competitor, focus on:

1. **Unique Value Proposition**
   - What can you do that they can't?
   - Where do you have clear advantages?

2. **Implementation Risks**
   - What challenges might they face?
   - Where do competitors typically struggle?

3. **Long-term Partnership**
   - Your track record vs. theirs
   - Support and service advantages

**Sample Approach:**

\`\`\`
"I saw the announcement about your partnership with [Competitor]. 

Congratulations on moving forward with the project.

I wanted to reach out because we've worked with several companies who initially chose [Competitor] and later needed additional support in [specific area].

If you run into any challenges during implementation, we'd be happy to help as a complementary solution or backup option.

No sales pitch - just want to make sure you have all the support you need for success."
\`\`\`

### Budget/Authority Recovery

**The Business Case Revival**

When budget or authority was the issue:

1. **Quantify the Cost of Inaction**
   - What's the monthly cost of the problem?
   - How much revenue/efficiency is at stake?

2. **Find Alternative Budget Sources**
   - Different departments
   - Next fiscal year
   - Pilot program approach

3. **Engage Higher-Level Stakeholders**
   - Economic buyer identification
   - Executive briefing approach

## Chapter 4: Timing Your Recovery

### The Recovery Timeline

**Immediate (0-30 days):**
- Send thank you note
- Connect on LinkedIn
- Share relevant content

**Short-term (1-3 months):**
- Value-add touchpoints
- Industry insights
- No direct sales messaging

**Medium-term (3-6 months):**
- Soft re-engagement
- Reference original conversation
- Test for renewed interest

**Long-term (6+ months):**
- Direct re-engagement
- New developments/capabilities
- Changed circumstances

### Seasonal Considerations

**Q4 Recovery Timing:**
- Budget planning season
- Next year initiatives
- Year-end urgency

**Q1 Recovery Timing:**
- New budget availability
- Fresh priorities
- Team changes

## Chapter 5: Measuring Recovery Success

### Key Metrics to Track

1. **Recovery Rate**
   - % of targeted deals that re-engage
   - Benchmark: 15-25% is good, 30%+ is excellent

2. **Time to Recovery**
   - Average time from loss to re-engagement
   - Shorter is generally better

3. **Recovery Revenue**
   - Total value of recovered deals
   - ROI of recovery efforts

4. **Recovery Conversion**
   - % of re-engaged deals that close
   - Quality of recovery efforts

### Success Stories

**Case Study: TechFlow's $2.3M Recovery**

TechFlow had 47 deals marked "closed-lost" from the previous year. Using this framework:

- Identified 23 high-probability recovery targets
- Launched systematic re-engagement campaigns
- Recovered 11 deals worth $2.3M total
- 48% recovery rate on targeted opportunities

**Key Success Factors:**
- Systematic approach vs. random outreach
- Value-first re-engagement strategy
- Proper timing and persistence
- Clear differentiation messaging

## Chapter 6: Implementation Checklist

### Week 1: Assessment
- [ ] Export all closed-lost deals from last 12 months
- [ ] Categorize deals by loss reason
- [ ] Score recovery probability for each deal
- [ ] Identify top 20 recovery targets

### Week 2: Strategy Development
- [ ] Develop messaging for each deal category
- [ ] Create content calendar for stay-in-touch campaigns
- [ ] Set up tracking system for recovery efforts
- [ ] Assign ownership for each target deal

### Week 3: Campaign Launch
- [ ] Send initial re-engagement messages
- [ ] Schedule follow-up touchpoints
- [ ] Begin value-add content sharing
- [ ] Track initial response rates

### Week 4: Optimization
- [ ] Analyze response rates by message type
- [ ] Adjust messaging based on feedback
- [ ] Identify additional recovery opportunities
- [ ] Plan next month's activities

## Conclusion

Deal recovery isn't about desperation - it's about systematic value creation. The best sales teams don't just chase new opportunities; they maximize the value of every relationship they've built.

Remember:
- Most "lost" deals aren't actually lost
- Recovery requires strategy, not just persistence
- Timing and messaging are everything
- Systematic approaches beat random outreach

Start with your highest-probability targets and work systematically through your pipeline. The revenue is there - you just need the right approach to unlock it.

---

*This playbook is part of Winpoint's comprehensive deal recovery methodology. For personalized implementation support, book a diagnostic call with our team.*
    `,
  },
  "loss-analysis-template": {
    title: "Loss Analysis Template",
    subtitle: "Systematic Framework for Understanding Why Deals Fail",
    description: "Excel template with built-in formulas to identify patterns in your lost deals",
    author: "Winpoint Team",
    readTime: "8 min read",
    downloadCount: "1,923",
    category: "Template",
    lastUpdated: "December 2024",
    content: `
# Loss Analysis Template Guide

## Overview

This template helps you systematically analyze lost deals to identify patterns and improvement opportunities. It includes pre-built formulas and charts to visualize your data.

## How to Use This Template

### Step 1: Data Collection

For each lost deal, collect the following information:

**Basic Deal Information:**
- Deal Name
- Prospect Company
- Deal Value
- Sales Rep
- Date Lost
- Sales Cycle Length

**Loss Categorization:**
- Primary Loss Reason
- Secondary Loss Reason
- Competitor (if applicable)
- Stage Lost
- Last Activity Date

### Step 2: Analysis Categories

The template includes these loss reason categories:

#### Primary Categories:
1. **Timing/Budget** - Not ready, budget frozen, wrong timing
2. **Competitive** - Lost to competitor, price comparison
3. **No Decision** - Status quo, project cancelled
4. **Product Fit** - Missing features, technical limitations
5. **Relationship** - Poor fit, communication issues

#### Secondary Categories:
- Budget not approved
- Timeline changed
- Key stakeholder left
- Requirements changed
- Implementation concerns
- Support concerns
- Integration challenges

### Step 3: Pattern Analysis

The template automatically generates:

**Loss Distribution Charts:**
- Pie chart showing primary loss reasons
- Bar chart showing losses by sales stage
- Timeline showing losses by month

**Performance Metrics:**
- Win rate by sales rep
- Average deal size by loss reason
- Sales cycle length by outcome

**Trend Analysis:**
- Monthly loss trends
- Seasonal patterns
- Competitive win/loss ratios

## Key Insights to Look For

### 1. Stage Analysis
- **Early Stage Losses:** Usually qualification issues
- **Mid-Stage Losses:** Often competitive or product fit
- **Late Stage Losses:** Typically budget or decision-making

### 2. Rep Performance Patterns
- Consistent loss reasons by rep
- Stage-specific challenges
- Training opportunities

### 3. Competitive Intelligence
- Which competitors are winning
- Common competitive objections
- Price sensitivity patterns

### 4. Product/Market Fit
- Feature gaps causing losses
- Market segment challenges
- Use case misalignment

## Action Planning

Based on your analysis, create action plans for:

**Process Improvements:**
- Better qualification criteria
- Stage-specific training
- Competitive positioning

**Product Development:**
- Feature prioritization
- Integration roadmap
- Pricing adjustments

**Sales Training:**
- Objection handling
- Competitive differentiation
- Stakeholder engagement

## Template Sections

### 1. Deal Entry Sheet
Input form for each lost deal with dropdown menus for consistency.

### 2. Analysis Dashboard
Visual summary of key metrics and trends.

### 3. Detailed Reports
Drill-down analysis by various dimensions.

### 4. Action Planning
Template for documenting improvement initiatives.

## Download Instructions

1. Click the download button below
2. Open in Excel or Google Sheets
3. Start with the "Instructions" tab
4. Enter your lost deal data
5. Review the auto-generated analysis

The template includes sample data to help you understand the format and expected insights.

---

*For advanced analysis techniques and interpretation guidance, consider booking a diagnostic call with our team.*
    `,
  },
  "re-engagement-scripts": {
    title: "Re-engagement Scripts",
    subtitle: "Proven Templates for Different Deal Recovery Scenarios",
    description: "12 different scripts for various stalled deal situations with customization guidance",
    author: "Winpoint Team",
    readTime: "12 min read",
    downloadCount: "1,654",
    category: "Scripts",
    lastUpdated: "December 2024",
    content: `
# Re-engagement Scripts Collection

## Introduction

These scripts have been tested across hundreds of deal recovery attempts. Each script is designed for specific scenarios and includes customization guidance.

**Important:** These are frameworks, not copy-paste templates. Customize them for your industry, relationship, and specific situation.

## Script Categories

### 1. Timing-Based Re-engagement
### 2. Competitive Loss Recovery
### 3. Budget/Authority Issues
### 4. No Decision/Status Quo
### 5. Product Fit Concerns
### 6. Relationship Repair

---

## 1. Timing-Based Re-engagement Scripts

### Script 1A: Budget Cycle Re-engagement

**When to use:** Deal stalled due to budget timing, fiscal year planning

**Subject:** [Company] - Budget planning for [specific initiative]

**Email:**
\`\`\`
Hi [Name],

I hope you're doing well. I was reviewing my notes from our conversation about [specific project/challenge] and remembered you mentioned the timing wasn't quite right due to [specific reason - budget cycle, other priorities, etc.].

As we're approaching [relevant time period - new fiscal year, Q1 planning, etc.], I wanted to circle back and see if [project name] is back on your roadmap.

Since we last spoke, we've [relevant update - new features, case study, industry development]:
- [Specific benefit #1]
- [Specific benefit #2]

I'd love to understand your current priorities and see if there's still a fit. Would you be open to a brief conversation in the next week or two?

Best regards,
[Your name]

P.S. I saw [relevant company news/industry development]. Congratulations on [specific achievement]!
\`\`\`

**Customization Notes:**
- Reference specific details from original conversation
- Include relevant company/industry news
- Mention concrete developments since last contact

### Script 1B: Priority Shift Recovery

**When to use:** Deal stalled due to changing priorities, new initiatives

**Subject:** Quick question about [original project]

**Email:**
\`\`\`
Hi [Name],

I know things have been busy at [Company] - I saw the news about [recent development/announcement].

I wanted to reach out because I remember how passionate you were about solving [specific challenge] when we spoke in [timeframe]. You mentioned [specific pain point or goal].

I'm curious - is this still a priority for your team this year? 

I ask because we've been working with [similar company/industry] on exactly this challenge, and the results have been impressive: [specific, relevant result].

If it's still relevant, I'd love to share what we learned. If priorities have shifted, no worries at all - I just wanted to check in.

Either way, hope you're doing well!

[Your name]
\`\`\`

---

## 2. Competitive Loss Recovery Scripts

### Script 2A: Post-Decision Check-in

**When to use:** Lost to competitor, maintaining relationship for future opportunities

**Subject:** Congratulations on your [project/partnership] decision

**Email:**
\`\`\`
Hi [Name],

I wanted to reach out and congratulate you on moving forward with [competitor/solution]. I know this was an important decision for [Company], and I'm glad you found a path forward.

While we weren't the right fit this time, I genuinely hope the implementation goes smoothly and delivers the results you're looking for.

I wanted to mention that we've worked with several companies who initially chose [competitor] and later needed additional support in [specific area where you have advantages]. Not suggesting anything is wrong with your choice - just want you to know we're here if you ever need a complementary solution or backup option.

No sales pitch, just want to make sure you have all the support you need for success.

Best of luck with the project!

[Your name]

P.S. If you ever want to grab coffee and share lessons learned, I'd love to hear about your experience. Always looking to improve our approach.
\`\`\`

### Script 2B: Implementation Challenge Support

**When to use:** 3-6 months after competitive loss, offering help with challenges

**Subject:** [Company] - Implementation support if needed

**Email:**
\`\`\`
Hi [Name],

Hope you're doing well! I've been thinking about your [project name] implementation and wanted to check in.

I know you chose [competitor] for the project, and I hope everything is going smoothly. However, I've been working with a few companies recently who ran into some unexpected challenges during implementation, particularly around [common challenge area].

If you're facing any roadblocks or need a second opinion on anything, I'd be happy to help - no strings attached. Sometimes a fresh perspective can be valuable, even if we're not the primary vendor.

Would you be open to a quick call to discuss how things are going? I promise no sales pitch - just genuinely want to help if there's a way we can.

Best,
[Your name]
\`\`\`

---

## 3. Budget/Authority Recovery Scripts

### Script 3A: ROI Justification Support

**When to use:** Deal stalled due to budget approval challenges

**Subject:** [Company] - Business case support for [project]

**Email:**
\`\`\`
Hi [Name],

I've been thinking about our conversation regarding [project] and the budget approval process. I know you were excited about the potential impact, but the business case needed to be stronger for the executive team.

I wanted to offer some additional support. We've helped several clients build compelling business cases for similar initiatives, and I'd be happy to share:

- ROI calculation templates specific to [their industry/use case]
- Case studies showing measurable results from similar companies
- Risk mitigation strategies that address common executive concerns

I could also connect you with [similar client] who went through a similar approval process and might be willing to share their approach.

Would any of this be helpful? I'm happy to put together a business case support package with no obligation - just want to help you get the resources you need to solve [specific challenge].

Let me know if you'd like to explore this.

Best,
[Your name]
\`\`\`

### Script 3B: Alternative Budget Source

**When to use:** Original budget source unavailable, exploring alternatives

**Subject:** Alternative approaches for [project] funding

**Email:**
\`\`\`
Hi [Name],

I know the budget situation for [project] didn't work out as planned this quarter. I've been thinking about alternative approaches that might work better for [Company].

A few ideas that have worked for similar companies:

1. **Pilot Program Approach:** Start with a smaller scope to prove ROI, then expand
2. **Departmental Budget:** Sometimes [relevant department] has budget for this type of initiative
3. **Next Fiscal Year:** Early planning for [upcoming period] budget allocation

I've also seen companies get creative with:
- Operational budget vs. capital expenditure
- Shared costs across multiple departments
- Phased implementation to spread costs

Would you be interested in exploring any of these approaches? I could put together a few different scenarios that might work better for your situation.

No pressure - just want to help find a path forward if you're still interested in solving [original challenge].

Best,
[Your name]
\`\`\`

---

## 4. No Decision/Status Quo Scripts

### Script 4A: Cost of Inaction

**When to use:** Prospect chose to do nothing, maintaining status quo

**Subject:** The cost of waiting on [specific challenge]

**Email:**
\`\`\`
Hi [Name],

I completely understand the decision to hold off on [project] for now. Sometimes the timing just isn't right, and there are always competing priorities.

I wanted to share something that might be relevant for future planning. We recently worked with [similar company] who was in a similar situation - they also decided to wait on addressing [challenge].

After 6 months, they calculated that the delay cost them approximately [specific amount/impact] in [lost revenue/efficiency/costs]. When they finally moved forward, the first thing they said was "we should have done this sooner."

I'm not suggesting you should rush into anything, but I thought you might find it helpful to quantify what the status quo is actually costing [Company] each month.

If you'd like, I could put together a simple cost-of-inaction analysis specific to your situation. No obligation - just might be useful for future decision-making.

Let me know if that would be valuable.

Best,
[Your name]
\`\`\`

### Script 4B: New Urgency Creation

**When to use:** Creating urgency around previously non-urgent issues

**Subject:** [Industry/Market Development] - Impact on [Company]

**Email:**
\`\`\`
Hi [Name],

Hope you're doing well. I wanted to reach out because of some recent developments in [industry/market] that might impact [Company].

Specifically, [relevant industry change, regulation, competitive development, etc.] is creating new challenges around [area related to your solution].

This reminded me of our conversation about [original challenge]. What seemed like a "nice to have" six months ago might now be more urgent given [specific impact of industry change].

Companies like [relevant example] are already taking action because [specific reason/consequence].

I'd love to get your perspective on how this might affect [Company's] priorities. Would you be open to a brief conversation about the implications?

Even if our solution isn't the right fit, I think the discussion could be valuable for your planning.

Best,
[Your name]
\`\`\`

---

## 5. Product Fit Recovery Scripts

### Script 5A: Product Roadmap Update

**When to use:** Deal lost due to missing features that are now available/planned

**Subject:** [Company] - Product update you might find interesting

**Email:**
\`\`\`
Hi [Name],

I hope you're doing well. I wanted to reach out with an update that might be relevant to [Company].

I remember when we spoke about [project], one of the key concerns was [specific feature/capability gap]. At the time, we didn't have a great solution for that requirement.

I'm excited to share that we've just released [new feature/capability] that directly addresses this need. Here's what's new:

- [Specific capability #1]
- [Specific capability #2]
- [Integration/compatibility improvement]

I thought you might find this interesting, especially since [specific benefit related to their original need].

Would you be open to a brief demo to see how this might change the equation for [Company]? No pressure - just thought it might be worth a look given your original requirements.

Best,
[Your name]
\`\`\`

### Script 5B: Workaround Solution

**When to use:** Offering alternative approaches to address product limitations

**Subject:** Alternative approach for [specific requirement]

**Email:**
\`\`\`
Hi [Name],

I've been thinking about our conversation regarding [specific requirement] that we couldn't fully address at the time.

While we still don't have that exact feature, I've been working with [similar client] on a creative workaround that might interest you:

[Describe alternative approach/integration/process]

The results have been impressive: [specific outcome/benefit].

I know it's not the out-of-the-box solution you originally wanted, but it might be worth exploring if you're still looking to solve [original challenge].

Would you be interested in seeing how this approach works? I could arrange a brief session with [client] to share their experience directly.

Let me know if this sounds relevant.

Best,
[Your name]
\`\`\`

---

## 6. Relationship Repair Scripts

### Script 6A: Taking Responsibility

**When to use:** Relationship damaged due to miscommunication or service issues

**Subject:** [Company] - Taking responsibility and moving forward

**Email:**
\`\`\`
Hi [Name],

I wanted to reach out personally to address what happened during our [project/evaluation] process.

Looking back, I realize we didn't handle [specific issue] as well as we should have. Specifically:
- [Acknowledge specific mistake/issue]
- [Take responsibility for impact]
- [Explain what we've learned/changed]

I take full responsibility for [specific aspect], and I understand why this affected your confidence in working with us.

I'm not reaching out to try to revive the deal - I know that ship has sailed. I just wanted to:
1. Apologize for the experience
2. Make sure you know we've made changes to prevent this in the future
3. Leave the door open for future opportunities when the time is right

If there's anything I can do to help with your current initiative, even if it doesn't involve us, please let me know.

Best regards,
[Your name]
\`\`\`

### Script 6B: Value-First Relationship Building

**When to use:** Rebuilding relationship through value delivery, no sales agenda

**Subject:** [Relevant industry insight] - thought you'd find this interesting

**Email:**
\`\`\`
Hi [Name],

Hope you're doing well. I came across this [report/article/insight] about [relevant topic] and immediately thought of our conversation about [related challenge].

[Share specific, valuable insight with no sales angle]

Key takeaways that might be relevant for [Company]:
- [Insight #1]
- [Insight #2]
- [Actionable recommendation]

No agenda here - just thought you might find it useful given your focus on [relevant area].

Hope things are going well with [project/initiative they mentioned].

Best,
[Your name]
\`\`\`

---

## Customization Guidelines

### 1. Personalization Elements
- Reference specific conversation details
- Mention company news/developments
- Include relevant industry context
- Use their language and terminology

### 2. Timing Considerations
- Wait appropriate intervals between contacts
- Align with their business cycles
- Consider seasonal factors
- Respect their communication preferences

### 3. Value-First Approach
- Lead with insights, not sales pitches
- Offer help without strings attached
- Share relevant case studies/examples
- Provide actionable recommendations

### 4. Follow-up Strategy
- Plan 3-5 touchpoints over 6 months
- Vary communication channels (email, phone, LinkedIn)
- Track responses and adjust approach
- Know when to move to nurture mode

---

## Success Metrics

Track these metrics for each script type:
- Open rates
- Response rates
- Meeting acceptance rates
- Deal re-engagement rates
- Ultimate conversion rates

Use this data to optimize your approach and identify the most effective scripts for your situation.

---

*These scripts are part of Winpoint's comprehensive deal recovery methodology. For personalized coaching on script customization and delivery, book a diagnostic call with our team.*
    `,
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PlaybookPage({ params }: PageProps) {
  const { slug } = await params
  const playbook = playbooks[slug as keyof typeof playbooks]

  if (!playbook) {
    notFound()
  }

  // Simple markdown-like rendering (in a real app, you'd use a proper markdown parser)
  const renderContent = (content: string) => {
    return content
      .split("\n")
      .map((line, index) => {
        // Headers
        if (line.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {line.replace("### ", "")}
            </h3>
          )
        }
        if (line.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              {line.replace("## ", "")}
            </h2>
          )
        }
        if (line.startsWith("# ")) {
          return (
            <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              {line.replace("# ", "")}
            </h1>
          )
        }

        // Code blocks
        if (line.startsWith("```")) {
          return null // Handle code blocks separately
        }

        // Lists
        if (line.startsWith("- ")) {
          return (
            <li key={index} className="text-gray-700 leading-relaxed ml-4">
              {line.replace("- ", "")}
            </li>
          )
        }

        // Bold text
        if (line.includes("**")) {
          const parts = line.split("**")
          return (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
            </p>
          )
        }

        // Regular paragraphs
        if (line.trim() && !line.startsWith("####")) {
          return (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {line}
            </p>
          )
        }

        // Empty lines
        return <div key={index} className="mb-2" />
      })
      .filter(Boolean)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-semibold text-gray-900 tracking-tight">Winpoint</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                What You Get
              </Link>
              <Link href="/content-library" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Content Library
              </Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Pricing
              </Link>
              <Link href="/#faq" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                FAQ
              </Link>
            </nav>

            <Button className="bg-blue-600 hover:bg-blue-700 shadow-sm font-medium">Book Call</Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/content-library" className="hover:text-gray-900 transition-colors">
              Content Library
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{playbook.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link
              href="/content-library"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Content Library
            </Link>

            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">{playbook.category}</Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{playbook.title}</h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{playbook.subtitle}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {playbook.author}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {playbook.readTime}
              </div>
              <div className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                {playbook.downloadCount} downloads
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 font-medium">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#introduction" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Introduction
                    </a>
                    <a href="#chapter-1" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Chapter 1: Recovery Mindset
                    </a>
                    <a href="#chapter-2" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Chapter 2: Assessment Framework
                    </a>
                    <a href="#chapter-3" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Chapter 3: Recovery Strategies
                    </a>
                    <a href="#chapter-4" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Chapter 4: Timing Recovery
                    </a>
                    <a href="#chapter-5" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Chapter 5: Measuring Success
                    </a>
                    <a href="#chapter-6" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Chapter 6: Implementation
                    </a>
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-900 leading-relaxed">{renderContent(playbook.content)}</div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <Card className="border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement This Playbook?</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Get personalized guidance on implementing these strategies for your specific situation. Our team can
                    help you customize the approach for maximum impact.
                  </p>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-medium">
                    Book Implementation Call
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Loss Analysis Template</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Systematic framework for understanding why deals fail with built-in analysis tools.
                  </p>
                  <Link href="/content-library/loss-analysis-template">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Template
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Re-engagement Scripts</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Proven email and call scripts for different types of stalled deal situations.
                  </p>
                  <Link href="/content-library/re-engagement-scripts">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Scripts
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-semibold tracking-tight">Winpoint</span>
            </Link>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Winpoint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
