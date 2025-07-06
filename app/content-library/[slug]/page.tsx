import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArrowLeft, Share2, Clock, User, ChevronRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPlaybookBySlug, getAllPlaybooks } from "@/lib/content"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PlaybookPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const playbooks = getAllPlaybooks()
  return playbooks.map((playbook) => ({
    slug: playbook.slug,
  }))
}

export async function generateMetadata({ params }: PlaybookPageProps) {
  const { slug } = await params
  const playbook = getPlaybookBySlug(slug)
  
  if (!playbook) {
    return {
      title: 'Playbook Not Found',
    }
  }

  return {
    title: `${playbook.metadata.title} | Winpoint`,
    description: playbook.metadata.description,
    openGraph: {
      title: playbook.metadata.title,
      description: playbook.metadata.description,
      type: 'article',
    },
  }
}

export default async function PlaybookPage({ params }: PlaybookPageProps) {
  const { slug } = await params
  const playbook = getPlaybookBySlug(slug)
  
  if (!playbook) {
    notFound()
  }

  const { metadata, content } = playbook

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/content-library" className="text-gray-500 hover:text-gray-700 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Content Library
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900">{metadata.title}</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 text-sm px-4 py-2">{metadata.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {metadata.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {metadata.subtitle}
            </p>
            
            {/* Meta information */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{metadata.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{metadata.readTime}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-center">
              <Button variant="outline" size="lg" className="bg-transparent">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight border-b border-gray-200 pb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl font-semibold text-gray-900 mb-6 mt-12 tracking-tight">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{children}</h3>,
                h4: ({ children }) => <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">{children}</h4>,
                p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-6 text-lg">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6 ml-4">{children}</ol>,
                li: ({ children }) => <li className="text-gray-700 leading-relaxed">{children}</li>,
                blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-gray-600 bg-blue-50 rounded-r-lg mb-6">{children}</blockquote>,
                code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">{children}</code>,
                pre: ({ children }) => <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">{children}</pre>,
                strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
