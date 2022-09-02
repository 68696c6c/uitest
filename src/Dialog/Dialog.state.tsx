import React from 'react'

export type DialogState = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  closeDialog: () => void
  openDialog: (adaHeadline: string, content: React.ReactNode) => void
  content: React.ReactNode
}

export const useDialog = (): DialogState => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [content, setContent] = React.useState<React.ReactNode>('')
  return {
    isOpen,
    content,
    setIsOpen,
    closeDialog: () => {
      setIsOpen(false)
      setContent('')
    },
    openDialog: (adaHeadline: string, c: React.ReactNode) => {
      setContent(c)
      setIsOpen(true)
    },
  }
}

const DialogContext = React.createContext<DialogState>({
  isOpen: false,
  content: '',
  openDialog: () => {},
  closeDialog: () => {},
  setIsOpen: () => {},
})

interface DialogProviderProps {
  children: React.ReactNode
}

export const DialogProvider = ({ children }: DialogProviderProps) => {
  return (
    <DialogContext.Provider value={useDialog()}>
      {children}
    </DialogContext.Provider>
  )
}
