import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowRight, LucideIcon } from "lucide-react"
import Link from "next/link"

interface ResourceCardProps {
  icon: LucideIcon
  iconColor: string
  iconBgColor: string
  hoverColor: string
  badge: {
    text: string
    bgColor: string
    textColor: string
  }
  title: string
  description: string
  downloadCount: string
  href: string
  buttonText: string
  variant?: "default" | "outline"
}

export function ResourceCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  hoverColor,
  badge,
  title,
  description,
  downloadCount,
  href,
  buttonText,
  variant = "outline"
}: ResourceCardProps) {
  return (
    <Card className="border border-gray-200 bg-white hover:border-gray-300 transition-colors duration-200 group">
      <CardContent className="p-8">
        <div className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center mb-6 ${hoverColor} transition-colors`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <Badge className={`mb-4 ${badge.bgColor} ${badge.textColor} text-xs`}>{badge.text}</Badge>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Download className="h-4 w-4 mr-2" />
          <span>{downloadCount} downloads</span>
        </div>
        <Link href={href}>
          <Button
            variant={variant}
            className={`w-full ${variant === "outline" ? "bg-transparent" : "bg-blue-600 hover:bg-blue-700 font-medium"}`}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
