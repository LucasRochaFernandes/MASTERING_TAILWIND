import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 font-normal text-zinc-900 placeholder-zinc-600 focus:outline-none"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="boder-sinc-300 flex w-full items-center gap-2 rounded-lg border px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
