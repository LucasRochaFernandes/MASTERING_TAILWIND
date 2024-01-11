'use client'

import { ChangeEvent, ComponentProps } from 'react'

import { useFileInput } from './Root'

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = useFileInput()
  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    if (!event.target.files?.length) {
      return
    }
    const files = Array.from(event.target.files)
    onFilesSelected(files)
  }
  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      {...props}
      onChange={handleFilesSelected}
    />
  )
}
