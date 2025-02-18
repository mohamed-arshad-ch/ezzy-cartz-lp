import { Check } from "lucide-react"

interface FeatureChecklistProps {
  title: string
  features: string[]
}

export function FeatureChecklist({ title, features }: FeatureChecklistProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

