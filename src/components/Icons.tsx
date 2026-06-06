type IconProps = { className?: string }

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const BrandIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
    <path d="M16 2C9 7 5 14 7 23c2-5 6-9 10-11-2 5-4 9-3 13 2-3 4-6 5-10 1 4 0 8-2 12h3c3-6 5-13 3-20 3 4 5 11 3 17 2-3 4-9 2-15C25 5 21 3 16 2z" />
  </svg>
)

export const GlobeIcon = ({ className }: IconProps) => (
  <svg className={className} {...iconProps} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3c0 0-4 4.5-4 9s4 9 4 9m0-18c0 0 4 4.5 4 9s-4 9-4 9" />
    <path d="M3.6 9h16.8M3.6 15h16.8" />
  </svg>
)

export const TruckIcon = ({ className }: IconProps) => (
  <svg className={className} {...iconProps} aria-hidden="true">
    <path d="M14 18V6a1 1 0 00-1-1H3a1 1 0 00-1 1v12h12z" />
    <path d="M14 9h4l3 4v5h-7V9z" />
    <circle cx="6" cy="18" r="1.5" />
    <circle cx="18" cy="18" r="1.5" />
  </svg>
)

export const ChartIcon = ({ className }: IconProps) => (
  <svg className={className} {...iconProps} aria-hidden="true">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

export const BriefcaseIcon = ({ className }: IconProps) => (
  <svg className={className} {...iconProps} aria-hidden="true">
    <rect x="2" y="7" width="20" height="15" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    <line x1="2" y1="13" x2="22" y2="13" />
  </svg>
)

export const LinkIcon = ({ className }: IconProps) => (
  <svg className={className} {...iconProps} aria-hidden="true">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </svg>
)

export const UsersIcon = ({ className }: IconProps) => (
  <svg className={className} {...iconProps} aria-hidden="true">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
)

export const BarChartIcon = ({ className }: IconProps) => (
  <svg className={className} {...iconProps} aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
)

export const ShieldIcon = ({ className }: IconProps) => (
  <svg className={className} {...iconProps} aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

export const LeafIcon = ({ className }: IconProps) => (
  <svg className={className} {...iconProps} aria-hidden="true">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.5L2 21" />
    <path d="M17 8c1 2.5.5 6-2 8-2.5 2-5 2.5-8 2" />
    <path d="M17 8c-2-2-6-3-9-1" />
  </svg>
)

const iconMap = {
  globe: GlobeIcon,
  truck: TruckIcon,
  chart: ChartIcon,
  briefcase: BriefcaseIcon,
  link: LinkIcon,
  users: UsersIcon,
  'bar-chart': BarChartIcon,
  shield: ShieldIcon,
  leaf: LeafIcon,
} as const

export type IconName = keyof typeof iconMap

export const Icon = ({ name, className }: { name: IconName; className?: string }) => {
  const Component = iconMap[name]
  return <Component className={className} />
}
