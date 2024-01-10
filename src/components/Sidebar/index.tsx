import {
  BarChart,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <aside className="border-sinc-200 flex flex-col gap-6 border-r px-5 py-8">
      <Logo />
      <div className="boder-sinc-300 mx-1 flex w-full items-center gap-2 rounded-lg border px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="placeholder:zinc-600 flex-1 border-0 bg-transparent p-0 text-zinc-900 focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <nav className="space-y-0.5">
        <NavItem title={'Home'} icon={Home} />
        <NavItem title={'Dashboard'} icon={BarChart} />
        <NavItem title={'Projects'} icon={SquareStack} />
        <NavItem title={'Reporting'} icon={Flag} />
        <NavItem title={'Users'} icon={Users} />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title={'Support'} icon={LifeBuoy} />
          <NavItem title={'Settings'} icon={Cog} />
        </nav>
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}
