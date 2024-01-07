import { Search } from 'lucide-react'

import { Logo } from './Logo'

export function Sidebar() {
  return (
    <aside className="border-sinc-200 space-y-6 border-r px-5 py-8">
      <Logo />
      <div className="boder-sinc-300 flex w-full items-center gap-2 rounded-lg border px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="placeholder:zinc-600 flex-1 border-0 bg-transparent p-0 text-zinc-900"
          type="text"
          placeholder="Search"
        />
      </div>
    </aside>
  )
}
