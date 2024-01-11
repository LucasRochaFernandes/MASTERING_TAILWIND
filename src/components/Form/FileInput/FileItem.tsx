import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

import { Button } from '@/components/Button'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-6 border-violet-100 bg-violet-200 p-1 text-violet-600',
    deleteButton: '',
  },
  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container: 'border-violet-500',
      },
      error: {
        container: 'bg-rose-50 border-red-300',
        icon: 'border-red-50 bg-red-100 text-red-600',
        deleteButton: 'text-red-700 hover:text-red-900',
      },
    },
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  function formatBytes(bytes: number) {
    if (bytes === 0) return '0 Bytes'

    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-6 w-6" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-rose-500 ">
              Upload Failed!
            </span>
            <span className="text-sm  font-medium text-rose-300">{name}</span>
          </div>
          <button
            type="button"
            className="mt-0.5 overflow-hidden rounded-lg border border-red-500 bg-rose-100 p-1 text-sm font-semibold text-rose-700 hover:border-rose-200  hover:bg-rose-800 hover:text-rose-100 hover:shadow-md"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm  font-medium text-zinc-400">
              {formatBytes(size)}
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2  rounded-full bg-violet-500"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              ></div>
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}
      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5 " />
        </Button>
      )}
    </div>
  )
}
