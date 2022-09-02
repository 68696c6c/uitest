import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as React from 'react'
import * as Styled from './Dialog.styles'
import { X } from '../Icon'

export interface DialogProps {
  adaHeadline?: string
  content: React.ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  closeDialog: () => void
}

const Dialog = ({
  adaHeadline,
  content,
  isOpen,
  closeDialog,
  setIsOpen,
}: DialogProps) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Portal>
        <Styled.DialogOverlay />
        <Styled.DialogContent>
          <VisuallyHidden.Root>
            <DialogPrimitive.Title>{adaHeadline}</DialogPrimitive.Title>
          </VisuallyHidden.Root>
          {content}
          <Styled.DialogIconButton
            aria-label="Close"
            onClick={() => {
              closeDialog()
            }}
          >
            <X vibe="neutral" />
          </Styled.DialogIconButton>
        </Styled.DialogContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export default Dialog
